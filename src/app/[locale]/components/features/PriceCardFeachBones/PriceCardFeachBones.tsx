import React from 'react';
import { Loading, PriceCard } from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";
interface PriceCardData {
    category: string;
    price: number;
    title: string;
    services: string[];
    tags: string[];
}

interface PriceCardFetchBonesProps {
    data?: PriceCardData[];
    error?: string | null;
}


const PriceCardFetchBones: React.FC<PriceCardFetchBonesProps> = ({ data, error }) => {
    const tCard = useTranslations('priceCard')
    if (!data && !error) {
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
