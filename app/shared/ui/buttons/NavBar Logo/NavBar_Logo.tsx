import React from 'react';
import Image from "next/image";

const NavBarLogo_bones = () => {
    return (
        <div className={''}>
            <Image src={'/icons/Logo_white.webp'} alt={'Verbitsky Logo'}
                   className={'w-auto h-12'}
                   width={160} height={48} />
        </div>
    );
};

export default NavBarLogo_bones;