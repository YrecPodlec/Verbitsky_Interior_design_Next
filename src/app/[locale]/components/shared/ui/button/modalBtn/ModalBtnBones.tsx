import React from 'react';

interface Props {
    setActive: (active: boolean) => void;
    childrenBtn: React.ReactNode;
    hover: React.ReactNode;
    className: string;
}

const ModalBtn: React.FC<Props> = ({ setActive, childrenBtn, hover, className }) => {
    return (
        <button
            onClick={() => setActive(true)}
            className={className}
        >
            {childrenBtn}
            {hover}
        </button>
    );
};

export default ModalBtn;
