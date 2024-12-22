import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
import { Helmet } from 'react-helmet';



const UpdateCampaigns = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [campaignDetails, setCampaignDetails] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "personal issue",
    description: "",
    minDonation: "",
    deadline: "",
  });

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/campaigns/${id}`)
      .then((response) => {
        setCampaignDetails(response.data);
        setFormData({
          image: response.data.image || "",
          title: response.data.title || "",
          type: response.data.type || "personal issue",
          description: response.data.description || "",
          minDonation: response.data.minDonation || "",
          deadline: response.data.deadline || "",
        });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${apiBaseUrl}/campaigns/${id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Campaign updated successfully!");
        navigate("/campaigns");
      } else {
        throw new Error("Failed to update campaign.");
      }
    } catch (error) {
      toast.error("Error updating campaign: " + error.message);
    }
  };

  if (!campaignDetails) {
    return <div className="flex justify-center items-center"><span className="loading loading-dots loading-lg"></span></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-10 px-4">
      <Helmet>
        <title>SprintSpace | Update Campaign</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400 text-center mb-8">
        Update Campaign
      </h1>
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6 dark:text-white">
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-teal-300 dark:bg-gray-600 focus:outline-none"
                placeholder="Enter campaign title"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium dark:text-white"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-teal-300 dark:bg-gray-600 focus:outline-none"
                placeholder="Enter campaign description"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="minDonation"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Minimum Donation
                </label>
                <input
                  type="number"
                  name="minDonation"
                  id="minDonation"
                  value={formData.minDonation}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-teal-300 dark:bg-gray-600 focus:outline-none"
                  placeholder="Enter minimum donation amount"
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-teal-300 dark:bg-gray-600 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="image" className="block text-gray-700 font-medium dark:text-white">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                value={formData.image}
                onChange={handleChange}
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-teal-300 dark:bg-gray-600 focus:outline-none"
                placeholder="Enter image URL"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 focus:ring focus:ring-teal-300 focus:outline-none"
            >
              Update Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaigns;
