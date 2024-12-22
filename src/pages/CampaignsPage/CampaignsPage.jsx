import { useEffect, useState } from "react";
import axios from "axios";
import SortButton from "../../components/SortButton/SortButton";
import CampaignCard from "../../components/CampaignCard/CampaignCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
import { Helmet } from 'react-helmet';
import SearchCampaign from "../../components/SearchCampaign/SearchCampaign";



const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/campaigns`)
      .then((response) => {
        setCampaigns(response.data);
        setSortedCampaigns(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setSortedCampaigns(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="pt-10 pb-16 px-4 max-w-7xl mx-auto">
      <Helmet>
        <title>SprintSpace | All Campaigns</title>
      </Helmet>
      <div className=" ">
        <SectionTitle title="All Campaigns" subtitle="Explore and support the active campaigns." />
        <div className="flex max-w-5xl mx-auto flex-col md:flex-row items-center justify-between gap-3 mt-4">
          <SearchCampaign campaigns={campaigns} setSortedCampaigns={setSortedCampaigns} />
          <SortButton handleSort={handleSort} sortOrder={sortOrder} />
        </div>
        <CampaignCard campaigns={sortedCampaigns} />
      </div>
    </div>
  );
};

export default CampaignsPage;

