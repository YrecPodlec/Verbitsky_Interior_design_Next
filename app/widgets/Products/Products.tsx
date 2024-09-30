import React from 'react';
import { DataHome, DataProducts } from "@/app/shared/hooks/data";
import { Products, Title } from "@/app/shared";
import {useTranslations} from "next-intl";

const Products_bones = () => {
    const t = useTranslations('ProductsPrices')
    return (
        <section id={DataHome.hrefServices}>
            <div>
                <Title>
                    <h1>{t("Title")}</h1>
                </Title>
            </div>
            <div className={'my-4 flex xxxs:flex-col'}>
                <div className={`w-full xxxs:block hidden`}>
                    {t("TextAbout")}
                </div>
                <Products data={DataProducts} />
                <div className={'w-[25%] xxxs:hidden'}>
                    {t("TextAbout")}
                </div>
            </div>
        </section>
    );
};

export default Products_bones;
