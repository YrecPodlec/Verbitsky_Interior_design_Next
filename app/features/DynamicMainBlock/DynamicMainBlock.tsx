"use client"
import React, {useEffect, useState} from 'react';
import dynamic from "next/dynamic";
import {scrollToSection} from "@/app/shared/hooks/scrollSection";

const DynamicMainBlock_bones = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1030px)');
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const MainHomeBlock = dynamic(() =>
            isMobile ? import('@/app/widgets/MainScreen/MainScreen_Mobile') : import('@/app/widgets/MainScreen/MainScreen'),
        { ssr: false }
    );
    return (
        <>
            <MainHomeBlock onScrollToSection={scrollToSection}/>
        </>
    );
};

export default DynamicMainBlock_bones;