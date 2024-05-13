import React from 'react';
import {NavigationBar} from "@/app/features";

const NavBar_Bones = () => {
    return (
        <header className={'px-screen160 py-2 screen_960:px-0 screen_960:py-0 fixed w-full'}>
            <NavigationBar/>
        </header>
    );
};

export default NavBar_Bones;