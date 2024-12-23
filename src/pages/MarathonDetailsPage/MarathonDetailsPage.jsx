import { useLoaderData, useParams } from "react-router-dom";
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

const MarathonDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const p = useParams();
  // const [marathonDetails, setMarathonDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  // Check if the marathon is expired
  const isMarathonExpired = () => {
    const currentDate = new Date();
    const deadlineDate = new Date(marathonDetails.deadline);
    return currentDate > deadlineDate;
  };

  const marathonDetails = useLoaderData();
  // useEffect(() => {
  //   axios
  //     .get(`${apiBaseUrl}/campaigns/${p.id}`)
  //     .then((response) => {
  //       setMarathonDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, [p.id]);

  console.log(marathonDetails);

  const handleDonate = async () => {
    if (isMarathonExpired()) {
      Swal.fire(
        "Marathon Ended",
        "Sorry, this marathon has already ended. Registrations are no longer accepted.",
        "info"
      );
      return;
    }

    if (!user) {
      Swal.fire("Error", "You must be logged in to donate.", "error");
      return;
    }

    if (!donationAmount || parseFloat(donationAmount) < marathonDetails.minDonation) {
      Swal.fire(
        "Invalid Amount",
        `Please enter an amount greater than or equal to $${marathonDetails.minDonation}.`,
        "warning"
      );
      return;
    }

    try {
      const donationData = {
        marathonId: p.id,
        marathonTitle: marathonDetails.title,
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
        <title>SprintSpace | Marathon Details</title>
      </Helmet>
      <SectionTitle title="Marathon Details" subtitle="View the details of the selected marathon." />
      <div>
        {marathonDetails ? (
          <div className="mt-4 md:mt-6">
            {/* marathon Details */}
            <img
              src={marathonDetails.image}
              alt={marathonDetails.title}
              className="w-full rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-3xl font-semibold">{marathonDetails.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{marathonDetails.description}</p>

            {/* Additional Details */}
            <div className="mt-4 p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 grid grid-cols-1 md:grid-cols-3 items-center gap-2">
              <p className="flex items-center md:justify-center gap-2 capitalize">
                <BiCategory className="text-purple-500 text-lg" />
                <span className="font-semibold">Category:</span> {marathonDetails.type}
              </p>
              <p className="flex items-center md:justify-center gap-2">
                <AiOutlineDollarCircle className="text-purple-500 text-lg" />
                <span className="font-semibold">Minimum Donation:</span> ${marathonDetails.minDonation}
              </p>
              <p className="flex items-center md:justify-center gap-2">
                <AiOutlineCalendar className="text-purple-500 text-lg" />
                <span className="font-semibold">Deadline:</span>{" "}
                {new Date(marathonDetails.deadline).toLocaleDateString()}
              </p>
            </div>

            {/* Created By */}
            <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
              <p className="flex items-center gap-2">
                <FaUserCircle className="text-purple-500 text-lg" />
                Created by: <strong>{marathonDetails.userName}</strong>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-purple-500 text-lg" />
                Email: <strong>{marathonDetails.userEmail}</strong>
              </p>
            </div>

            {/* Show if the marathon is expired */}
            {isMarathonExpired() && (
              <p className="text-red-600 dark:text-red-400 mt-4 font-semibold">
                This marathon has ended and no longer accepts registrations.
              </p>
            )}

            {/* Donate Button */}
            {!isMarathonExpired() && (
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
                Enter the amount you wish to donate (Minimum: ${marathonDetails.minDonation}):
              </p>
              <input
                type="number"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                placeholder={`Minimum: $${marathonDetails.minDonation}`}
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

export default MarathonDetailsPage;
