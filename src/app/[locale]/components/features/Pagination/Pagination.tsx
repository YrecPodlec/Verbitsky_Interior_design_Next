import React from "react";
import {PaginationBtn} from "@/app/[locale]/components/shared";

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
    const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex items-center space-x-12">
            <PaginationBtn
                page={page}
                total={totalPages}
                onClick={handlePrevious}
                disabled={page === 1}
            />
            <span className="flex gap-4">
                {
                    numbers.map((number) =>
                        <div key={number} className={`py-2 px-4 cursor-default ${page === number ? "bg-OrangePeach text-white" : "bg-white"} text-back rounded-full`}>{number}</div>)
                }
            </span>
            <div className={'rotate-180'}>
                <PaginationBtn
                    page={page}
                    total={totalPages}
                    onClick={handleNext}
                    disabled={page === totalPages}
                />
            </div>
        </nav>
    );
};

export default PaginationBones;
