import { AiOutlineCalendar, AiOutlineDollarCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventInfoGrid = ({ event }) => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold">{event.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
      <div className="mt-4 p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">

        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-purple-500 text-lg" />
          <span className="font-semibold">Location:</span> {event.location}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCalendar className="text-purple-500 text-lg" />
          <span className="font-semibold">Start Registration:</span>{" "}
          {new Date(event.startRegistrationDate).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCalendar className="text-purple-500 text-lg" />
          <span className="font-semibold">End Registration:</span>{" "}
          {new Date(event.endRegistrationDate).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineCalendar className="text-purple-500 text-lg" />
          <span className="font-semibold">Event Date:</span>{" "}
          {new Date(event.marathonStartDate).toLocaleDateString()}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold">Total Registrations:</span>{" "}
          {event.totalRegistrationCount}
        </p>
      </div>
    </div>
  );
};

export default EventInfoGrid;
