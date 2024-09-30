import React from 'react';
import {DataHome} from "@/app/shared/hooks/data";
import {Link} from "@/navigation";
interface Props {
    href: string;
    onScrollToSection: (id: string) => void;
    name: string;
}
const LikeANavBarBtn_bones: React.FC<Props> = ({href, onScrollToSection, name}) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onScrollToSection(href);
    };
    return(
        <Link href={DataHome.hrefBenefits} onClick={handleClick} className={'flex items-center hover:bg-OrangeMain rounded-3xl p-2 justify-center text-center responsive-24'}>
            {name}
        </Link>
    );
};
export default LikeANavBarBtn_bones;