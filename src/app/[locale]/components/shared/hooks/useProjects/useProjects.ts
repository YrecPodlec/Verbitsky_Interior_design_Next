import useSWR from "swr";
import {fetcher} from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";

// Основной URL из файла .env
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function useProject(page = 1, locale = 'en') {
    const endpoint = `${BASE_URL}/projects?page=${page}}&limit=6&lang=${locale}`;
    const { data, error } = useSWR(endpoint, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    };
}
