import React from 'react';
import Image from "next/image";
import {Link} from "@/navigation";

interface Props {
    href: string;
    name: string;
    RowColor: string;
    onScrollToSection: (id: string) => void;
}
const MainScreenBtnBones: React.FC<Props> = ({href, name, RowColor, onScrollToSection }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onScrollToSection(href);
    };
    return (
        <Link href={href} onClick={handleClick} className={`bg-blackOpacity border-4 border-black hover:border-white flex items-center py-2 px-4 xs:px-8 xs:py-1 hover:bg-black `}>
            <p className={'responsive-24'}>
                {name}
            </p>
            <div className={'relative w-6 h-[60px] l:h-[40px] l:w-4 xs:w-2 xs:h-5'}>
                <Image src={'/' + RowColor + '.svg'} alt={'row down'} fill style={{objectFit: "cover"}}/>
            </div>
        </Link>
    );
};

export default MainScreenBtnBones;