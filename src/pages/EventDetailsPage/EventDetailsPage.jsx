import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SectionTitle from "../../components/shared/SectionTitle";

import { Helmet } from "react-helmet";
import EventHeader from "../../components/EventDetails/EventHeader";
import EventInfoGrid from "../../components/EventDetails/EventInfoGrid";
import EventCreatorInfo from "../../components/EventDetails/EventCreatorInfo";
import RegistrationButton from "../../components/EventDetails/RegistrationButton";
import RegistrationModal from "../../components/EventDetails/RegistrationModal";

const EventDetailsPage = () => {
  const { user } = useContext(AuthContext);
  const eventDetails = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
