import React, { useEffect, useState } from 'react';
import { GalleryBlockFeach, PaginationBar } from "@/app/features";
import { useData } from "@/app/shared/hooks";
import {AnimatePresence} from "framer-motion";

const GallerySection_bones = () => {
    const [NumberPage, setNumberPage] = React.useState(1);
    const [limit, setLimit] = useState(6);
    const URL_DATA = process.env.NEXT_PUBLIC_PROJECTS!;
    const { DataLength } = useData(URL_DATA);
    const sizePages = Math.ceil(DataLength / limit);

    const [URL_DATA_PAGES, setURLDataPages] = useState(`${URL_DATA}?limit=${limit}&page=${NumberPage}`);

    useEffect(() => {
        setURLDataPages(`${URL_DATA}?limit=${limit}&page=${NumberPage}`);
    }, [NumberPage, limit, URL_DATA]);
    return (
        <section className='mx-16 flex flex-col gap-4'>
            <AnimatePresence mode='wait'>
                <GalleryBlockFeach
                    DataUrlFeatch={URL_DATA_PAGES}
                    HookUseData={useData}
                    key={URL_DATA_PAGES}
                />
            </AnimatePresence>
            <PaginationBar
                DataUrlFeatch={URL_DATA}
                HookUseData={useData}
                MaxPageNumber={sizePages}
                NumberPage={NumberPage}
                setNumberPage={setNumberPage}
                LengthPages={sizePages}
            />
        </section>
    );
};

export default GallerySection_bones;