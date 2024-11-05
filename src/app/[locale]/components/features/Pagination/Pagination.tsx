import React from "react";

interface PaginationBonesProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

const Pagination_bones: React.FC<PaginationBonesProps> = ({ page, totalPages, setPage }) => {
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

    return (
        <nav className="flex items-center space-x-4">
            <button
                onClick={handlePrevious}
                disabled={page === 1}
                className={page === 1 ? "text-gray-400" : "text-blue-600"}
            >
                {"<"}
            </button>
            <span className="text-lg font-semibold">
                {page} / {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={page === totalPages ? "text-gray-400" : "text-blue-600"}
            >
                {">"}
            </button>
        </nav>
    );
};

export default Pagination_bones;
