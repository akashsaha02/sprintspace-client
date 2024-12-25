const EventHeader = ({ event }) => {
    return (
      <div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full rounded-lg mb-4 shadow-md"
        />
      </div>
    );
  };
  
  export default EventHeader;
  