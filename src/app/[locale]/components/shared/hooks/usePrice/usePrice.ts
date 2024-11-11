import useSWR from "swr";
import {fetcher} from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";

// Основной URL из файла .env
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function usePrice(locale = 'en') {
    const endpoint = `${BASE_URL}/price?lang=${locale}`;
    const { data, error } = useSWR(endpoint, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
