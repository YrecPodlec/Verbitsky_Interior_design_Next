import React from 'react';
import {LanguageModal, SliderDraft} from "@/app/[locale]/components/widgets";

const Page = () => {
    return (
        <div className={'py-8'}>
            <LanguageModal/>
            <SliderDraft/>
        </div>
    );
};

export default Page;