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
                src={ImageObject}
                alt={alt}
                fill={true}
                style={{ objectFit: "cover" }}
                className={'z-40'}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"  // Указываем размеры для разных разрешений
            />
            <div className={'z-50 relative'}>{text}</div>
        </div>
    );
};

export default ImageRelBones;
