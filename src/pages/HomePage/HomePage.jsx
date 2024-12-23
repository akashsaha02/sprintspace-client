import HowItWorks from "../../components/Home/HowItWorks";
import RunningCampaigns from "../../components/Home/RunningCampaigns";
import Banner from "../../components/Home/Banner";
import OurMission from "../../components/Home/OurMission";
import NewsletterFAQ from "../../components/Home/NewsletterFAQ";
import CarouselComp from "../../components/Home/CarouselComp";
import { Helmet } from 'react-helmet';


const HomePage = () => {

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 bg-white text-gray-900">
      <Helmet>
        <title>SprintSpace | Home</title>
      </Helmet>
      <Banner />
      {/* <CarouselComp /> */}
      {/* <RunningCampaigns /> */}
      <HowItWorks />
      <OurMission />
      <NewsletterFAQ />
    </div>
  );
};

export default HomePage;
