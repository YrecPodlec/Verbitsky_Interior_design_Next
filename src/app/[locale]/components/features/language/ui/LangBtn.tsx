import React from 'react';
import {Link} from "@/navigation";
import {ImageRel} from "@/app/[locale]/components/shared";

const LangBtn = ({locale, lang}:{locale: string, lang: string}) => {
    return (
        <Link href={`${locale}`} className={'transition-all'}>
            <div className={'inline-flex gap-4 items-center font-secondary responsive-32 p-4 xxs:p-2 bg-black bg-opacity-30 hover:bg-PurpleLight2 hover:bg-opacity-30'}>
                <div className={'tracking-ok'}>{lang}</div>
                <div className={'w-16 h-16 xxs:w-8 xxs:h-8'}>
                    <ImageRel ImageObject={`/flags/${locale}.ico`} text={''} alt={''}/>
                </div>
            </div>
        </Link>
    );
};

export default LangBtn;