import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import marathonBanner1 from "../../assets/sliderImg1.jpg"; // Replace with your marathon-related images
import marathonBanner2 from "../../assets/sliderImg2.jpg";
import marathonBanner3 from "../../assets/sliderImg3.jpg";
import { Link } from "react-router-dom";

const CarouselComp = () => {
  const banners = [
    {
      src: marathonBanner1,
      alt: "Join the Marathon Movement",
      title: "Run for a Cause, Make an Impact",
      description: "Experience the thrill of running while supporting community causes. Every step brings change and hope.",
      linkPrimary: { path: "/register", text: "Register Now" },
      linkSecondary: { path: "/all-events", text: "Learn More" },
    },
    {
      src: marathonBanner2,
      alt: "Train, Run, Inspire",
      title: "Chase Your Dreams, Cross the Finish Line",
      description: "Be part of an unforgettable journey. From training to race day, we’re here to support your goals.",
      linkPrimary: { path: "/register", text: "Sign Up Today" },
      linkSecondary: { path: "/all-events", text: "Explore Events" },
    },
    {
      src: marathonBanner3,
      alt: "Celebrate Health and Fitness",
      title: "Join the Marathon Community",
      description: "Celebrate your health, fitness, and resilience. Let’s create unforgettable memories together.",
      linkPrimary: { path: "/register", text: "Get Started" },
      linkSecondary: { path: "/all-events", text: "View Events" },
    },
  ];

  return (
    <div className="">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch
        interval={3000}
        stopOnHover
        className="max-w-full mx-auto"
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            {/* Image Section with Overlay */}
            <div
              className="h-[500px] md:h-[600px] lg:h-[700px] w-full relative"
              style={{
                backgroundImage: `url(${banner.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Centered Text and Buttons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-faj">
                  {banner.title}
                </h1>
                <p className="max-w-3xl text-lg md:text-xl font-semibold mb-8">
                  {banner.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={banner.linkPrimary.path}
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded shadow-lg transition-all"
                  >
                    {banner.linkPrimary.text}
                  </Link>
                  <Link
                    to={banner.linkSecondary.path}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded shadow-lg transition-all"
                  >
                    {banner.linkSecondary.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
