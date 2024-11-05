"use client"
import { useEffect, useState } from 'react';
import { fetchData } from '@/app/[locale]/components/shared/hooks/fetchData/fetchData';

export const useFetchData = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null); // Изменено с T[] на T | null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData(url);
                setData(result); // Устанавливаем результат запроса в data
            } catch (err) {
                setError(`Не удалось загрузить данные. ${err}`);
            } finally {
                setLoading(false);
            }
        };

        getData().then(r => r);
    }, [url]);

    return { data, loading, error };
};
