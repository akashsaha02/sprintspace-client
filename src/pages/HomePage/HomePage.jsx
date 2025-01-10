import HowItWorks from "../../components/Home/HowItWorks";
import Banner from "../../components/Home/Banner";
import OurMission from "../../components/Home/OurMission";
import NewsletterFAQ from "../../components/Home/NewsletterFAQ";
import { Helmet } from 'react-helmet';
import UpcomingMarathons from "../../components/Home/UpcomingMarathons";
import RunningMarathons from "../../components/Home/RunningMarathons";
import CarouselComp from './../../components/Home/CarouselComp';
import Blog from "../../components/Home/Blogs";


const HomePage = () => {

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900">
      <Helmet>
        <title>SprintSpace | Home</title>
      </Helmet>
      {/* <Banner /> */}
      <CarouselComp />
      <RunningMarathons />
      <UpcomingMarathons />
      <HowItWorks />
      <Blog/>
      <OurMission />
      <NewsletterFAQ />
    </div>
  );
};

export default HomePage;
