import React from 'react';
import {ImageRel, Title} from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";

const ContactsBones = () => {
    const t = useTranslations('contacts')
    return (
        <section className={'my-8 flex flex-col gap-8'}>
            <div className={'flex'}>
                <Title Title={t('title')}/>
            </div>
            <article className={'grid grid-cols-2 xxs:grid-cols-1 gap-4'}>
                <div className={'grid gap-4'}>
                    <h2 className={'responsive-64 text-center italic'}>{t('media')}</h2>
                    <div className={'responsive-32 grid'}>
                        <address className={'grid gap-4 border-b-2 py-2'}>
                            <div className={'flex gap-4'}>
                                <span>&#9742;</span>
                                <a href="tel:+79771315563">+79771315563</a>
                            </div>
                            <div className={'flex gap-4'}>
                                <span>&#9993;</span>
                                <a href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com</a>
                            </div>
                        </address>
                        <div className={'grid grid-cols-2 responsive-64 gap-4 border-b-2 py-16'}>
                            <a className={'flex gap-4 cursor-pointer'} href={'https://www.linkedin.com/in/verbitsky-irina'}>
                                <div className={'aspect-square'}>
                                    <ImageRel  ImageObject={'/linkedin.svg'} alt={'LINKEDIN'} text={''}/>
                                </div>
                                <span>LINKEDIN</span>
                            </a>
                            <a className={'flex gap-4 cursor-pointer'} href={'https://www.instagram.com/verbitsky_design/'}>
                                <div className={'aspect-square'}>
                                    <ImageRel ImageObject={'/instagram.svg'} alt={'INSTAGRAM'} text={''}/>
                                </div>
                                <span>INSTAGRAM</span>
                            </a>
                            <a className={'flex gap-4 cursor-pointer'} href={'https://www.houzz.ru/pro/verbitskyirina'}>
                                <div className={'aspect-square'}>
                                    <ImageRel ImageObject={'/houzze.png'} alt={'HOUZZE'} text={''}/>
                                </div>
                                <span>HOUZZE</span>
                            </a>
                            <a className={'flex gap-4 cursor-pointer'} href={'https://www.behance.net/Verbitskaya_irina'}>
                                <div className={'aspect-square'}>
                                    <ImageRel ImageObject={'/behance.svg'} alt={'BEHANCE'} text={''}/>
                                </div>
                                <span>BEHANCE</span>
                            </a>
                        </div>
                        <div>
                            <p className={'text-center'}>
                                {t('form')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'justify-center text-center items-center'}>
                    тут форма
                </div>
            </article>
        </section>
    );
};

export default ContactsBones;