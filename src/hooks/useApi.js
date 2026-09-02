import { useEffect, useState } from "react";

const getRandomLimit = () => Math.floor(Math.random() * 10) + 1

function useApi(url = "") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [limit, setLimit] = useState(getRandomLimit)

    const refetch = () => setLimit(getRandomLimit())

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(`${url}?_limit=${limit}`);

                if (!response.ok) throw new Error("Không thể tải dữ liệu");

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [limit, url]);

    return { data, loading, error, refetch };
}

export default useApi;
