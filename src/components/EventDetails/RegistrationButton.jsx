const RegistrationButton = ({ event, user, onRegister }) => {
  const isRegistrationOpen = () => {
    const now = new Date();
    return (
      now >= new Date(event.startRegistrationDate) &&
      now <= new Date(event.endRegistrationDate)
    );
  };

  if (!isRegistrationOpen()) {
    return (
      <p className="text-red-600 dark:text-red-400 mt-4 font-semibold">
        Registration for this event is closed.
      </p>
    );
  }

  return (
    <button
      onClick={onRegister}
      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      Register
    </button>
  );
};

export default RegistrationButton;
