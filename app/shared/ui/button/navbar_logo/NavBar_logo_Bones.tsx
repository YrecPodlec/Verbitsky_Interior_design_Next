import React from 'react';
import Image from "next/image";

const NavBarLogoBones = () => {
    return (
        <div className={'relative NavLogo h-8 flex items-center xxxs:h-8 justify-center'}>
            <Image src={'/icons/Logo_white.webp'} alt={'Logo Verbitsky interior design studio'} fill style={{objectFit: "contain"}}/>
        </div>
    );
};

export default NavBarLogoBones;
