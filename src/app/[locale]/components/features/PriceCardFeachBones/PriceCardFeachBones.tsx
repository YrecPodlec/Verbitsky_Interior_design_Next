"use client";

import React, { useEffect, useState } from 'react';
import { Loading, PriceCard } from "@/app/[locale]/components/shared";
import { useTranslations } from "next-intl";
import { fetchData } from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";
import {useLocale} from "use-intl";

interface PriceCardData {
    category: string;
    price: number;
    title: string;
    services: string[];
    tags: string[];
}

const PriceCardFetchBones = () => {
    const tCard = useTranslations('priceCard');
    const fetch = useTranslations('fetch');
    const [data, setData] = useState<PriceCardData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const locale = useLocale();

    useEffect(() => {
        const loadData = async () => {
            try {
                const fetchedData = await fetchData<PriceCardData[]>('price', locale);
                if (!fetchedData) {
                    throw new Error(fetch('noData')); // Сообщение об отсутствии данных
                }
                setData(fetchedData);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError(fetch('noData'));
            } finally {
                setLoading(false);
            }
        };

        loadData().then(r => r);
    }, [locale, fetch]);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return (
            <div>
                <p>{tCard('msg1')}</p>
                <p>{tCard('msg2')}</p>
                <p>{error}</p> {/* Выводим сообщение об ошибке */}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 l:grid-cols-2 xxxs:grid-cols-1 justify-around gap-4 my-4">
            {Array.isArray(data) && data.length > 0 ? (
                data.map((value, index) => (
                    <div key={index}>
                        <PriceCard
                            category={value.category}
                            price={value.price}
                            title={value.title}
                            services={value.services}
                            tags={value.tags}
                        />
                    </div>
                ))
            ) : (
                <p>{tCard('noData')}</p>
            )}
        </div>
    );
};

export default PriceCardFetchBones;
