import React from 'react';
import {useTranslations} from "next-intl";

const AddressTextBones = () => {
    const t = useTranslations('AddressText')
    return (
        <div className={'text-center border-t-4 border-white'}>
            <h1 className={'responsive-32'}>{t('Main')}</h1>
            <p className={'responsive-24'}>{t('Online')}</p>
        </div>
    );
};

export default AddressTextBones;