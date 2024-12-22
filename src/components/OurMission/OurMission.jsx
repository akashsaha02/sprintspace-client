import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import missionAnimation from "../../assets/mission.json"; // Replace with your animation JSON file path
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const OurMission = () => {

    return (
        <section className="py-16 px-6 dark:bg-gray-900 bg-gray-50">
            <SectionTitle title={"Our Mission"} subtitle="Discover how simple it is to start making a difference" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center space-y-8 md:space-y-0 lg:space-x-12">
                <div
                    className="flex justify-end"
                >
                    <div className="max-w-xl">
                        <Lottie animationData={missionAnimation} loop={true} />
                    </div>
                </div>
                <div className="max-w-xl">
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                        Making a Difference Together
                    </h3>
                    <p className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300">
                        <Typewriter
                            words={[
                                "Empowering businesses for a better tomorrow.",
                                "Creating sustainable solutions for the future.",
                                "Connecting communities through innovation.",
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
                        SprintSpace is dedicated to supporting businesses, fostering innovation,
                        and bridging the gap between opportunities and challenges. Our mission
                        is to create a thriving ecosystem where ideas flourish, communities
                        connect, and sustainable growth becomes a reality.
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-justify">
                        We believe in the power of collaboration and innovation to make a
                        lasting impact. Join us on this transformative journey as we work
                        together to overcome challenges and create opportunities for growth
                        and success.
                    </p>
                    <div className="mt-6">
                        <Link to={'/campaigns'} className="px-6 py-2 text-md font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg transition-transform transform focus:ring-4 focus:ring-teal-400 focus:outline-none">
                            Get Involved
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurMission;
