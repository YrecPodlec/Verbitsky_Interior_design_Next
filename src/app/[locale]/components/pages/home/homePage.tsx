import React from 'react';
import {GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";

const HomePage = () => {

    return (
        <section className={'mt-12 flex flex-col gap-32'}>
            <MainScreen/>
            <ModalMainScreen/>
            <GalleryProjects />
        </section>
    );
};

export default HomePage;
