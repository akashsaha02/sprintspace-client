import { useState, useEffect } from 'react';

const SearchCampaign = ({ campaigns, setSortedCampaigns }) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Filter campaigns based on the search query
        const filtered = campaigns.filter(campaign =>
            campaign.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSortedCampaigns(filtered);
    }, [searchQuery, campaigns, setSortedCampaigns]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='w-full md:w-3/4'>
            <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 w-full border border-gray-600 rounded-lg focus:outline-none focus:ring focus:border-teal-600 dark:bg-gray-600 dark:text-white"
            />
        </div>
    );
};

export default SearchCampaign;