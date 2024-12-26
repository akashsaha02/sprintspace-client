import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import EventCardImg from "../EventCard/EventCardImg";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
import EventCard from './../EventCard/EventCard';

const RunningMarathons = () => { // Default limit to 6
    const [marathons, setMarathons] = useState([]);


    useEffect(() => {
        const fetchMarathons = async () => {
            try {
                const response = await axios.get(`${apiBaseUrl}/upcoming?limit=6`, { withCredentials: true });
                setMarathons(response.data);
            } catch (error) {
                console.error("Error fetching marathons:", error);
            }
        };

        fetchMarathons();
    }, []);

    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-10 md:py-16 max-w-7xl mx-auto px-4">
                <SectionTitle title="Running Marathons" subtitle="Explore and Join Our Marathon Events" />
                <div className="flex justify-center items-center" >
                    <EventCard marathons={marathons} />
                    {/* <EventCardImg marathons={marathons} /> */}
                </div>
                <div className="flex justify-center items-center my-6">
                    <Link to="/marathons" className=" text-center text-white text-lg rounded-lg px-6 py-2 bg-purple-600 dark:text-purple-400 font-semibold mt-4 hover:underline">See More</Link>
                </div>
            </div>
        </section>
    );
};

export default RunningMarathons;
