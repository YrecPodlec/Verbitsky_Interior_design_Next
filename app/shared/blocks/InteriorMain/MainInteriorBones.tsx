import React from 'react';
import Image from "next/image";

const MainInterior_bones = () => {
    return (
        <div className={'w-[55%] xs:w-full'}>
            <div className={'relative w-full h-[70vh] xs:h-[60vh] before:absolute before:border-4 before:w-full before:h-full before:border-black before:z-40 before:left-4 before:top-4 screen_1280:w-[80%] xs:w-full xs:before:left-0'}>
                <div className={'z-30 bg-blackOpacity object-cover w-full h-full relative'}/>
                <Image src={'/images/miami/1.webp'} alt={''} fill quality={100} style={{objectFit: "cover"}} className={'z-20'}/>
            </div>
        </div>
    );
};

export default MainInterior_bones;