import React from 'react';
import Image from "next/image";

const MainInterior_bones = () => {
    return (
        <div className={'w-[55%] xs:w-full'}>
            <div className={'before:border-opacity-25 relative w-full h-[70vh] xs:h-[50vh] before:absolute before:border-4 before:w-full before:h-full before:border-white before:z-40 before:left-4 before:top-4 xxxxs:before:border-none'}>
                <div className={'z-30 bg-blackOpacity object-cover w-full h-full relative'}/>
                <Image src={'https://verbitsky-design-server.vercel.app/images/miami/1.webp'} alt={''} fill quality={100} style={{objectFit: "cover"}} className={'z-20'}/>
            </div>
        </div>
    );
};

export default MainInterior_bones;