import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
// import missionAnimation from "../../assets/marathon-mission.json"; // Replace with a relevant marathon-themed animation
import SectionTitle from "../shared/SectionTitle";
import run from '../../assets/run.png';
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <section className="py-16 px-6 dark:bg-gray-900 bg-gray-50">
      <SectionTitle
        title={"Our Mission"}
        subtitle="Unite, Inspire, and Achieve Greatness Through Running"
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center space-y-8 md:space-y-0 lg:space-x-12">
        <div className="flex justify-end">
          <div className="max-w-xl">
            <img src={run} alt="Runner" />
          </div>
        </div>
        <div className="max-w-xl">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Run for a Cause, Run for Yourself
          </h3>
          <p className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
            <Typewriter
              words={[
                "Inspire change, one step at a time.",
                "Celebrate health, unity, and determination.",
                "Cross the finish line together.",
              ]}
              loop={true} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">
            At SprintSpace, we believe in the transformative power of marathons.
            Our mission is to promote health, inspire community spirit, and
            support meaningful causes through running. Whether you're a seasoned
            runner or a first-time participant, every step you take brings us closer
            to creating a healthier, more connected world.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">
            Together, we can achieve greatness. Marathons are not just about
            crossing the finish line but also about building resilience, making
            memories, and fostering unity. Join our community and take strides
            toward a brighter, more active future.
          </p>
          <div className="mt-6">
            <Link
              to={'/marathons'}
              className="px-6 py-2 text-md font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg transition-transform transform focus:ring-4 focus:ring-purple-400 focus:outline-none"
            >
              Explore Marathons
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
