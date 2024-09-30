import React from 'react';
import {AddressText, DataBaseText, LikeANavBarBtn, MainHref, MainInterior, Verbitsky} from "@/app/shared";
import Image from "next/image";
import {DataHome} from "@/app/shared/hooks/data";
import {useTranslations} from "next-intl";

interface Props {
    onScrollToSection: (id: string) => void;
}

const MainScreen_bones: React.FC<Props> = ({onScrollToSection}) => {
    const t = useTranslations('HomePage')
    return (
        <section className={'flex flex-col justify-between gap-16'}>
            <div className={'absolute w-[99vw] h-[95vh] top-4 left-0 text-black text-160 flex flex-col justify-between -z-10 opacity-40'}>
                <p className={'font-secondary text-right'}>INTERIOR</p>
                <p className={'font-secondary '}>DESIGN</p>
            </div>
            <div className={'responsive-80 xs:text-64 z-50 absolute w-[35vw] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center m:w-[40vw]'}>
                <div className={'border-white border-b-2'}>
                    <div className={'flex gap-4 items-center'}>
                        <p className={'font-secondary'}>
                            {/*text*/}
                            {t('DESIGN')}
                        </p>
                        <div className={'border-white border-4 w-16 h-16 xs:w-12 xs:h-12'}/>
                        <Image src={'/rowMain_red.svg'} alt={'Arrow'} width={140} height={32} className={'-ml-12'}/>
                    </div>
                    <div className={'flex justify-end'}>
                        {/*text*/}
                        <p className={'font-secondary'}>{t('HEALTH')}</p>
                    </div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <p className={'responsive-24'}>
                        {/*text*/}
                        {t("MainTextBlock")}
                    </p>
                    <div className={'border-2 border-white rounded-3xl'}>
                        {/*text*/}
                        <LikeANavBarBtn  href={DataHome.hrefBenefits} onScrollToSection={onScrollToSection} name={t('MEETING')}/>
                    </div>
                </div>
            </div>
            <div className={'flex'}>
                <MainInterior/>
                <Verbitsky/>
            </div>
            <div className={'flex items-center gap-16 justify-between'}>
                <div className={'flex justify-between items-center gap-8'}>
                    <AddressText/>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'border-2 border-white rounded-3xl'}>
                            {/*text*/}
                            <LikeANavBarBtn  href={DataHome.hrefBenefits} onScrollToSection={onScrollToSection} name={t("BENEFITS")}/>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-end gap-4'}>
                    {/*text*/}
                    <MainHref href={DataHome.hrefMore} name={t('ToKnowMoreInformation')} RowColor={'rowDown_red'} onScrollToSection={onScrollToSection}/>
                    <MainHref href={DataHome.hrefServices} name={t('NameServices')} RowColor={'rowDown_yellow'} onScrollToSection={onScrollToSection}/>
                </div>
            </div>
        </section>
    );
};

export default MainScreen_bones;