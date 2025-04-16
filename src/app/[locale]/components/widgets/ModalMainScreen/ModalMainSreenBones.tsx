import React from 'react';
import {HoverFirstBtn, ImageRel} from "@/app/[locale]/components/shared";
import {ModalComponent} from "@/app/[locale]/components/features";
import {useTranslations} from "next-intl";
import {PriceProducts} from "@/app/[locale]/components/widgets";

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

    ]
    return (
        <section className="grid grid-cols-4 xs:grid-cols-2 justify-between gap-8">
            {
                data.map((item, index) =>
                    <ModalComponent key={index}
                        childrenBtn={
                        item.childrenBtn
                        }
                        hover={<HoverFirstBtn Title={t(item.title)}/>} className={'z-40 relative cursor-pointer w-full aspect-square rounded-main overflow-hidden group mx-auto my-0 xs:h-64 xxs:h-48'}>
                        {item.children}
                    </ModalComponent>
                )
            }
        </section>
    );
};

export default ModalMainScreenBones;