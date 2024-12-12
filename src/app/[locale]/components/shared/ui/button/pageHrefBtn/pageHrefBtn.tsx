import React from "react";
import {Link} from "@/navigation";
interface Props {
    text: string;
    href: string;
}

const PageHrefBtn: React.FC<Props> = ({ text, href}) => {

    return (
        <Link
            href={href}
            className="border-2 border-GreenLight bg-PurpleLight2 bg-opacity-40 text-center responsive-24 rounded-3xl py-2 px-4 w-fit hover:px-12 xxs:py-0"
        >
            {text}
        </Link>
    );
};

export default PageHrefBtn;
