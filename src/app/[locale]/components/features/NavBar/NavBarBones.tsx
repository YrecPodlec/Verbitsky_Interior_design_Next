import React from 'react';
import { useTranslations } from "next-intl";
import {NavBarBtn, NavBarLogo} from "@/app/[locale]/components/shared";
import {Link} from "@/navigation";
import {Menu} from "@/app/[locale]/components/widgets";

const NavBarBones = () => {
    const t = useTranslations("NavBar");

    const PagesLink = [
        { textKey: 'btn1', href: '/articles' },
        { textKey: 'btn2', href: '/contacts' },
        {textKey: 'btn3', href: '/suppliers' },
        {textKey: 'btn4', href: '/art-gallery' },
    ];

    return (
        <header className={'bg-greenMainDark_opacity fixed w-full'} style={{ zIndex: 999 }}>
            <nav className={'flex px-16 py-2 justify-between 2xl-min:py-4 items-center'}
                 style={{ backdropFilter: 'blur(4px) saturate(100%)' }}>
                <div className={'flex justify-center items-center'}>
                    <Link href="/">
                        <NavBarLogo />
                    </Link>
                </div>
                <div className={'flex gap-4 xxxs:hidden'}>
                    {PagesLink.map((page, index) => (
                        <NavBarBtn text={t(page.textKey)} href={page.href} key={index} />
                    ))}
                </div>
                <div className={'xxxs:block hidden'}>
                    <Menu/>
                </div>
            </nav>
        </header>
    );
};

export default NavBarBones;
