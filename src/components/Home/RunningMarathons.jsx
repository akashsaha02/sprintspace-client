import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";
import EventCard from './../EventCard/EventCard';
import UseEvents from "../../hooks/UseEvents";
import Loader from "../shared/Loader";

const RunningMarathons = () => { // Default limit to 6
    const [events, setEvents] = useState([]);

    const [eventsData, loading, error] = UseEvents("running");

    // console.log(eventsData.marathons)


    useEffect(() => {
        if (eventsData) {
            setEvents(eventsData.marathons.slice(0,4) || []); // Adjust to match the API response structure
        }
    }, [eventsData]);

    if (loading) {
        <Loader/>
    }

    if (error) {
        return <p className="text-center text-red-500">Error fetching data</p>;
    }

    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-10 md:py-16 max-w-[1920px] mx-auto px-4">
                <SectionTitle title="Running Marathons" subtitle="Explore and Join Our Marathon Events" />
                <div className="flex justify-center items-center" >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
                        {events.map((marathon) => (
                            <EventCard key={marathon._id} marathon={marathon} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center my-6">
                    <Link to="/all-events" className=" text-center text-white text-lg rounded-lg px-6 py-2 bg-sky-600 dark:text-sky-400 font-semibold mt-4 hover:underline">See More</Link>
                </div>
            </div>
        </section>
    );
};

export default RunningMarathons;
