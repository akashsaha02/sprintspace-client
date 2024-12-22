import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import educationBanner from "../../assets/education.png";
import healthBanner from "../../assets/medical.png";
import startupBanner from "../../assets/startup.png";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  const banners = [
    {
      src: educationBanner,
      alt: "Transform Lives Through Education",
      title: "Transform Lives Through Education",
      description: "Empower underprivileged children with the gift of knowledge. Your support can open doors to opportunities, brighter futures, and lifelong dreams.",
      linkPrimary: { path: "/add-campaign", text: "Start a Campaign" },
      linkSecondary: { path: "/campaigns", text: "Discover Campaigns" },
    },
    {
      src: healthBanner,
      alt: "Be a Lifesaver in Crisis Situation",
      title: "Be a Lifesaver in Crisis Situation",
      description: "Extend a helping hand to those facing medical emergencies. Your generosity could mean hope, recovery, and survival for those in need.",
      linkPrimary: { path: "/add-campaign", text: "Start a Campaign" },
      linkSecondary: { path: "/campaigns", text: "Discover Campaigns" },
    },
    {
      src: startupBanner,
      alt: "Fuel Innovation, Fund Startups",
      title: "Fuel Innovation, Fund Startups",
      description: "Support visionary entrepreneurs to bring groundbreaking ideas to life. Be part of a journey that redefines industries and shapes the future.",
      linkPrimary: { path: "/add-campaign", text: "Start a Campaign" },
      linkSecondary: { path: "/campaigns", text: "Discover Campaigns" },
    },
  ];

  return (
    <div className="my-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch
        interval={3000}
        stopOnHover
        dynamicHeight={false}
        swipeScrollTolerance={5} // Allow vertical scroll tolerance
        preventMovementUntilSwipeScrollTolerance
        className="max-w-7xl mx-auto rounded-lg"
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              {/* Text Section */}
              <div className="px-4">
                <div className="text-left max-w-2xl">
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    {banner.title}
                  </h1>
                  <p className="mt-6 text-justify text-lg font-semibold text-gray-600 dark:text-gray-300">
                    {banner.description}
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
                    <Link
                      to={banner.linkPrimary.path}
                      className="px-6 py-2 bg-teal-500 hover:bg-teal-400 text-white text-md font-bold rounded-lg shadow-lg transition-all"
                    >
                      {banner.linkPrimary.text}
                    </Link>
                    <Link
                      to={banner.linkSecondary.path}
                      className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-md font-bold rounded-lg shadow-lg transition-all"
                    >
                      {banner.linkSecondary.text}
                    </Link>
                  </div>
                </div>
              </div>
              {/* Image Section */}
              <div>
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="object-cover w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
