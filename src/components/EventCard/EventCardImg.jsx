import { Link } from "react-router-dom";
import { format } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const EventCardImg = ({ marathons }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center items-center">
            {marathons.map((marathon) => {
                // const isRegistrationOpen = new Date() < new Date(marathon.endRegistrationDate);

                return (
                    <div
                        key={marathon._id}
                        className="relative group max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform bg-white dark:bg-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                    >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <img
                                src={marathon.image}
                                alt={marathon.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Registration Status Badge */}
                            {/* <span
                                className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase rounded-full shadow-lg ${isRegistrationOpen
                                    ? "bg-green-500 text-white animate-pulse"
                                    : "bg-red-500 text-white"
                                    }`}
                            >
                                {isRegistrationOpen ? "Open" : "Closed"}
                            </span> */}
                        </div>

                        {/* Title Section */}
                        <div className="p-4 text-center bg-gray-50 dark:bg-gray-800">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 truncate group-hover:text-purple-600 transition-colors duration-300">
                                {marathon.title}
                            </h3>
                        </div>

                        {/* Details Section */}
                        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold truncate">{marathon.title}</h3>
                                <p className="text-sm">{marathon.description}</p>

                                <div className="space-y-2">
                                    <p className="flex items-center gap-2 text-sm">
                                        <FaMapMarkerAlt className="text-red-400 text-lg" />
                                        Location: {marathon.location}
                                    </p>
                                    <p className="flex items-center gap-2 text-sm">
                                        <AiOutlineCalendar className="text-blue-400 text-lg" />
                                        Start Date: {format(new Date(marathon.marathonStartDate), "MMMM dd, yyyy")}
                                    </p>
                                    <p className="flex items-center gap-2 text-sm">
                                        <BiCategory className="text-purple-400 text-lg" />
                                        Distance: {marathon.runningDistance}
                                    </p>
                                    <p className="flex items-center gap-2 text-sm">
                                        Total Registrations: {marathon.totalRegistrationCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EventCardImg;
