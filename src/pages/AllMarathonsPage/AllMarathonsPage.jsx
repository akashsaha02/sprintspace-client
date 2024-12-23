import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
import axios from "axios";
import SortButton from "../../components/SortButton/SortButton";
import SectionTitle from "../../components/shared/SectionTitle";
import EventCard from "../../components/EventCard/EventCard";
import SearchCampaign from "../../components/SearchCampaign/SearchCampaign";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;



const AllMarathonsPage = () => {
  const [events, setEvents] = useState([]);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/events`)
      .then((response) => {
        setEvents(response.data);
        setSortedEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSort = () => {
    const sorted = [...events].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setSortedEvents(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  console.log(events);

  return (
    <div className="pt-10 pb-16 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>SprintSpace | All Marathons</title>
      </Helmet>
      <div className=" ">
        <SectionTitle title="All Marathons" subtitle="Explore and support the active campaigns." />
        <div className="flex max-w-5xl mx-auto flex-col md:flex-row items-center justify-between gap-3 mt-4">
          <SearchCampaign campaigns={events} setSortedCampaigns={setSortedEvents} />
          <SortButton handleSort={handleSort} sortOrder={sortOrder} />
        </div>
        {/* <CampaignCard campaigns={sortedEvents} /> */}
        <EventCard marathons={sortedEvents} />
      </div>
    </div>
  );
};

export default AllMarathonsPage;

