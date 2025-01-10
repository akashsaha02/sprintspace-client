import { Link } from "react-router-dom";
import { GiPathDistance } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ marathon }) => {
  const formatDate = (date) => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formatter.format(date);
  };

  const startDate = formatDate(new Date(marathon.startRegistrationDate)).split(" ");

  return (
    <Link
      to={`/events/details/${marathon._id}`}
      key={marathon._id}
      className="relative group max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={marathon.image}
          alt={marathon.title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Registration Status Badge */}
        <div className="absolute flex flex-col justify-center items-center gap-2 top-4 right-4 px-3 py-1 text-md font-bold uppercase rounded shadow-lg bg-white text-black">
          <div className="text-sky-700">
            <GiPathDistance size={40} />
          </div>
          <p className="font-faj text-xl">{marathon.runningDistance}</p>
        </div>

        {/* Start Date Badge */}
        <div className="absolute top-4 text-center left-4 p-2 font-semibold uppercase rounded shadow-lg bg-white text-black">
          <span className="text-3xl font-bold font-faj block">{startDate[0]}</span>
          <span className="font-yel block">{startDate[1]}</span>
          <span className="block font-faj text-lg">{startDate[2]}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-4 pb-6 pt-2">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">
          {marathon.title}
        </h3>
        <p className="mt-2 text-sm md:text-md text-gray-600 dark:text-gray-300 truncate">
          {marathon.description}
        </p>

        {/* Additional Info */}
        <div className="mt-2 flex justify-between gap-2">
          <p className="flex items-center gap-2 text-sm md:text-md font-medium text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-red-400 text-lg" />
            {marathon.location}
          </p>
          <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Registrations: {marathon.totalRegistrationCount}
          </p>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-between gap-2 mt-4">
          <Link
            to={`/events/details/${marathon._id}`}
            className="block text-center text-sky-700 border font-medium py-2 px-4 rounded shadow-lg hover:bg-sky-700 transition-all duration-300 hover:text-white"
          >
            Learn More
          </Link>
          <Link
            to={`/events/details/${marathon._id}`}
            className="block text-center bg-sky-600 text-white font-medium py-2 px-4 rounded shadow-lg hover:bg-sky-700 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
