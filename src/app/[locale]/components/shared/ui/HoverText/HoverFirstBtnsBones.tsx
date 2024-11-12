import React from 'react';
import {useTranslations} from "next-intl";
interface Props {
    Title: string;
}
const HoverFirstBtnBones:React.FC<Props> = ({Title}) => {
    const t = useTranslations('ModalWindows')
    return (
        <div
            className="flex gap-2 flex-col p-4 xs:p-2 overflow-hidden absolute bg-blackOpacity z-50 w-full font-secondary text-left transition-all duration-300 ease-in-out justify-end bottom-0">
            <h1 className={'responsive-48'}>
                {Title}
            </h1>
            <p className="font-primary responsive-24 h-0 group-hover:h-[32px] overflow-hidden">
                {t('ForAll')}
            </p>
        </div>
    );
};

export default HoverFirstBtnBones;