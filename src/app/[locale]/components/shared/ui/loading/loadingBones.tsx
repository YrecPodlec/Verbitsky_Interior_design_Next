import React from 'react';
import {useTranslations} from "next-intl";

const LoadingBones = () => {
    const tCard = useTranslations('priceCard');
    return (
        <div>
            <div className={'flex gap-4 flex-col w-full justify-center items-center py-4'}>
                <p>
                    LOADING...
                </p>
                <div>
                    <p>
                        {tCard('loading')}
                    </p>
                </div>
                <div className="relative w-16 h-16">
                    {/* Внешний круг */}
                    <div className="absolute inset-0 border-4 border-gray-300 rounded-full"/>

                    {/* Вращающийся внутренний круг */}
                    <div
                        className="absolute inset-0 border-8 border-t-8 border-transparent border-t-OrangeMain rounded-full animate-spin"/>
                </div>
            </div>
        </div>
    );
};

export default LoadingBones;