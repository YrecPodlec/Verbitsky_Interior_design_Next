import React from 'react';

interface Props {
    HandleClick: () => void;
    disabled: boolean;
}

const PaginationArrow_bones: React.FC<Props> = ({ HandleClick, disabled }) => {
    return (
        <button
            onClick={HandleClick}
            disabled={disabled}
            className={`rounded-full border-4 xxxs:border-2 border-white inline-flex items-center justify-center w-12 h-12 xxxs:w-6 xxxs:h-6 cursor-pointer ${
                disabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-black'
            }`}
        >
            <span className="text-white responsive-32">
                &lt;
            </span>
        </button>
    );
};

export default PaginationArrow_bones;
