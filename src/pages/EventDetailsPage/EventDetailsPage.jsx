import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SectionTitle from "../../components/shared/SectionTitle";
import { Helmet } from "react-helmet";
import EventHeader from "../../components/EventDetails/EventHeader";
import EventInfoGrid from "../../components/EventDetails/EventInfoGrid";
import EventCreatorInfo from "../../components/EventDetails/EventCreatorInfo";
import RegistrationButton from "../../components/EventDetails/RegistrationButton";
import RegistrationModal from "../../components/EventDetails/RegistrationModal";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import axios from "axios";
import Swal from "sweetalert2";
import RunningMarathons from "../../components/Home/RunningMarathons";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const EventDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // For navigation
  const eventDetails = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [runningEvents, setRunningEvents] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/running-events`, { withCredentials: true })
      .then((response) => {
        setRunningEvents(response.data.randomRunningEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Convert event start date to timestamp
  const eventStartDate = new Date(eventDetails?.marathonStartDate).getTime() || 0;
  const currentTime = Date.now();
  const remainingTime = Math.max(Math.floor((eventStartDate - currentTime) / 1000), 0);

  const handleRegister = () => {
    if (!user) {

      Swal.fire({
        title: 'You need to log in to register for this event.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      navigate("/login"); // Redirect to login page
      return;
    }
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto my-10 px-4 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>SprintSpace | Marathon Details</title>
      </Helmet>
      <SectionTitle title="Marathon Details" subtitle="View the details of the selected marathon." />

      {eventDetails ? (
        <div className="mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <EventHeader event={eventDetails} />
            </div>
            <div>
              <EventInfoGrid event={eventDetails} />
              <EventCreatorInfo event={eventDetails} />

              {/* Registration Button */}
              <RegistrationButton
                event={eventDetails}
                user={user}
                onRegister={handleRegister}
              />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center my-2">
            <CountdownCircleTimer
              isPlaying
              duration={remainingTime} // Duration in seconds
              colors={[
                ["#4CAF50", 0.5], // Green for the first 50% of time
                ["#F7B801", 0.3], // Yellow for the next 30% of time
                ["#A30000", 0.2], // Red for the remaining 20% of time
              ]}
              trailColor="#aaaaff"
              strokeWidth={8}
              size={180}
              rotation="counterclockwise" // Run the timer counterclockwise
              onComplete={() => ({ shouldRepeat: false })}
            >
              {({ remainingTime }) => {
                const days = Math.floor(remainingTime / (24 * 3600));
                const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                return (
                  <div className="flex flex-col items-center text-gray-800 dark:text-gray-200 p-4">
                    <div className="text-lg font-semibold uppercase tracking-wide">
                      Starts In
                    </div>
                    <div className="text-2xl font-bold mt-2 text-center">
                      {days > 0 ? `${days}d ` : ""}
                      {hours.toString().padStart(2, "0")}h{" "}
                      {minutes.toString().padStart(2, "0")}m{" "}
                      {seconds.toString().padStart(2, "0")}s
                    </div>
                  </div>
                );
              }}
            </CountdownCircleTimer>
          </div>
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mt-6">
              More Running Events
            </h2>
            <div><RunningMarathons/></div>
          </div>

          {/* Registration Modal */}
          {isModalOpen && (
            <RegistrationModal
              event={eventDetails}
              user={user}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetailsPage;
