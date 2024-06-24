import React, { forwardRef, useState } from 'react';
import { GalleryBlock, PopupGallery } from "@/app/entities";
import { Error, Loading } from "@/app/shared";
import { motion } from "framer-motion";
import { GalleryBlockFeachProps } from "@/app/shared/props/GalleryDataProps";
import { Project } from "@/app/shared/props/GalleryProps";

// eslint-disable-next-line react/display-name
const GalleryBlockFeach_bones = forwardRef<HTMLDivElement, GalleryBlockFeachProps>(({ DataUrlFeatch, HookUseData }, ref) => {
    const { data, loading, error } = HookUseData(DataUrlFeatch);

    const AnimationLoading = {
        hidden: { y: 0, opacity: 1 },
        visible: (custom: number) => ({ y: -500, opacity: 0, transition: { delay: custom } })
    };

    const [selectedItem, setSelectedItem] = useState<Project | null>(null);
    const [active, setActive] = useState(false);

    const getDataProject = (data: Project) => {
        setSelectedItem(null);  // Сначала сбросим текущий проект
        setTimeout(() => setSelectedItem(data), 0);  // Установим новый проект
    };

    return (
        <motion.div initial="hidden" animate={"visible"} ref={ref} className={'h-[756px] screen_1280:h-[1142px] screen_960:h-[407px]'}>
            <PopupGallery
                ProjectSelected={selectedItem}
                active={active}
                setActive={setActive}
            />
            {loading ? (
                <motion.div variants={AnimationLoading} custom={0}>
                    <Loading />
                </motion.div>
            ) : error ? (
                <Error errorMessage456789={error} />
            ) : (
                <GalleryBlock
                    GalleryData={data}
                    getDataProject={getDataProject}
                    setActive={setActive}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </motion.div>
    );
});

export const MotionGalleryBlockFeach_bones = motion(GalleryBlockFeach_bones);
