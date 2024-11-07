"use client";
import React, { useState, useEffect } from 'react';
import { Loading, PriceCard } from "@/app/[locale]/components/shared";
import { useTranslations } from "next-intl";
import { PriceCardData } from "@/app/[locale]/components/shared/interface/interface";
import {getPriceCardData} from "@/app/[locale]/components/shared/hooks/fetchData/FetchPrice";

const PriceCardFetchBones = () => {
    const [data, setData] = useState<PriceCardData[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const lang = 'en';  // Или можно передать через пропс/контекст
    const tCard = useTranslations('priceCard');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const fetchedData = await getPriceCardData(lang);
                setData(fetchedData);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Ошибка загрузки данных");
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(r => r);
    }, [lang]);

    if (loading) {
        return <div><Loading /></div>;
    }

    if (error) {
        return (
            <div>
                <p>{tCard('msg1')}</p>
                <p>{tCard('msg2')}</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 l:grid-cols-2 xxxs:grid-cols-1 justify-around gap-4 my-4">
            {Array.isArray(data) ? (
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
