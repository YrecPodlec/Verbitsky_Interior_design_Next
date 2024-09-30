import React from 'react';
import Image from "next/image";
import {Title} from "@/app/shared";
import {DataHome} from "@/app/shared/hooks/data";
import {useTranslations} from "next-intl";

const Benefit_bones = () => {
    const t = useTranslations('YourBenefit')
    return (
        <section id={DataHome.hrefBenefits} className={'flex flex-col gap-16 xxxs:gap-4'}>
            <div>
                <Title>
                    <h1>
                        {t("Title")}
                    </h1>
                </Title>
            </div>
            <div className={'relative w-full h-full left-0 before:absolute before:w-full before:h-full before:bg-blackOpacity before:-z-10'}>
                <Image src={'/images/miami/1.webp'} alt={'Изображение интерьера дома в Майами'} fill objectFit={'cover'} className={'-z-20'}/>
                <div>
                    {t('MainText')}
                </div>
            </div>
        </section>
    );
};

export default Benefit_bones;