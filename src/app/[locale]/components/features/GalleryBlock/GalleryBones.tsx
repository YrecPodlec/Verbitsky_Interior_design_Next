import React from "react";
import { ModalComponent } from "@/app/[locale]/components/features";
import { HoverTextProjects, ImageRel } from "@/app/[locale]/components/shared";
import { GalleryProjects } from "@/app/[locale]/components/widgets/GalleryProjects/GalleryProjects";
import Image from "next/image";
import './style.css'
const Gallery_bones: React.FC<GalleryProjects> = ({ images, title, description }) => {
    return (
        <div>
            <ModalComponent
                childrenBtn={
                    <ImageRel ImageObject={images[0]} alt={description} text={''} />
                }
                hover={<HoverTextProjects Title={title} />}
             className={'z-40 relative cursor-pointer w-full aspect-square rounded-main overflow-hidden group mx-auto my-0 xs:h-64 xxs:h-48'}>
                <div className="masonry-grid">
                    {images.map((value, index) => (
                        <div key={index} className="row-span-2 mb-4">
                            <Image
                                src={value}
                                alt={description}
                                className="w-full h-auto object-cover rounded-main"
                                width={500}  // или любые подходящие значения
                                height={500} // начальная высота, изображение масштабируется
                                layout="responsive"
                            />
                        </div>
                    ))}
                </div>
            </ModalComponent>
        </div>
    );
};

export default Gallery_bones;
