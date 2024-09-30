import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {AddressText, DataBaseText, MainHref, MainInterior, Verbitsky} from "@/app/shared";
import {DataHome} from "@/app/shared/hooks/data";
import {useTranslations} from "next-intl";
interface Props {
    onScrollToSection: (id: string) => void;
}
const MainScreenMobile_bones: React.FC<Props> = ({onScrollToSection}) => {
    const t = useTranslations('HomePage')
    return (
        <section className={'flex flex-col justify-between gap-16 xxxs:gap-8'}>
            <div
                className={'absolute w-[99vw] h-[95vh] top-4 left-0 text-black text-64 flex flex-col justify-between -z-10 opacity-40'}>
                <p className={'font-secondary text-right'}>INTERIOR</p>
                <p className={'font-secondary '}>DESIGN</p>
            </div>
            <div
                className={'responsive-80 xxxs:w-full z-50 absolute w-[60vw] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center xxxs:flex xs:justify-around xxxs:items-center'}>
                <div className={'border-white border-b-2 xxxs:w-3/4'}>
                    <div className={'flex gap-4 items-center'}>
                        <p className={'font-secondary'}>{t('DESIGN')}</p>
                        <div className={'border-white border-4 w-[15vw] h-16 xs:w-12 xs:h-12 xxxxs:w-8 xxxs:h-8'}/>
                        <Image src={'/rowMain_red.svg'} alt={'Arrow'} width={140} height={32} className={'-ml-12 xxxxs:w-24'}/>
                    </div>
                    <div className={'flex justify-end'}>
                        <p className={'font-secondary'}>{t('HEALTH')}</p>
                    </div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <p className={'responsive-24 w-4/5'}>
                        {t("MainTextBlock")}
                    </p>
                    <div className={'border-2 border-white rounded-3xl mt-4'}>
                        <Link href={'/'}
                              className={'flex items-center hover:bg-OrangeMain rounded-3xl p-2 justify-center text-center text-16 2xl-min:text-24 xxxs:text-12 xs:p-1'}>
                            {t('MEETING')}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'flex'}>
                <MainInterior/>
            </div>
            <div className={'flex items-center gap-16 justify-between xxxs:flex-col xs:gap-2'}>
                <div className={'flex justify-between items-center gap-8'}>
                    <AddressText/>
                    <div className={'flex flex-col gap-2'}>
                        <div className={'border-2 border-white rounded-3xl'}>
                            <Link href={DataHome.hrefBenefits}
                                  className={'flex items-center hover:bg-OrangeMain rounded-3xl p-2 justify-center text-center text-16 2xl-min:text-24 xxxs:text-12 xxxs:p-1'}>
                                {t("BENEFITS")}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={'flex justify-end flex-col gap-2'}>
                    <MainHref href={DataHome.hrefMore} name={t('ToKnowMoreInformation')} RowColor={'rowDown_red'} onScrollToSection={onScrollToSection}/>
                    <MainHref href={DataHome.hrefServices} name={t('NameServices')} RowColor={'rowDown_yellow'} onScrollToSection={onScrollToSection}/>
                </div>
            </div>
        </section>
    );
};

export default MainScreenMobile_bones;