import React from 'react';

interface TitleBonesProps {
    Title: string;
}

const Title_bones: React.FC<TitleBonesProps> = ({ Title }) => {
    return (
        <h1
            className={`border-white border-b-4 bg-gradient-Title responsive-48 px-6 py-1 rounded-main font-secondary`}>
            {Title}
        </h1>
    );
};

export default Title_bones;
