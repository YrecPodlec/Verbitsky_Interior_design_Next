import React from 'react';
import {ImageRel, ModalHref, PageHrefBtn} from "@/app/[locale]/components/shared";
import { Title } from "@/app/[locale]/components/shared";
import { useTranslations } from "next-intl";
import { PriceCardFeach } from "@/app/[locale]/components/features";
import {Contacts} from "@/app/[locale]/components/widgets";

const PriceProductsBones = () => {
    const t = useTranslations('ModalWindows');
    const tb = useTranslations('buttons');
    const image = useTranslations('images');

    return (
        <section className="modal-container max-h-[80vh] flex flex-col gap-8 mx-4 xxxs:mx-1 overflow-y-auto">
            <header className="flex justify-center">
                <Title Title={t('ModalTitle_1')}/>
            </header>
            <section className="grid grid-cols-2 responsive-32">
                <article className="flex flex-col gap-8 xxxs:gap-2">
                    <h2 className="text-center">{t('ServicesTitle')}</h2>
                    <article>
                        <ul className="list-disc ml-2 responsive-24">
                            <li>{t('li1')}</li>
                            <li>{t('li2')}</li>
                            <li>{t('li3')}</li>
                        </ul>
                    </article>
                    <article className="flex gap-8 xs:flex-col xs:gap-2">
                        <p>{t('PriceAndPlan')}</p>
                        <button className="w-fit my-0 mx-auto justify-center flex">
                            <ModalHref href="#services" text={tb('services')}/>
                        </button>
                    </article>
                    <article className="py-1 flex flex-col gap-4 border-y-2">
                        <p>{t('p1')}</p>
                        <p>{t('p2')}</p>
                        <button className="w-full justify-center flex">
                            <PageHrefBtn href="/articles" text={tb('articles')}/>
                        </button>
                    </article>
                    <div
                        className="relative w-[95%] rounded-main xxxs:rounded-mobile h-[30vh] xxxs:h-[16vh] overflow-hidden my-0 mx-auto">
                        <ImageRel ImageObject="https://verbitsky-design-server.vercel.app/images/dubai/12-dubai.webp"
                                  alt={image('image_dubai')} text=""/>
                    </div>
                </article>
                <article className="text-right">
                    <div
                        className="relative w-[95%] rounded-main xxxs:rounded-mobile h-[30vh] xxxs:h-[16vh] overflow-hidden my-0 mx-auto">
                        <ImageRel ImageObject="https://verbitsky-design-server.vercel.app/images/dubai/13-dubai.webp"
                                  alt={image('image_dubai')} text=""/>
                    </div>
                    <h1 className={'responsive-48 text-center font-secondary'}>{t('suppliers')}</h1>
                    <article className="py-4 flex flex-col gap-4 border-y-2">
                        <p>{t('pSuppliers')}</p>
                        <button className="w-full justify-center flex">
                            <PageHrefBtn text={tb('suppliers')} href="/suppliers"/>
                        </button>
                    </article>
                </article>
            </section>
            <section id="services">
                <PriceCardFeach/>
            </section>
            <section id="contacts">
                <Contacts/>
            </section>
        </section>

    );
};

export default PriceProductsBones;
