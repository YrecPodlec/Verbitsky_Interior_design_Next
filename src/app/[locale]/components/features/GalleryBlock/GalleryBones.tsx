import React from "react";
import {ModalComponent} from "@/app/[locale]/components/features";
import {ImageRel} from "@/app/[locale]/components/shared";
import {GalleryProjects} from "@/app/[locale]/components/widgets/GalleryProjects/GalleryProjects";
const Gallery_bones:React.FC<GalleryProjects> = ({images, title, description}) => {

    return (
        <div>
            <ModalComponent childrenBtn={
                <ImageRel ImageObject={images[0]} alt={description} text={''}/>
            } Title={title}>
                <div className={'grid grid-cols-4 gap-8'}>
                    {
                        images.map((value, index) =>
                            <div key={index} className={'aspect-square'}>
                                <ImageRel ImageObject={value} text={''} alt={''}/>
                            </div>
                        )
                    }
                </div>
            </ModalComponent>
        </div>
    );
};

export default Gallery_bones;