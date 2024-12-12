import React from 'react';
import Image from "next/image";

interface Props {
    ImageObject: string;
    text: string | React.ReactNode;
    alt: string;
}

const ImageRelBones: React.FC<Props> = ({ ImageObject, text, alt }) => {
    return (
        <div className={'relative w-full h-full'}>
            <Image
                src={ImageObject || ''}
                alt={alt}
                fill={true}
                style={{ objectFit: "cover" }}
                className={'z-40'}
                loading="lazy"
                quality={100}
            />
            <div className={'z-50 relative'}>{text}</div>
        </div>
    );
};

export default ImageRelBones;
