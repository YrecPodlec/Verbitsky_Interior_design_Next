import React from 'react';
import Image from "next/image";

const NavBarLogoBones = () => {
    return (
        <div className={'relative NavLogo h-8 w-20 flex items-center justify-center'}>
            <Image
                src={'/icons/Logo_white.webp'}
                alt={'Logo Verbitsky interior design studio'}
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    );
};

export default NavBarLogoBones;
