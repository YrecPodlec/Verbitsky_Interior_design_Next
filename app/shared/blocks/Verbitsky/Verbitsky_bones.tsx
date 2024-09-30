import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";

const VerbitskyBones = () => {
    const t = useTranslations("Verbitsky")
    return (
        <div className={'w-[45%] flex justify-end items-center'}>
            <div className={'text-center'}>
                <div className={'relative w-[20vw] h-[50vh] s:w-[230] s:h-[356]'}>
                    <Image src={'/verbitsky irina.webp'} alt={'Irina Verbitsky The Designer Photo'} fill quality={100}
                           style={{objectFit: "cover"}} className={'rounded-[48px]'}/>
                </div>
                <div className={'responsive-32'}>
                    <p>{t("NAME")}</p>
                    <p>{t("ROLE")}</p>
                </div>
            </div>
        </div>
    );
};

export default VerbitskyBones;