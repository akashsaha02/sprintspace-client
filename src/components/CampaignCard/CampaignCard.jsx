import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { AiOutlineDollarCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";


const CampaignCard = ({ campaigns }) => {
    const checkIfRunning = (deadline) => {
        const now = new Date();
        const campaignDeadline = new Date(deadline);
        return now < campaignDeadline;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center items-center">
            {campaigns.map((campaign) => {
                const isRunning = checkIfRunning(campaign.deadline);
                return (
                    <div
                        key={campaign._id}
                        className="relative group max-w-md rounded-xl overflow-hidden shadow-lg transition-transform transform dark:bg-gray-900 bg-white dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                    >
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-54 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110 "
                            />

                            {/* Campaign Status Badge */}
                            <span
                                className={`absolute top-4 right-4 px-4 py-1 text-xs font-semibold uppercase rounded-full shadow-lg ${isRunning
                                    ? "bg-green-500 text-white animate-pulse"
                                    : "bg-red-500 text-white"
                                    }`}
                            >
                                {isRunning ? "Running" : "Ended"}
                            </span>
                        </div>

                        {/* Details Section */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">
                                {campaign.title}
                            </h3>
                            <p className="flex items-center gap-2 font-bold dark:text-white mt-4">
                                <AiOutlineDollarCircle className="text-yellow-400 text-lg" />
                                ${campaign.minDonation} Minimum Donation
                            </p>

                            {/* Additional Info */}
                            <div className="mt-2 flex flex-row justify-between gap-2">
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                                    <BiCategory className="text-teal-400 text-lg" />
                                    {campaign.type}
                                </p>
                                <p className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <AiOutlineCalendar className="text-blue-400 text-lg" />
                                    {formatDistanceToNow(new Date(campaign.deadline), {
                                        addSuffix: true,
                                    })}
                                </p>
                            </div>

                            {/* Learn More Button */}
                            <Link
                                to={`/campaigns/${campaign._id}`}
                                className="mt-4 block w-full text-center bg-teal-600 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300"
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

export default CampaignCard;
