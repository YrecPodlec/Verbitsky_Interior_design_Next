import React from 'react';
import {useTranslations} from "next-intl";

interface Props {
    setActive: (active: boolean) => void;
    childrenBtn: React.ReactNode;
    Title: string;
}

const ModalBtn: React.FC<Props> = ({ setActive, childrenBtn, Title }) => {
    const t = useTranslations('ModalWindows')
    return (
        <button
            onClick={() => setActive(true)}
            className="z-40 relative cursor-pointer w-full aspect-square rounded-main overflow-hidden group mx-auto my-0 xs:h-64 xxs:h-48"
        >
            {childrenBtn}
            <div className="flex gap-2 flex-col p-4 xs:p-2 overflow-hidden responsive-48 absolute bg-blackOpacity z-50 w-full font-secondary text-left transition-all duration-300 ease-in-out justify-end bottom-0">
                <h1>
                    {Title}
                </h1>
                <p className="font-primary responsive-24 h-0 group-hover:h-[32px] overflow-hidden">
                    {t('ForAll')}
                </p>
            </div>
        </button>
    );
};

export default ModalBtn;
