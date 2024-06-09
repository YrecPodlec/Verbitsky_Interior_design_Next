import React from 'react';
import Image from "next/image";
interface Props{
    ImageURL: string;
    ImageAlt: string;
}
const GalleryImage_bones: React.FC<Props> = ({ImageURL, ImageAlt}) => {
    return (
        <>
            <Image src={ImageURL} alt={ImageAlt} fill quality={80} style={{objectFit: "cover"}}/>
        </>
    );
};

export default GalleryImage_bones;