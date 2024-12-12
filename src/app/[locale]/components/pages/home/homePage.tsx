import React from 'react';
import {Contacts, GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";

const HomePage = () => {

    return (
        <section className={'mt-12 flex flex-col gap-32 xxs:gap-16'}>
            <MainScreen/>
            <ModalMainScreen/>
            <div id={'gallery'}>
                <GalleryProjects />
            </div>
            <div id={'contactsMain'}>
                <Contacts/>
            </div>
        </section>
    );
};

export default HomePage;
