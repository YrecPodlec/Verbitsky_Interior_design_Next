import React from 'react';

const ChangeLang = () => {
    return (
        <div className={'flex bg-OrangePeach gap-4 p-2 rounded-main hover:px-8 responsive-16'}>
            <div className="absolute inset-0 bg-PurpleLight2 rounded-main z-[-1] animate-pulse"/>
            <span>LANGUAGE</span>
            <span>&#9660;</span>
        </div>
    );
};

export default ChangeLang;