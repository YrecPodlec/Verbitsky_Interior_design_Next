"use client"
import React, { useState, useEffect } from 'react';
import { Gallery, Pagination } from "@/app/[locale]/components/features";
import { Loading } from "@/app/[locale]/components/shared";
import {getServerStaticProps} from "@/app/[locale]/components/shared/hooks/fetchData/UseFetch";

export interface GalleryProjects {
    _id: string;
    title: string;
    images: string[];
    description: string;
}

const Gallery_Projects = () => {
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState<GalleryProjects[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const limit = 6;
    const lang = 'en';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getServerStaticProps(page, limit, lang);
                setProjects(data.results);
                setTotalPages(Math.ceil(data.total / limit));
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError("Ошибка загрузки данных");
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(r => r);
    }, [page]);

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <div><Loading /></div>;
    }

    return (
        <section>
            <div>
                <div className="grid grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <Gallery
                            key={project._id}
                            _id={project._id}
                            images={project.images}
                            description={project.description}
                            title={project.title}
                        />
                    ))}
                </div>
                <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </div>
        </section>
    );
};

export default Gallery_Projects;
