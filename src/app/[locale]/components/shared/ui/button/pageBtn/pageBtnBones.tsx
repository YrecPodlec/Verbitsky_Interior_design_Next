import React from 'react';
import {Link} from "@/navigation";
interface NavBarBtn {
    text: string;
    href: string
}
const PageBtnBones: React.FC<NavBarBtn> = ({text, href}) => {
    return (
        <Link href={href} className={'border-2 border-GreenLight bg-PurpleLight2 bg-opacity-40 text-center responsive-24 rounded-3xl py-2 px-4 w-fit hover:px-12'}>
            {text}
        </Link>
    );
};

export default PageBtnBones;
