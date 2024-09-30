"use client"
import React from 'react';
import {Advantages, Benefit, Prices, Products} from "@/app/widgets";
import {scrollToSection} from "@/app/shared/hooks/scrollSection";
import {DynamicMainBlock} from "@/app/features";

const Page = () => {
    return (
        <>
            <DynamicMainBlock/>
            <Advantages />
            <Benefit/>
            <Prices  onScrollToSection={scrollToSection}/>
            <Products />
        </>
    );
};

export default Page;
