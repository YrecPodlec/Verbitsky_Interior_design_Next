import React from 'react';
import {GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";

const HomePage = () => {

    return (
        <section className={'mt-12 flex flex-col gap-8'}>
            <MainScreen/>
            <ModalMainScreen/>
            {/*блок с проектами*/}
            <GalleryProjects/>
        </section>
    );
};

export default HomePage;
