import React from 'react';
import { GalleryPageNumber, GalleryPagination } from "@/app/shared";
import { GalleryBlockFeachProps } from "@/app/shared/props/GalleryDataProps";

interface Props {
    MaxPageNumber: number;
    setNumberPage: React.Dispatch<React.SetStateAction<number>>;
    NumberPage: number;
    LengthPages: number;
}

const PaginationBar_bones: React.FC<Props & GalleryBlockFeachProps> = ({
                                                                           LengthPages,
                                                                           HookUseData,
                                                                           DataUrlFeatch,
                                                                           MaxPageNumber,
                                                                           setNumberPage,
                                                                           NumberPage
                                                                       }) => {
    const { DataLength } = HookUseData(DataUrlFeatch);

    return (
        <div className='flex justify-center'>
            <GalleryPagination
                rotated={false}
                onClick={() => setNumberPage(prev => prev - 1)}
                disabled={NumberPage === 1}
            />
            <div className='flex gap-4 mx-4'>
                {Array.from({ length: LengthPages },
                    (_, index) => (
                    <GalleryPageNumber
                        key={index}
                        PageNumber={index + 1}
                        SelectedPage={index + 1 === NumberPage}
                    />
                ))}
            </div>
            <GalleryPagination
                rotated={true}
                onClick={() => setNumberPage(prev => prev + 1)}
                disabled={NumberPage === MaxPageNumber}
            />
        </div>
    );
};

export default PaginationBar_bones;
