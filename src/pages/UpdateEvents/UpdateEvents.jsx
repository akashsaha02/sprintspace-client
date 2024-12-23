import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
import { Helmet } from "react-helmet";

const UpdateEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [campaignDetails, setCampaignDetails] = useState(null);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    minDonation: "",
    deadline: "",
    startRegistrationDate: "",
    endRegistrationDate: "",
    marathonStartDate: "",
    location: "",
    runningDistance: "",
  });

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/events/details/${id}`)
      .then((response) => {
        setCampaignDetails(response.data);
        setFormData({
          image: response.data.image || "",
          title: response.data.title || "",
          description: response.data.description || "",
          minDonation: response.data.minDonation || "",
          deadline: response.data.deadline || "",
          startRegistrationDate: response.data.startRegistrationDate || "",
          endRegistrationDate: response.data.endRegistrationDate || "",
          marathonStartDate: response.data.marathonStartDate || "",
          location: response.data.location || "",
          runningDistance: response.data.runningDistance || "",
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
        `${apiBaseUrl}/events/${id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Event updated successfully!");
        navigate("/campaigns");
      } else {
        throw new Error("Failed to update event.");
      }
    } catch (error) {
      toast.error("Error updating event: " + error.message);
    }
  };

  if (!campaignDetails) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-10 px-4">
      <Helmet>
        <title>SprintSpace | Update Campaign</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400 text-center mb-8">
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
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
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
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                placeholder="Enter campaign description"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


              <div>
                <label
                  htmlFor="startRegistrationDate"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Start Registration Date
                </label>
                <input
                  type="date"
                  name="startRegistrationDate"
                  id="startRegistrationDate"
                  value={new Date(formData.startRegistrationDate).toISOString().split("T")[0]}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="endRegistrationDate"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  End Registration Date
                </label>
                <input
                  type="date"
                  name="endRegistrationDate"
                  id="endRegistrationDate"
                  value={new Date(formData.endRegistrationDate).toISOString().split("T")[0]}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="marathonStartDate"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Marathon Start Date
                </label>
                <input
                  type="date"
                  name="marathonStartDate"
                  id="marathonStartDate"
                  value={new Date(formData.marathonStartDate).toISOString().split("T")[0]}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                  placeholder="Enter location"
                />
              </div>
              <div>
                <label
                  htmlFor="runningDistance"
                  className="block text-gray-700 font-medium dark:text-white"
                >
                  Running Distance
                </label>
                <select
                  name="runningDistance"
                  id="runningDistance"
                  value={formData.runningDistance}
                  onChange={handleChange}
                  className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                >
                  <option value="3k">3k</option>
                  <option value="10k">10k</option>
                  <option value="25k">25k</option>
                </select>
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
                className="block w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white focus:ring focus:ring-purple-300 dark:bg-gray-600 focus:outline-none"
                placeholder="Enter image URL"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:ring focus:ring-purple-300 focus:outline-none"
            >
              Update Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvents;
