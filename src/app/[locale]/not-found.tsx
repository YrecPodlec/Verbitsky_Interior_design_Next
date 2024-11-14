import React from "react";
import {useTranslations} from "next-intl";
import {PageBtn} from "@/app/[locale]/components/shared";

export default function NotFound() {
    const t = useTranslations('Err404')
    return(
            <section className={'flex flex-col gap-8 w-full h-[80vh] items-center justify-center relative text-center'}>
                <h1 className={'responsive-80'}>{t('title')}</h1>
                <p className={'responsive-32'}>
                    Данной страницы несуществует! Возможно проблема в неправильном url адресе, проверьте ссылку или вернитесь на главную
                </p>
                <PageBtn href={'/'} text={'НА ГЛАВНУЮ'}/>
            </section>
    );
};