import { Link } from "react-router-dom";
import { format } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

const UpcomingMarathons = () => {
    const marathons = [
        // Static content for demonstration
        {
            _id: "1",
            image: "https://via.placeholder.com/300",
            title: "Spring City Marathon",
            description: "Experience the scenic routes of Spring City.",
            location: "Spring City, CA",
            marathonStartDate: "2024-03-15T00:00:00.000Z",
            startRegistrationDate: "2024-01-01T00:00:00.000Z",
            endRegistrationDate: "2024-03-01T00:00:00.000Z",
            runningDistance: "10km",
            totalRegistrationCount: 200,
        },
        {
            _id: "2",
            image: "https://via.placeholder.com/300",
            title: "Riverfront Run",
            description: "Run along the beautiful riverfront trails.",
            location: "Riverfront, NY",
            marathonStartDate: "2024-04-10T00:00:00.000Z",
            startRegistrationDate: "2024-02-01T00:00:00.000Z",
            endRegistrationDate: "2024-04-01T00:00:00.000Z",
            runningDistance: "5km",
            totalRegistrationCount: 150,
        },
        // Add four more events similarly
    ];

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">Upcoming Marathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                {marathons.map((marathon) => {
                    const isRegistrationOpen = new Date() < new Date(marathon.endRegistrationDate);

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
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Registration Status Badge */}
                                <span
                                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase rounded-full shadow-lg ${isRegistrationOpen
                                        ? "bg-green-500 text-white animate-pulse"
                                        : "bg-red-500 text-white"
                                        }`}
                                >
                                    {isRegistrationOpen ? "Open" : "Closed"}
                                </span>
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
                                            <AiOutlineCalendar className="text-green-400 text-lg" />
                                            Registration: {format(new Date(marathon.startRegistrationDate), "MMMM dd")} - {format(new Date(marathon.endRegistrationDate), "MMMM dd, yyyy")}
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

                                {/* Learn More Button */}
                                <Link
                                    to={`/events/details/${marathon._id}`}
                                    className="block text-center bg-purple-600 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 mt-4"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default UpcomingMarathons;
