import React from 'react';

interface PaginationBtnBonesProps {
    page: number;
    total: number;
    onClick?: () => void;
    disabled?: boolean;
}

const PaginationBtnBones: React.FC<PaginationBtnBonesProps> = ({ onClick, disabled }) => {
    return (
        <button
            className={`px-2 rounded-full responsive-48 ${
                disabled ? "bg-gray-700 cursor-not-allowed" : "text-back bg-white hover:bg-OrangePeach hover:text-white"
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {"←"}
        </button>
    );
};

export default PaginationBtnBones;
