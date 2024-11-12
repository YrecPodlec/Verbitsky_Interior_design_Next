import React from 'react';

interface PaginationBtnBonesProps {
    page: number;
    onClick?: () => void;
    disabled?: boolean;
}

const PaginationBtnBones: React.FC<PaginationBtnBonesProps> = ({ onClick, disabled }) => {
    return (
        <button
            className={`px-2 rounded-full responsive-48 ${
                disabled ? "bg-gray-700 opacity-50 cursor-not-allowed" : "border border-white hover:bg-OrangePeach hover:text-white"
            }`}
            onClick={onClick}
            disabled={disabled}
        >
            {"←"}
        </button>
    );
};

export default PaginationBtnBones;
