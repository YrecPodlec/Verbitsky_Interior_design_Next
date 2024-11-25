import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";

const Footer = () => {
    const t = useTranslations('footer')
    return (
        <section className={'bg-greenMainDark_opacity py-8 px-16'}>
            <div className={'relative w-full h-20'}>
                <Image src={'/icons/Logo_white.webp'} alt={'Logo of Irina Verbitsky'} fill={true}
                       style={{ objectFit: "contain" }} loading='lazy' />
            </div>
            <div className={'gap-4 flex justify-around flex-wrap'}>
                <div className={'flex flex-col'}>
                    <h1 className={'responsive-48'}>{t('contacts')}:</h1>
                    <div className={'grid gap-2'}>
                        <a href="">+79771315563</a>
                        <a href="">verbitsky.vastu@gmail.com</a>
                    </div>
                </div>
                <div className={'flex flex-col'}>
                    <h1 className={'responsive-48'}>{t('media')}:</h1>
                    <div className={'grid gap-2'}>
                        <a href="">INSTAGRAM</a>
                        <a href="">BEHANCE</a>
                        <a href="">LINKEDIN</a>
                        <a href="">HOUZZE</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;