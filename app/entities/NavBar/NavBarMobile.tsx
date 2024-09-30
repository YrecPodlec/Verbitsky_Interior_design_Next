import React from 'react';
import Link from "next/link";
import {NavBarBtn, NavBarLogo, PagesLink} from "@/app/shared";
import {useTranslations} from "next-intl";

const NavBarMobile_bones = () => {
    const t = useTranslations("NavBarBtn")
    const BurgerObject = {
        icon: ["MENU", "CLOSE"],
    }
    const [isOpen, setIsOpen] = React.useState(true);
    const toggleValue = () => {
        setIsOpen((prevValue) => !prevValue);
    };
    return (
        <header className={'bg-greenMainDark_opacity fixed w-full'} style={{zIndex: 999}}>
            <nav className={'flex px-16 py-2 justify-between items-center'}
                 style={{backdropFilter: 'blur(4px) saturate(100%)'}}>
                <div className={'flex justify-center items-center'}>
                    <Link href="/">
                        <NavBarLogo/>
                    </Link>
                </div>
                <div className={'flex gap-4 cursor-pointer'}>
                    <div
                        className={`${isOpen ? 'rounded-full' : 'rounded-none'} border-white border-2 p-1 text-center items-center justify-around flex`}>
                        <div className={'responsive-24 transition-all'} onClick={toggleValue}>
                            {isOpen ? BurgerObject.icon[0] : BurgerObject.icon[1]}
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`absolute w-full ${isOpen ? '-ml-[999px]' : "ml-0"}`} style={{clipPath: "polygon(0 0, 60% 0, 100% 100%, 0% 100%)"}}>
                <div className={'bg-blackOpacity h-screen'} style={{backdropFilter: 'blur(4px) saturate(100%)'}}>
                    <div className={'flex flex-col items-start mx-8 py-4 gap-4'}>
                        <p className={'border-b-2 border-white w-full'}>
                            {t("Navigation")}
                        </p>
                        {PagesLink.map((value, index) =>
                            <NavBarBtn text={t(value.text)} href={value.href} key={index}/>
                        )}
                    </div>
                    <div className={'flex flex-col items-start mx-8 py-4 gap-4'}>
                        <p className={'border-b-2 border-white w-full'}>
                            {t("SocialMedia")}
                        </p>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default NavBarMobile_bones;