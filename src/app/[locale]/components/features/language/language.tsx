import React from 'react';
import LangBtn from "@/app/[locale]/components/features/language/ui/LangBtn";
export const data = [
    {locale: 'en', lang: "English"},
    {locale: 'ru', lang: "Русский"},
]
const Language = () => {
    return (
        <nav className={'grid grid-cols-3 gap-4 xxxs:grid-cols-2'}>
            {
                data.map((item, index) => <LangBtn locale={item.locale} lang={item.lang} key={index} />)
            }
        </nav>
    );
};

export default Language;