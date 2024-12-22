import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { AiOutlineCalendar, AiOutlineDollarCircle } from "react-icons/ai";
import { FaUserCircle, FaEnvelope, FaDonate } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Helmet } from 'react-helmet';


const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const CampaignDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const p = useParams();
  const [campaignDetails, setCampaignDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  // Check if the campaign is expired
  const isCampaignExpired = () => {
    const currentDate = new Date();
    const deadlineDate = new Date(campaignDetails.deadline);
    return currentDate > deadlineDate;
  };

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/campaigns/${p.id}`)
      .then((response) => {
        setCampaignDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [p.id]);

  const handleDonate = async () => {
    if (isCampaignExpired()) {
      Swal.fire(
        "Campaign Ended",
        "Sorry, this campaign has already ended. Donations are no longer accepted.",
        "info"
      );
      return;
    }

    if (!user) {
      Swal.fire("Error", "You must be logged in to donate.", "error");
      return;
    }

    if (!donationAmount || parseFloat(donationAmount) < campaignDetails.minDonation) {
      Swal.fire(
        "Invalid Amount",
        `Please enter an amount greater than or equal to $${campaignDetails.minDonation}.`,
        "warning"
      );
      return;
    }

    try {
      const donationData = {
        campaignId: p.id,
        campaignTitle: campaignDetails.title,
        userEmail: user.email,
        userName: user.displayName,
        donationAmount: parseFloat(donationAmount),
        donationDate: new Date().toISOString(),
      };

      const response = await axios.post(`${apiBaseUrl}/donations`, donationData);

      if (response.status === 200) {
        setIsModalOpen(false);
        Swal.fire("Thank you!", "Your donation has been recorded successfully!", "success");
      } else {
        throw new Error("Failed to record donation.");
      }
    } catch (error) {
      console.error("Error processing donation: ", error);
      Swal.fire("Error", "An error occurred while processing your donation.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>SprintSpace | Campaign Details</title>
      </Helmet>
      <SectionTitle title="Campaign Details" subtitle="View the details of the selected campaign." />
      <div>
        {campaignDetails ? (
          <div className="mt-4 md:mt-6">
            {/* Campaign Details */}
            <img
              src={campaignDetails.image}
              alt={campaignDetails.title}
              className="w-full rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-3xl font-semibold">{campaignDetails.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{campaignDetails.description}</p>

            {/* Additional Details */}
            <div className="mt-4 p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 grid grid-cols-1 md:grid-cols-3 items-center gap-2">
              <p className="flex items-center md:justify-center gap-2 capitalize">
                <BiCategory className="text-purple-500 text-lg" />
                <span className="font-semibold">Category:</span> {campaignDetails.type}
              </p>
              <p className="flex items-center md:justify-center gap-2">
                <AiOutlineDollarCircle className="text-purple-500 text-lg" />
                <span className="font-semibold">Minimum Donation:</span> ${campaignDetails.minDonation}
              </p>
              <p className="flex items-center md:justify-center gap-2">
                <AiOutlineCalendar className="text-purple-500 text-lg" />
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(campaignDetails.deadline).toLocaleDateString()}
              </p>
            </div>

            {/* Created By */}
            <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
              <p className="flex items-center gap-2">
                <FaUserCircle className="text-purple-500 text-lg" />
                Created by: <strong>{campaignDetails.userName}</strong>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-purple-500 text-lg" />
                Email: <strong>{campaignDetails.userEmail}</strong>
              </p>
            </div>

            {/* Show if the campaign is expired */}
            {isCampaignExpired() && (
              <p className="text-red-600 dark:text-red-400 mt-4 font-semibold">
                This campaign has ended and no longer accepts donations.
              </p>
            )}

            {/* Donate Button */}
            {!isCampaignExpired() && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-6 flex items-center justify-center gap-2 px-4 py-4 bg-green-600 dark:bg-green-500 text-white font-bold rounded-lg hover:bg-green-700 dark:hover:bg-green-600 focus:outline-none shadow-md transition-all w-full"
              >
                <FaDonate className="text-lg" />
                Donate
              </button>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center max-w-4xl">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}

        {/* Donation Modal */}
        {isModalOpen && (
          <div className="modal modal-open text-black dark:text-white">
            <div className="modal-box bg-white dark:bg-gray-800">
              <h3 className="font-bold text-lg">Make a Donation</h3>
              <p className="py-2">
                Enter the amount you wish to donate (Minimum: ${campaignDetails.minDonation}):
              </p>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                placeholder={`Minimum: $${campaignDetails.minDonation}`}
              />
              <div className="modal-action">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary dark:bg-gray-700 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDonate}
                  className="btn btn-primary dark:bg-green-600"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
