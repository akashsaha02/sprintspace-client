import { Link } from "react-router-dom";
import { formatDistanceToNow, format } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ marathons }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center items-center">
            {marathons.map((marathon) => {
                const isRegistrationOpen = new Date() < new Date(marathon.endRegistrationDate);

                return (
                    <div
                        key={marathon._id}
                        className="relative group max-w-md rounded-xl overflow-hidden shadow-lg transition-transform transform dark:bg-gray-900 bg-white dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                    >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <img
                                src={marathon.image}
                                alt={marathon.title}
                                className="w-full h-54 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110 "
                            />

                            {/* Registration Status Badge */}
                            <span
                                className={`absolute top-4 right-4 px-4 py-1 text-xs font-semibold uppercase rounded-full shadow-lg ${isRegistrationOpen
                                    ? "bg-green-500 text-white animate-pulse"
                                    : "bg-red-500 text-white"
                                    }`}
                            >
                                {isRegistrationOpen ? "Open" : "Closed"}
                            </span>
                        </div>

                        {/* Details Section */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">
                                {marathon.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 truncate">
                                {marathon.description}
                            </p>

                            {/* Additional Info */}
                            <div className="mt-2 flex flex-col gap-2">
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FaMapMarkerAlt className="text-red-400 text-lg" />
                                    Location: {marathon.location}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <AiOutlineCalendar className="text-blue-400 text-lg" />
                                    Start Date: {format(new Date(marathon.marathonStartDate), "MMMM dd, yyyy")}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <AiOutlineCalendar className="text-green-400 text-lg" />
                                    Registration: {format(new Date(marathon.startRegistrationDate), "MMMM dd")} - {format(new Date(marathon.endRegistrationDate), "MMMM dd, yyyy")}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                    <BiCategory className="text-purple-400 text-lg" />
                                    Distance: {marathon.runningDistance}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Total Registrations: {marathon.totalRegistrationCount}
                                </p>
                            </div>

                            {/* Learn More Button */}
                            <Link
                                to={`/events/details/${marathon._id}`}
                                className="mt-4 block w-full text-center bg-purple-600 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EventCard;
