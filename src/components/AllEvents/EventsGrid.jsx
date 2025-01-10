import EventCard from "../../components/EventCard/EventCard";

const EventsGrid = ({ events }) => {
  if (!events.length) {
    return (
      <p className="text-center text-gray-500 grid grid-cols-1 md:col-span-2 lg:col-span-3 2xl:col-span-4 border p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
        No events found. Try adjusting your filters.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {events.map((marathon) => (
        <EventCard key={marathon._id} marathon={marathon} />
      ))}
    </div>
  );
};

export default EventsGrid;
