import SectionTitle from "../shared/SectionTitle";

const WhyJoinMarathon = () => {
  const benefits = [
    {
      icon: "🏃‍♂️",
      title: "Stay Fit and Healthy",
      description:
        "Participating in marathons is a great way to stay active and improve your overall fitness.",
    },
    {
      icon: "🌍",
      title: "Support Great Causes",
      description:
        "Many marathons raise funds for charities, allowing you to contribute to meaningful social causes.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Build Community",
      description:
        "Connect with like-minded individuals and enjoy the camaraderie of marathon enthusiasts.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 mt-10">
      <div className="max-w-[1920px] mx-auto px-4">
      <SectionTitle title="Why Join a Marathon?" subtitle="Discover the Benefits of Participating in Marathons" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-purple-100 border border-purple-800 dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinMarathon;