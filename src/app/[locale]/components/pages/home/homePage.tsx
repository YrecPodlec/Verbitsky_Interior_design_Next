import React from 'react';
import {Contacts, GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";

const HomePage = () => {

    return (
        <section className={'mt-12 flex flex-col gap-32 xxs:gap-16'}>
            <MainScreen/>
            <ModalMainScreen/>
            <GalleryProjects />
            <Contacts/>
        </section>
    );
};

export default HomePage;
