import React from 'react';
import {Link} from "@/navigation";
interface NavBarBtn{
    text: string;
    href: string
}
const NavBarBtnBones: React.FC<NavBarBtn> = ({text, href}) => {
    return (
        <Link href={href} className={'flex items-center hover:bg-OrangeMain rounded-3xl p-2 justify-center text-center responsive-24'}>
            {text}
        </Link>
    );
};

export default NavBarBtnBones;