import axios from "axios";
import { useEffect, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const useCampaign = (type) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let endpoint = "";
                if (type === "eves") {
                    endpoint = `${apiBaseUrl}/campaigns`;
                } else if (type === "running") {
                    endpoint = `${apiBaseUrl}/running-events`;
                } else {
                    throw new Error("Invalid type specified");
                }

                const response = await axios.get(endpoint, type === "running" ? { params: { limit: 4 } } : {});
                setData(response.data);
            } catch (err) {
                console.error(`Error fetching ${type}:`, err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type]);

    return [data, loading, error];
};

export default useCampaign;
