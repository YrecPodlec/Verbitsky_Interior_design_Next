import React from 'react';
import {NavBarBtn, NavBarLogo, PagesLink} from "@/app/shared";
import Link from "next/link";
import {useTranslations} from "next-intl";

const NavBarBones = () => {
    const t = useTranslations("NavBarBtn")
    return (
        <header className={'bg-greenMainDark_opacity fixed w-full'} style={{zIndex: 999}}>
            <nav className={'flex px-16 py-2 justify-between 2xl-min:py-4'}
                 style={{backdropFilter: 'blur(4px) saturate(100%)'}}>
                <div className={'flex justify-center items-center'}>
                    <Link href="/">
                        <NavBarLogo/>
                    </Link>
                </div>
                <div className={'flex gap-4'}>
                    {
                        PagesLink.map((value, index, array) =>
                                <NavBarBtn text={t(value.text)} href={value.href} key={index}/>
                        )}
                </div>
            </nav>
        </header>
    );
};

export default NavBarBones;