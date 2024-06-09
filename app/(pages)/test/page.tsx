"use client"
import React from 'react';
import {GallerySection} from "@/app/widgets";
import {GalleryPageNumber, GalleryPagination} from "@/app/shared";
import {PaginationBar} from "@/app/features";

const Test: React.FC = () => {
    return (
        <main>
            <p>TEST</p>
            <div>
                <GallerySection />
            </div>
            <div>
                <GalleryPagination rotated={false}/>
                <GalleryPageNumber PageNumber={2}  SelectedPage={true}/>
            </div>
            <div>
                <GalleryPageNumber PageNumber={2} SelectedPage={true} />
            </div>
        </main>
    );
};

export default Test;
