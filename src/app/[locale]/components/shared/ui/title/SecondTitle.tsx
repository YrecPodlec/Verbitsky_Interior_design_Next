import React from 'react';
interface TitleBonesProps {
    Title: string;
}
const SecondTitleBones:React.FC<TitleBonesProps> = ({Title}) => {
    return (
        <h2 className={`border-white border-2 bg-greenMainDark responsive-32 px-6 py-1 rounded-main font-secondary`}>
            {Title}
        </h2>
    );
};

export default SecondTitleBones;