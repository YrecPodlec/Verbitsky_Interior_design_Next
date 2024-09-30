"use client"
import React, {useEffect, useState} from 'react';
import dynamic from "next/dynamic";

const DynamicNavBar_bones = () => {
    const [isMobileNavBar, setIsMobileNavBar] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1030px)');
        setIsMobileNavBar(mediaQuery.matches);

        const handleResize = () => {
            setIsMobileNavBar(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const MainHomeBlock = dynamic(() =>
            isMobileNavBar ? import('@/app/entities/NavBar/NavBarMobile') : import('@/app/entities/NavBar/NavBarBones'),
        { ssr: false }
    );
    return (
        <>
            <MainHomeBlock />
        </>
    );
};

export default DynamicNavBar_bones;