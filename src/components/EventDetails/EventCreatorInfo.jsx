import { FaUserCircle, FaEnvelope } from "react-icons/fa";

const EventCreatorInfo = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
      <p className="flex items-center gap-2">
        <FaUserCircle className="text-sky-500 text-lg" />
        Created by: <strong>{event.userName}</strong>
      </p>
      <p className="flex items-center gap-2">
        <FaEnvelope className="text-sky-500 text-lg" />
        Email: <strong>{event.userEmail}</strong>
      </p>
    </div>
  );
};

export default EventCreatorInfo;
