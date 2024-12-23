const EventHeader = ({ event }) => {
    return (
      <div>
        <img
          src={event.image}
          alt={event.title}
          className="w-full rounded-lg mb-4 shadow-md"
        />
        <h2 className="text-3xl font-semibold">{event.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
      </div>
    );
  };
  
  export default EventHeader;
  