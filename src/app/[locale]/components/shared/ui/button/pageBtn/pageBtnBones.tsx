"use client";

import React from 'react';
import { animate } from 'framer-motion';

interface Props {
    text: string;
    href: string;
    offset?: number; // Новый параметр для отступа
}

const PageBtnBones: React.FC<Props> = ({ text, href, offset = 64 }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            const currentPosition = window.scrollY;

            animate(currentPosition, targetPosition, {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // Кастомная кривая Безье для плавности
                onUpdate: (latest) => window.scrollTo(0, latest),
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="border-2 border-GreenLight bg-PurpleLight2 bg-opacity-40 text-center responsive-24 rounded-3xl py-2 px-4 w-fit hover:px-12 xxs:py-0"
        >
            {text}
        </a>
    );
};

export default PageBtnBones;
