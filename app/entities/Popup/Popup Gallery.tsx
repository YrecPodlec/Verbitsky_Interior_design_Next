import React from 'react';
import { Project } from "@/app/shared/props/GalleryProps";
import { ButtonClose } from "@/app/shared";
import Image from "next/image";

interface PropsPopUp {
    ProjectSelected: Project | null;
    active: boolean;
    setActive: (active: boolean) => void;
}

const PopupGallery_bones: React.FC<PropsPopUp> = ({ ProjectSelected, active, setActive }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[#020617]/80 z-50 transition-opacity duration-300 ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setActive(false)}
            style={{ overflowY: `${active ? 'hidden' : 'visible'}` }}
        >
            <div
                onClick={event => event.stopPropagation()}
                className={`relative w-3/4 bg-white p-4 text-black rounded-2xl m-16 transform transition-transform duration-300 
                screen_1280:w-11/12
                ${active ? 'scale-100' : 'scale-50'}`}
            >
                <div className="flex justify-end mr-4" onClick={() => setActive(false)}>
                    <ButtonClose />
                </div>
                {ProjectSelected ? (
                    <div className="cursor-default h-[90vh] overflow-auto">
                        <div className={'py-4'}>
                            <h1>{ProjectSelected.title}</h1>
                            <p>{ProjectSelected.description}</p>
                        </div>
                        <div className={'w-full columns-3 gap-x-5 box-border overflow-y-auto screen_1280:columns-2'}>
                            {ProjectSelected.images.map((image, index) => (
                                <div key={index} className={'w-full mb-2.5 break-inside-avoid'}>
                                    <Image
                                        src={image}
                                        alt={ProjectSelected.title}
                                        width={500}
                                        height={500}
                                        className={'max-w-full'}
                                        style={{ borderRadius: "15px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No Project Selected</p>
                )}
            </div>
        </div>
    );
};

export default PopupGallery_bones;
