import React from 'react';
import {Language, ModalComponent} from "@/app/[locale]/components/features";
import ChangeLang from "@/app/[locale]/components/widgets/language/ui/ChangeLang";
import {useTranslations} from "next-intl";

const LanguageModal = () => {
    const t = useTranslations('lang')
    return (
        <div className={'fixed right-16 xs:right-4 top-16 z-50 justify-center'}>
            <ModalComponent childrenBtn={<ChangeLang/>} hover={''} className={''}>
                <div className={'text-center grid gap-4 px-8'}>
                    <h1 className={'responsive-64 font-secondary'}>{t('change')}</h1>
                    <Language />
                </div>
            </ModalComponent>
        </div>
    );
};

export default LanguageModal;