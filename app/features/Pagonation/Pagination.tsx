"use client"
import React from 'react';
import {PaginationArrow} from "@/app/shared";
interface props {
    DataUrl: { id: number; image: string; text: string }[];
    currentPage: number;
    setCurrentPage: (page: (prev: any) => number) => void;
}
const Pagination_bones: React.FC<props> = ({DataUrl, setCurrentPage, currentPage}) => {

    return (
        <div className={'flex gap-4 items-center'}>
            <PaginationArrow  HandleClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1} />
            {
                DataUrl.map((value, index, array) =>
                    <div key={index}>
                        <h1 className={`w-8 h-8 text-black inline-flex items-center justify-center rounded-full responsive-32 xxxs:w-4 xxxs:h-4
                        ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white'}`}>
                            {index + 1}
                        </h1>
                    </div>)
            }
            <div className={'rotate-180'}>
                <PaginationArrow HandleClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === DataUrl.length} />
            </div>
        </div>
    );
};

export default Pagination_bones;