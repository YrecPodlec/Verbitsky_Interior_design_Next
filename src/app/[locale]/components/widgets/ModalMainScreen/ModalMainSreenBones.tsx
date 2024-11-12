import React from 'react';
import {HoverFirstBtn, ImageRel} from "@/app/[locale]/components/shared";
import {ModalComponent} from "@/app/[locale]/components/features";
import {useTranslations} from "next-intl";
import {Advantages, Benefit, PriceProducts, WorkSteps} from "@/app/[locale]/components/widgets";

const ModalMainScreenBones = () => {
    const t = useTranslations('ModalWindows')
    const images = useTranslations('images')
    const data = [
        // УСЛУГИ И ПРОДУКТЫ
        {
            childrenBtn: <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/miami/3.webp'}
                                          text={""} alt={images('image_miami')}/>,
            children: <PriceProducts />,
            title: 'ModalIcon_1'
        },
        // ЭТАПЫ РАБОТЫ
        {
            childrenBtn: <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/los-angeles/2-la.webp'} text={''} alt={images('image_losAngeles')} />,
            children: <WorkSteps/>,
            title: 'ModalIcon_2'
        },
        // ПРЕИМУЩЕСТВА
        {
            childrenBtn: <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/miami-studio/1-studio-miami.webp'} text={''} alt={images('image_miamiStudio')} />,
            children: <Advantages/>,
            title: 'ModalIcon_3'
        },
        // Ваша выгода
        {
            childrenBtn: <ImageRel ImageObject={'https://verbitsky-design-server.vercel.app/images/magellan-street/6.webp'} text={''} alt={images('image_magellan')} />,
            children: <Benefit/>,
            title: 'ModalIcon_4'
        }

    ]
    return (
        <section className="grid grid-cols-4 xs:grid-cols-2 justify-between gap-8">
            {
                data.map((item, index) =>
                    <ModalComponent key={index}
                        childrenBtn={
                        item.childrenBtn
                        }
                        hover={<HoverFirstBtn Title={t(item.title)}/>}>
                        {item.children}
                    </ModalComponent>
                )
            }

        </section>
    );
};

export default ModalMainScreenBones;