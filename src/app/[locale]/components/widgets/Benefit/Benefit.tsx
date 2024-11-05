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
        <section className={''}>
            <ImageRel  ImageObject={'https://verbitsky-design-server.vercel.app/images/river-park/1-river.webp'} alt={image('image_riverPark')} text={<Text/>}/>
        </section>
    );
};

export default BenefitBones;