import React from 'react';
import {GalleryProjects, MainScreen, ModalMainScreen} from "@/app/[locale]/components/widgets";
interface PriceProductsBonesProps {
    locale: string;
}
const Page = ({locale}: PriceProductsBonesProps) => {

    return (
        <section className={'mt-12 flex flex-col gap-8'}>
            <MainScreen/>
            <ModalMainScreen/>
            {/*блок с проектами*/}
            <GalleryProjects locale={locale}/>
        </section>
    );
};

export default Page;
