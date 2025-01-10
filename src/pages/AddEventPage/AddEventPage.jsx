import { useContext, useState } from "react";
import { toast } from "react-hot-toast"; // For toast notifications
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import SectionTitle from '../../components/shared/SectionTitle';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import runningImg from '../../assets/marathon-running.png'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const AddEventPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startRegistrationDate: new Date(),
    endRegistrationDate: new Date(),
    marathonStartDate: new Date(),
    location: "",
    runningDistance: "3 KM",
    description: "",
    image: "",
    createdAt: new Date(),
    totalRegistrationCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiBaseUrl}/events`,
        {
          ...formData,
          userEmail: user.email,
          userName: user.displayName,
        },
        {
          withCredentials: true
        }
      );

      if (response.status === 200) {
        toast.success("Marathon added successfully!");
        navigate("/all-events");
      } else {
        throw new Error("Failed to add marathon.");
      }
    } catch (error) {
      toast.error("Error adding marathon:", error.message);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100 min-h-screen px-2">
      <Helmet>
        <title>SprintSpace | Add Marathon</title>
      </Helmet>

      <div className="max-w-3xl mx-auto my-10 px-4 py-6 bg-white dark:bg-gray-800 rounded ">
        <SectionTitle
          title="Add New Marathon"
          subtitle={`Welcome, ${user.displayName}!`}
        />

        <form className="rounded-lg p-4" onSubmit={handleSubmit}>
          <div className="w-96 mx-auto mb-4 ">
            <img src={runningImg} alt="Marathon" className="w-full" />
          </div>
          {/* Marathon Title */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Marathon Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Enter marathon title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Start Registration Date */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">Start Registration Date</label>
              <DatePicker
                selected={formData.startRegistrationDate}
                onChange={(date) => handleDateChange(date, "startRegistrationDate")}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            {/* End Registration Date */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">End Registration Date</label>
              <DatePicker
                selected={formData.endRegistrationDate}
                onChange={(date) => handleDateChange(date, "endRegistrationDate")}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            {/* Marathon Start Date */}
            <div className="mb-4 w-full">
              <label className="block text-gray-700 dark:text-gray-200">Marathon Start Date</label>
              <DatePicker
                selected={formData.marathonStartDate}
                onChange={(date) => handleDateChange(date, "marathonStartDate")}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Location */}
            <div className="mb-4 w-full">
              <label className="block text-gray-700 dark:text-gray-200">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                placeholder="Enter location"
              />
            </div>

            {/* Running Distance */}
            <div className="mb-4 w-full">
              <label className="block text-gray-700 dark:text-gray-200">Running Distance</label>
              <select
                name="runningDistance"
                value={formData.runningDistance}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                <option value="3 KM">3 KM</option>
                <option value="10 KM">10 KM</option>
                <option value="25 KM">25 KM</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Enter description"
            />
          </div>

          {/* Marathon Image */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200">Marathon Image</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              placeholder="Enter image URL"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-sky-600 dark:bg-sky-500 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-sky-600 focus:outline-none"
          >
            Add Marathon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventPage;
