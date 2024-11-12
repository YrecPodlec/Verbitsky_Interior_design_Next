import React from 'react';
import {useTranslations} from "next-intl";

interface Props {
    setActive: (active: boolean) => void;
    childrenBtn: React.ReactNode;
    hover: React.ReactNode;
}

const ModalBtn: React.FC<Props> = ({ setActive, childrenBtn, hover }) => {
    return (
        <button
            onClick={() => setActive(true)}
            className="z-40 relative cursor-pointer w-full aspect-square rounded-main overflow-hidden group mx-auto my-0 xs:h-64 xxs:h-48"
        >
            {childrenBtn}
            {hover}
        </button>
    );
};

export default ModalBtn;
