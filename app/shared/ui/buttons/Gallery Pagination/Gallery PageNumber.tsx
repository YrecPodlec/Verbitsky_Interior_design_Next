import React from 'react';
interface Props {
    PageNumber: number;
    SelectedPage: boolean;
}
const GalleryPageNumber_bones: React.FC<Props> = ({PageNumber, SelectedPage}) => {
    return (
        <div className={`p-2 text-px24 items-center justify-center min-w-8 max-h-8
        inline-flex rounded-xl cursor-default ${SelectedPage ? 'bg-green' : 'bg-white text-black'}`}>
            {PageNumber}
        </div>
    );
};

export default GalleryPageNumber_bones;