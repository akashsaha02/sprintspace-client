import axios from "axios";
import { useEffect, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const UseEvents = (type, email = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                let endpoint = "";
                let params = {};

                if (type === "events") {
                    endpoint = `${apiBaseUrl}/events`;
                    if (email) {
                        params.email = email;
                    }
                    else {
                        params = null;
                    }
                } else if (type === "running") {
                    endpoint = `${apiBaseUrl}/running-events`;
                    params.limit = 6;
                } else {
                    throw new Error("Invalid type specified");
                }

                const response = await axios.get(endpoint, { params });
                setData(response.data);
            } catch (err) {
                console.error(`Error fetching ${type}:`, err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, email]);

    return [data, loading, error];
};

export default UseEvents;
