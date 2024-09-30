import React from 'react';

interface TitleBonesProps {
    children: React.ReactNode;
}

const Title_bones: React.FC<TitleBonesProps> = ({ children }) => {
    return (
        <div className={`border-2 border-white responsive-48 xxxs:responsive-24 xxxs:gap-1 xxxs:py-1 xxxs:px-2 px-8 py-2 bg-blackOpacity inline-flex gap-4 items-center rounded-3xl [&>*]:font-secondary`}> {/* Используем Flexbox и выравниваем элементы по высоте */}
            {children}
        </div>
    );
};

export default Title_bones;
