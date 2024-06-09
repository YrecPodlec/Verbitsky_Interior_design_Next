import React from 'react';
import { Project } from "@/app/shared/props/GalleryProps";
import {ButtonClose} from "@/app/shared";

interface PropsPopUp {
    ProjectSelected: Project | null;
    active: boolean;
    setActive: (active: boolean) => void;
}

const PopupGallery_bones: React.FC<PropsPopUp> = ({ ProjectSelected, active, setActive }) => {
    return (
        <div className={`flex items-center justify-center fixed w-full h-full top-0 left-0 bg-[#020617]/[.80] z-50`} onClick={() => setActive(false)}
        style={{pointerEvents: `${active ? 'all' : 'none'}`, opacity: `${active ? 1 : 0}`, overflowY: `${active ? 'hidden' : 'visible'}`}}>
            <div onClick={event => event.stopPropagation()}
                 className={`flex flex-col w-3/4 bg-white p-4 text-black rounded-2xl m-16 ${active ? 'scale-100' : 'scale-50'}`}>
                <div className={'inline-flex justify-end'} onClick={() => setActive(false)}>
                    <ButtonClose/>
                </div>
                {ProjectSelected ? (
                    <div className={'cursor-default'}>
                        <h1>{ProjectSelected.title}</h1>
                        <p>{ProjectSelected.description}</p>
                    </div>
                ) : (
                    <p>No Project Selected</p>
                )}
            </div>
        </div>
    );
};

export default PopupGallery_bones;
