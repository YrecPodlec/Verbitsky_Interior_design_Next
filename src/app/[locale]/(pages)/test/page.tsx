"use client"
import React, {useState} from 'react';
import {Pagination} from "@/app/[locale]/components/features";

const Page = () => {
    const [page, setPage] = useState(1);
    const totalPages = 4;
    return (
        <div>

            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
    );
};

export default Page;