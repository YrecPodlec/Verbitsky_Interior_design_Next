import {useEffect, useState} from "react";

export const useData_bones = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [DataLength, setDataLength] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const fetchedData = await response.json();
                setData(fetchedData);
                setDataLength(fetchedData.results.length);
            } catch (error) {
                // @ts-ignore
                setError(error.message);
            } finally {
                setTimeout(() => setLoading(false), 500)
            }
        };
        fetchData();
    }, [url]);
    return { data, loading, error, DataLength };
}