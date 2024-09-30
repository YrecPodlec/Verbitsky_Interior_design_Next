import React from 'react';
import RootLayout from './[locale]/layout';
import {useTranslations} from "next-intl";
import {NavBarBtn} from "@/app/shared";
export default function NotFound() {
    const t = useTranslations("NotFound")
    console.log(t('TextMain'))
    let locale = 'ru'
    return (
        <RootLayout params={{ locale }}>
            <div
                className={'absolute w-[99vw] h-[95vh] top-4 left-0 text-black text-160 flex flex-col justify-between -z-10 opacity-40'}>
                <p className={'font-secondary text-right'}>INTERIOR</p>
                <p className={'font-secondary '}>DESIGN</p>
            </div>
            <section className={'flex w-full items-center text-white text-center h-screen justify-center'}>
                <div className={'flex flex-col gap-16'}>
                    <p className={'responsive-96 font-secondary'}>404 :(</p>
                    <p className={'my-auto ml-0 responsive-32'} style={{ whiteSpace: 'pre-line' }}>
                        {t('TextMain').split('.').join('.\n')}
                    </p>
                    <div className={'inline-flex mx-auto my-auto border-white border-2 rounded-3xl'}>
                        <NavBarBtn text={t("ToMain")} href={'/'}/>
                    </div>
                </div>
            </section>
        </RootLayout>
    );
}
