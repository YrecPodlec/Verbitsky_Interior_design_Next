import React from 'react';
import {useTranslations} from 'next-intl';

const AdvantagesText_bones = () => {
    const t = useTranslations('Advantages(Benefits)');

    const DataTextAdvantages = [
        {
            id: 1,
            titleKey: 'TextBaseObj1.title',
            textKey: 'TextBaseObj1.text'
        },
        {
            id: 2,
            titleKey: 'TextBaseObj2.title',
            textKey: 'TextBaseObj2.text'
        },
        {
            id: 3,
            titleKey: 'TextBaseObj3.title',
            textKey: 'TextBaseObj3.text'
        }
    ];

    return (
        <div className={'w-1/2 flex flex-col gap-4'}>
            {
                DataTextAdvantages.map((item) => (
                    <div key={item.id} className={'flex flex-col gap-2'}>
                        <h1 className={'responsive-64 xxxs:responsive-24'}>
                            {t(item.titleKey)}
                        </h1>
                        <p className={'responsive-32 xxxs:responsive-16'}>
                            {t(item.textKey)}
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default AdvantagesText_bones;
