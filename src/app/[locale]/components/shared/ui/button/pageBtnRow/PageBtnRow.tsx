import React from 'react';
import {Link} from "@/navigation";
interface Props {
    text: string;
    href: string;
}
const PageBtnRowBones: React.FC<Props> = ({text, href}) => {
    return (
        <Link href={href} className={'responsive-32 bg-GreenLight p-4 hover:rounded-main border-2 border-PurpleLight2'}>
            {text}
        </Link>
    );
};

export default PageBtnRowBones;