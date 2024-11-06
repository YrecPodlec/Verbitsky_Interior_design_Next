import React from 'react';
import {GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";

interface PageComponentProps {
    locale: string;
}

const Page = ({locale}: PageComponentProps) => {

    return (
        <section className={'mt-12 flex flex-col gap-8'}>
            <MainScreen/>
            <ModalMainScreen locale={locale}/>
            {/*блок с проектами*/}
            <GalleryProjects locale={locale}/>
        </section>
    );
};

export default Page;
