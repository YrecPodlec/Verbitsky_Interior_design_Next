"use client"
import React from 'react';
import {Loading, PriceCard} from "@/app/[locale]/components/shared";
import {useFetchData} from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";
import {useLocale} from "use-intl";
import {useTranslations} from "next-intl";
import {PriceCardData} from "@/app/[locale]/components/shared/interface/interface";

const PriceCardFetchBones = () => {
    const locale = useLocale();
    const url = `https://verbitsky-design-server.vercel.app/price?lang=${locale}`;
    const { data, loading, error } = useFetchData<PriceCardData>(url);
    const tCard = useTranslations('priceCard');

    if (loading) {
        return (
            <div>
                <Loading/>
            </div>
        );
    }

    if (error) {
        return <div>
            <p>
                {tCard('msg1')}
            </p>
            <p>
                {tCard('msg2')}
            </p>
        </div>;
    }
    console.log("price: ", data)
    return (
        <div className={'grid grid-cols-4 l:grid-cols-2 xxxs:grid-cols-1 justify-around gap-4 my-4'}>
            {
                data.map((value) => <div key={value._id}>
                    <PriceCard  category={value.category} price={value.price} title={value.title}  services={value.services} tags={value.tags}/>
                </div>)
            }
        </div>
    );
};

export default PriceCardFetchBones;
