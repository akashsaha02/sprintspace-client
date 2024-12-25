import { Helmet } from "react-helmet";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchEvents = (page) => {
    axios
      .get(`${apiBaseUrl}/events?page=${page}&limit=9`) // Set limit to 9
      .then((response) => {
        setEvents(response.data.events);
        setSortedEvents(response.data.events);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  const handleSort = () => {
    const sorted = [...events].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setSortedEvents(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="pt-10 pb-16 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>SprintSpace | All Marathons</title>
      </Helmet>
      <div>
        <SectionTitle title="All Marathons" subtitle="Explore and support the active campaigns." />
        <div className="flex max-w-5xl mx-auto flex-col md:flex-row items-center justify-between gap-3 mt-4">
          <SearchCampaign campaigns={events} setSortedCampaigns={setSortedEvents} />
          <SortButton handleSort={handleSort} sortOrder={sortOrder} />
        </div>
        <EventCard marathons={sortedEvents} />
        <div className="flex justify-center mt-8">
          <div className="btn-group ">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`btn mr-2 ${currentPage === 1 ? "btn-disabled" : "btn-outline"}`}
            >
              «
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`btn mr-2 ${currentPage === index + 1 ? "btn-active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`btn ${currentPage === totalPages ? "btn-disabled" : "btn-outline"}`}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMarathonsPage;
