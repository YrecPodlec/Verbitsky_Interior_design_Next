import React, {forwardRef} from 'react';
import { GalleryImage } from "@/app/shared";
import { motion } from "framer-motion";
import {GalleryBlockProps} from "@/app/shared/props/GalleryProps";
interface PropsPopUp{
    setActive: (active: boolean) => void;
}
// eslint-disable-next-line react/display-name
const GalleryBlock_bones = forwardRef<HTMLDivElement, PropsPopUp & GalleryBlockProps>(({ GalleryData, getDataProject, setActive }, ref) => {
    return (
        <div className={'flex flex-wrap gap-4 justify-between'} ref={ref}>
            {
                GalleryData?.results.map((project) => (
                    <div key={project._id} className={'relative w-[28vw] h-[370px] cursor-pointer'}>
                        <div className="relative w-full h-full">
                            <GalleryImage ImageURL={project.images[1]} ImageAlt={project.title} />
                            <div className="absolute inset-0
                            flex items-center justify-center z-20
                            bg-opacity-70 bg-black text-white text-px24
                            text-center opacity-0 hover:opacity-100" onClick={() => {
                                setActive(true);
                                getDataProject(project);
                            }}>
                                {project.title}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
});

export const MotionGalleryBlock_bones = motion(GalleryBlock_bones);
