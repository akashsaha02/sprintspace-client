import { useLoaderData } from "react-router-dom";
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

const EventDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const eventDetails = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Convert event start date to timestamp
  const eventStartDate = new Date(eventDetails?.startDate).getTime();
  const currentTime = Date.now();
  const remainingTime = Math.max((eventStartDate - currentTime) / 1000, 0); // Time in seconds

  return (
    <div className="max-w-4xl mx-auto my-10 px-4 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>SprintSpace | Marathon Details</title>
      </Helmet>
      <SectionTitle title="Marathon Details" subtitle="View the details of the selected marathon." />

      {eventDetails ? (
        <div>
          <EventHeader event={eventDetails} />
          <EventInfoGrid event={eventDetails} />
          <EventCreatorInfo event={eventDetails} />

          {/* Countdown Timer */}
          <div className="flex justify-center my-6">
            <CountdownCircleTimer
              isPlaying
              duration={remainingTime} // Duration in seconds
              colors={["#4CAF50", "#F7B801", "#A30000"]}
              colorsTime={[remainingTime * 0.5, remainingTime * 0.2, 0]} // Adjust colors
              onComplete={() => ({ shouldRepeat: false })}
            >
              {({ remainingTime }) => {
                const days = Math.floor(remainingTime / (24 * 3600));
                const hours = Math.floor((remainingTime % (24 * 3600)) / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                return (
                  <div className="text-center">
                    <div className="text-xl font-bold">Starts In</div>
                    <div className="text-2xl">
                      {days}d {hours}h {minutes}m {seconds}s
                    </div>
                  </div>
                );
              }}
            </CountdownCircleTimer>
          </div>

          <RegistrationButton
            event={eventDetails}
            user={user}
            onRegister={() => setIsModalOpen(true)}
          />
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