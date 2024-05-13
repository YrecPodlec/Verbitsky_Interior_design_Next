import React from 'react';
interface Props {
    ButtonLabel: string;
}
const NavBarButtonBones:React.FC<Props> = ({ButtonLabel}) => {
    return (
        <div className={'py-2 px-4 w-fit rounded-3xl border-solid border-2 border-white ' +
            'hover:bg-orange hover:border-orange hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'}>
            <div className={'text-px16'}>
                {ButtonLabel}
            </div>
        </div>
    );
};

export default NavBarButtonBones;