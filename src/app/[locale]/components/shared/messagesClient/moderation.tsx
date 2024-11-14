import React from 'react';
import { ImageRel } from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";

const Moderation = () => {
    const t = useTranslations('images')
    const moderator = useTranslations('moderator')
    return (
        <section className="flex w-full h-[80vh] justify-between items-center xs:flex-col xs:justify-around my-4">
            <article className="flex flex-col justify-center gap-16 w-[60%] xs:w-full">
                <h1 className="responsive-80">{moderator('title')}</h1>
                <div>
                    <p className="responsive-48">{moderator('p1')}</p>
                    <p className="responsive-48">{moderator('p2')}</p>
                </div>
                <span className="italic responsive-32">{moderator('p3')}</span>
            </article>
            <div className={'w-1/3 h-3/4 xs:w-full xs:h-1/3'}>
                <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/miami/2.webp'} text={''} alt={t('image_miami')} />
            </div>
        </section>
    );
};

export default Moderation;
