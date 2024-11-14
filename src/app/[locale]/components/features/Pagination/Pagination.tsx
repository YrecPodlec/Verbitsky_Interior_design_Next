import React from "react";
import { PaginationBtn } from "@/app/[locale]/components/shared";

interface PaginationBonesProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

const PaginationBones: React.FC<PaginationBonesProps> = ({ page, totalPages, setPage }) => {
    const handleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const ArrayPages = []
    for (let i = 1; i <= totalPages; i++) {
        ArrayPages.push(i)
    }

    return (
        <nav className="flex items-center space-x-12">
            <PaginationBtn
                page={page}
                onClick={handlePrevious}
                disabled={page === 1}
            />
            <span className="flex gap-4">
                {ArrayPages.map((number) => (
                    <div
                        key={number}
                        className={`py-2 px-4 cursor-pointer ${page === number ? "bg-OrangePeach text-white" : "bg-white text-back hover:bg-green hover:text-white"} rounded-full`}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </div>
                ))}
            </span>
            <div className="rotate-180">
                <PaginationBtn
                    page={page}
                    onClick={handleNext}
                    disabled={page === totalPages}
                />
            </div>
        </nav>
    );
};

export default PaginationBones;
