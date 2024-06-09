import React from 'react';

interface Props {
    rotated: boolean,
    disabled?: boolean,
    onClick?: () => void
}

const GalleryPagination_bones: React.FC<Props> = ({rotated, disabled, onClick}) => {
    const rotationClass = rotated ? 'rotate-180' : 'rotate-0';
    const cursorClass = disabled ? 'cursor-default opacity-50' : 'hover:bg-orange hover:scale-110';
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`text-px16 border-2 inline-flex max-w-8 max-h-8
            rounded-full p-2 text-center items-center justify-center 
            ${rotationClass} 
            ${cursorClass}`}
        >
            ◄
        </button>
    );
};

export default GalleryPagination_bones;
