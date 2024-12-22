import SectionTitle from "../SectionTitle/SectionTitle";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create a Campaign",
      description: "Start your donation drive by creating a campaign.",
    },
    {
      number: 2,
      title: "Receive Donations",
      description: "Let people contribute to your cause effortlessly.",
    },
    {
      number: 3,
      title: "Make an Impact",
      description: "Deliver the donations and share the joy.",
    },
  ];

  return (
    <section className="py-12 md:py-16 dark:bg-gray-900 dark:text-white text-gray-800">
      <div className="px-4 max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionTitle title="How It Works" subtitle="Discover how simple it is to start making a difference" />
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center space-y-6 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 
              dark:bg-gray-800 dark:text-gray-300
              bg-white text-gray-800
              `}
            >
              {/* Step Number */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full font-bold bg-teal-400 text-gray-900" dark:bg-teal-500 dark:text-white
                `}
              >
                {step.number}
              </div>
              {/* Step Title */}
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              {/* Step Description */}
              <p className="text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
