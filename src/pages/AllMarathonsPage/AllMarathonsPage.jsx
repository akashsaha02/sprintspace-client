import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import UseEvents from "../../hooks/UseEvents";
import Loader from "../../components/shared/Loader";
import EventsGrid from "../../components/AllEvents/EventsGrid";
import Filters from "../../components/AllEvents/Filter";

const AllMarathonsPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const [startDateRange, setStartDateRange] = useState({ start: "", end: "" });


  const [eventsData, loading, error] = UseEvents("events");

  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData || []);
      setFilteredEvents(eventsData || []);
    }
  }, [eventsData]);

  const handleFilterChange = () => {
    let filtered = events;

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((event) => event.type === selectedType);
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter((event) =>
        event.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Filter by name
    if (searchName) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    // Filter by marathon start date range
    if (startDateRange.start && startDateRange.end) {
      const startDate = new Date(startDateRange.start);
      const endDate = new Date(startDateRange.end);

      filtered = filtered.filter((event) => {
        const eventDate = new Date(event.marathonStartDate);
        return eventDate >= startDate && eventDate <= endDate;
      });
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedType, selectedLocation, searchName, startDateRange]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error fetching data</p>;
  }

  return (
    <div className="pt-10 pb-16 px-4 max-w-[1920px] mx-auto">
      <Helmet>
        <title>SprintSpace | All Marathons</title>
      </Helmet>
      <SectionTitle title="All Marathons" subtitle="Explore and support the active campaigns." />
      <div className="grid xl:grid-cols-5 gap-8 mt-8">
        {/* Sidebar */}
        <div className="xl:col-span-1 lg:col-span-1 lg:block">
          <Filters
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            searchName={searchName}
            setSearchName={setSearchName}
            startDateRange={startDateRange}
            setStartDateRange={setStartDateRange}
          />
        </div>

        {/* Main Content */}
        <div className="xl:col-span-4">
          <EventsGrid events={filteredEvents} />
        </div>
      </div>
    </div>
  );
};

export default AllMarathonsPage;
