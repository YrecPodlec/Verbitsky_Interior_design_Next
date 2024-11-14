"use client";
import React from 'react';
import { usePrice } from "@/app/[locale]/components/shared/hooks/usePrice/usePrice";
import { useLocale } from "next-intl";
import { Loading, PriceCard } from "@/app/[locale]/components/shared";

// Интерфейс для данных, получаемых от usePrice
interface PriceCardData {
    category: string;
    price: number;
    title: string;
    services: string[];
    tags: string[];
}

const PriceCardFetchBones = () => {
    const locale = useLocale();
    const { data, isLoading, isError } = usePrice(locale);

    if (isError) {
        return <p>{isError}</p>;
    }
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 l:grid-cols-2 xxxs:grid-cols-1 justify-around gap-4 my-4">
            {data.map((value: PriceCardData, index: number) => (
                <div key={index}>
                    <PriceCard
                        category={value.category}
                        price={value.price}
                        title={value.title}
                        services={value.services}
                        tags={value.tags}
                    />
                </div>
            ))}
        </div>
    );
};

export default PriceCardFetchBones;
