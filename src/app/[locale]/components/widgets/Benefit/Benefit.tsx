import React from 'react';
import {ImageRel, PageBtn} from "@/app/[locale]/components/shared";
import {useTranslations} from "next-intl";

const Text = ()=>  {
    const tb = useTranslations('buttons');
    return(
        <section className={'grid gap-8 p-8 responsive-64 text-center'}>
            <p>
                ВЕЛИКИЙ ТЕКСТ
            </p>
            <div>
                <p className={'responsive-32'}>
                    текст переходящий к кнопке
                </p>
                <PageBtn href={'/contacts'} text={tb('contacts')}/>
            </div>
        </section>
    )
}

const BenefitBones = () => {
    const image = useTranslations('images');
    return (
        <section className={'relative w-[90vw] before:absolute before:bg-opacity-50 before:w-full before:h-full before:bg-black before:z-50'}>
            <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/los-angeles/2-la.webp'} alt={image('image_losAngeles')} text={<Text/>}/>
        </section>
    );
};

export default BenefitBones;