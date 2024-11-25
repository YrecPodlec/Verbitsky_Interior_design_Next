import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import {AddressText, MainInterior, PageBtn, Verbitsky} from "@/app/[locale]/components/shared";

const MainScreen_bones = () => {
    const t = useTranslations('HomePage')
    const b = useTranslations('buttons')
    return (
        <section className={'flex flex-col justify-between gap-16 xxxs:gap-4'}>
            <div className={'absolute w-[95vw] h-[85vh] top-0 left-0 my-8 mx-4 text-black responsive-256 flex flex-col justify-between -z-10 opacity-40'}>
                <p className={'font-secondary text-right'}>INTERIOR</p>
                <p className={'font-secondary '}>DESIGN</p>
            </div>
            <div className={'cursor-default responsive-80 absolute w-[40vw] xxxxs:w-[90%] xs:w-3/4 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center'}>
                <div className={'border-white border-b-2 xs:w-1/2 mx-auto my-0 xxxs:w-full'}>
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
                <div className={'flex flex-col items-center gap-2'}>
                    <p className={'responsive-32'}>
                        {/*text*/}
                        {t("MainTextBlock")}
                    </p>
                    <PageBtn href={'#contacts'} text={t('Btn')}/>
                </div>
            </div>
            <div className={'flex cursor-default -z-10'}>
                <MainInterior/>
                <Verbitsky/>
            </div>
            <div className={'grid grid-cols-2 xxxs:grid-cols-1 xxxs:gap-4 items-center gap-16 justify-center xxxs:my-4'}>
                <div className={'cursor-default mx-auto my-0'}>
                    <AddressText/>
                </div>
                <div className={'w-2/4'}>
                    <PageBtn text={b('portfolio')} href={'#portfolio'}/>
                </div>
            </div>
        </section>
    );
};

export default MainScreen_bones;