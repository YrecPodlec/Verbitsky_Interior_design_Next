"use client"
import React, { useEffect, useState } from 'react';

interface Project {
    title: string;
    description: string;
}

interface PageProps {
    locale: string;
}

const Page: React.FC<PageProps> = ({ locale }) => {
    const [data, setData] = useState<Project[]>([])

    useEffect(() => {
        fetch(`http://localhost:4343/projects?page=${1}&limit=${6}&language=${locale}`)

            .then(res => res.json())
            .then(data => {
                setData(data.results);
                console.log(data.results);
            });
    }, [locale]);

    return (
        <div>
            <h1>Projects</h1>
            <div>
                        {data.map((project, index) => (
                            <div key={index}>
                                <h2>{project.title}</h2>
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default Page;
