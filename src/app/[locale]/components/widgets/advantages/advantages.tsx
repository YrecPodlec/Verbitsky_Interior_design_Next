import React from 'react';
import {useTranslations} from "next-intl";
import {AdvantagesText, Title} from "@/app/[locale]/components/shared";

const Advantages_bones = () => {
    const t = useTranslations('Advantages(Benefits)')
    return (
        <section className={'gap-16 inline-flex flex-col xxxs:gap-4'}>
            <div className={'inline-block my-0 mx-auto'}>
                <Title>
                    <h1>{t("NAMETITLE")}</h1>
                </Title>
            </div>
        </section>
    );
};

export default Advantages_bones;