'use client';
import React, {useEffect} from 'react';
import {NavBarButton, NavBarLogo, PagesLink} from "@/app/shared";
import Link from "next/link";
import styles from './NavigationBar.module.scss';

const NavigationBar_bones = () => {
    const HomePage = PagesLink.find(page => page.id === 'home');
    const [hidden, setHidden] = React.useState(true);
    const [left, setLeft] = React.useState('-ml-[100vw]');
    const [menuText, setMenuText] = React.useState('MENU');
    const [rounded, setRounded] = React.useState('rounded-none');
    const [shadow, setShadow] = React.useState('shadow-shadow_none');
    useEffect(() => {
        if (hidden) {
            setLeft('-ml-[100vw]')
            document.body.style.overflowY = 'auto'
            setMenuText('MENU')
            setRounded('rounded-none')
            setShadow('shadow-shadow_none')
        } else {
            setLeft('-ml-0')
            document.body.style.overflowY = 'hidden'
            setMenuText('CLOSE')
            setRounded('rounded-full')
            setShadow('shadow-shadow_Navbar')
        }
    }, [hidden]);
    console.log(left, hidden)
    return (
        <nav className={'flex justify-between w-full screen_960:flex-col'}>
            <div className={'flex justify-between screen_960:px-4 screen_960:bg-blue-900'}>
                <div>
                    {HomePage &&
                        <Link href={HomePage.href} className={'w-fit'}>
                            <NavBarLogo/>
                        </Link>
                    }
                </div>
                <div className={`hidden screen_960:flex my-auto cursor-pointer text-px12 ${rounded} ${styles.burger_menu}`} onClick={() => setHidden(!hidden)}>
                    <p className={'p-2'}>
                        {menuText}
                    </p>
                </div>
            </div>
            <div
                className={`flex gap-4 my-auto screen_960:bg-green screen_960:mt-12 ${shadow} ${left} ${styles.ListOfButtons}`}>
                {PagesLink.map((value, index, array) =>
                    value.id !== 'home' &&
                    <Link href={value.href} key={index} className={'w-fit'}>
                        <NavBarButton ButtonLabel={value.text}/>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavigationBar_bones;