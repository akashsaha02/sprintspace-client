import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import CampaignTable from "../../components/MyCampaignTable/MyCampaignTable";
import CampaignActions from "../../components/MyCampaignActions/MyCampaignActions";
import SectionTitle from "../../components/shared/SectionTitle";
import { Helmet } from "react-helmet";
import UseEvents from "../../hooks/UseEvents";
import Loader from "../../components/shared/Loader";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const MyEventsPage = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  // Fetch events using the custom hook
  const [eventsData, loading, error] = UseEvents("events", email);
  console.log(eventsData)

  // Local state for events
  const [events, setEvents] = useState([]);

  // Sync eventsData to local events state
  useEffect(() => {
    if (eventsData) {
      setEvents(eventsData || []); // Use `events` key from API response
    }
  }, [eventsData]);

  // Handle Delete Function
  const handleDelete = useCallback((id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${apiBaseUrl}/events/${id}`, { withCredentials: true })
          .then(() => {
            setEvents((prevEvents) =>
              prevEvents.filter((event) => event._id !== id)
            );
            Swal.fire("Deleted!", "Your event has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting event:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the event.",
              "error"
            );
          });
      }
    });
  }, []);

  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <div className="flex justify-center items-center">
            <img
              src={value}
              alt="Event"
              className="w-20 h-20 object-cover rounded-md border border-gray-300"
            />
          </div>
        ),
      },
      {
        Header: "Event Title",
        accessor: "title",
      },
      {
        Header: "Running Distance",
        accessor: "runningDistance",
        Cell: ({ value }) => <span className="line-clamp-1">{value}</span>,
      },
      {
        Header: "Event Date",
        accessor: "marathonStartDate",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: ({ value }) => <span className="line-clamp-1">{value}</span>,
      },
      {
        Header: "Actions",
        accessor: "_id",
        Cell: ({ value }) => (
          <CampaignActions id={value} handleDelete={handleDelete} />
        ),
      },
    ],
    [handleDelete]
  );

  // Render Component
  return (
    <div className="py-10">
      <Helmet>
        <title>SprintSpace | My Marathons</title>
      </Helmet>
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="mb-10">
          <SectionTitle
            title="My Marathons"
            subtitle={"Manage your active marathons below."}
          />
        </div>
        {loading ? (
         <div className='min-h-screen justify-center items-center '>
         <Loader/>
      </div>
        ) : error ? (
          <p className="text-center text-red-500">Error fetching data</p>
        ) : events.length > 0 ? (
          <CampaignTable campaigns={events} columns={columns} />
        ) : (
          <p className="text-center text-gray-600 mt-10">
            You haven&apos;t created any marathons yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyEventsPage;
