import React from 'react';
import {LikeANavBarBtn, MainHref, NavBarBtn, Title} from "@/app/shared";
import {DataHome} from "@/app/shared/hooks/data";
import Image from "next/image";
import {useTranslations} from "next-intl";
interface Props {
    onScrollToSection: (id: string) => void;
}
const Prices_bones: React.FC<Props> = ({onScrollToSection}) => {
    const t = useTranslations('PricesTextAbout')
    return (
        <section className={'flex gap-16 flex-col'}>
            <div className={'flex justify-end'}>
                <Title>
                    <h1>
                        {t("Title")}
                    </h1>
                </Title>
            </div>
            <div className={'flex gap-16 xxxs:flex-col'}>
                <div className="w-1/2 [&>p]:responsive-48 xxxs:[&>p]:responsive-32 flex flex-col gap-4 xxxs:w-full">
                    <p>
                        {t("AboutCompany")}
                    </p>
                    <div className={'responsive-32 ml-4 xxxs:responsive-24'}>
                        <li>
                            {t("LI.Li1")}
                        </li>
                        <li>
                            {t("LI.Li2")}
                        </li>
                        <li>
                            {t("LI.Li3")}
                        </li>
                    </div>
                    <p>{t("ArticlesText")}</p>
                    <div className={'flex gap-16'}>
                        <div className={'border-white border-2 rounded-3xl'}>
                            <NavBarBtn text={t('btnArticles')} href={'/articles'}/>
                        </div>
                        <div className={'border-2 border-white rounded-3xl inline-flex'}>
                            <LikeANavBarBtn  href={DataHome.hrefServices} onScrollToSection={onScrollToSection} name={t("btnServices")}/>
                        </div>
                    </div>
                    <p>
                        {t("addon")}
                    </p>
                    <div className={'inline-block'}>
                        <div className={'border-white border-2 rounded-3xl inline-block'}>
                            <NavBarBtn text={t("btnCollections")} href={'/collections'}/>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 inline-flex flex-col justify-end gap-4 mt-4 xxxs:mt-0 xxxs:gap-0 xxxs:w-full">
                    <div className={'relative w-full h-full '}>
                        <Image src={'/images/miami/1.webp'} alt={'Image'} fill objectFit={'cover'}/>
                    </div>
                    <div className={'flex justify-end'}>
                        <MainHref href={DataHome.StepsHref} name={t("btnSteps")} RowColor={'rowDown_Lblue'} onScrollToSection={onScrollToSection}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices_bones;