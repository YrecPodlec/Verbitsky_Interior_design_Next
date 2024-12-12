"use client";
import React from "react";
import { animate } from "framer-motion";

interface Props {
    text: string;
    href: string;
    offset?: number;
}

const ModalHref: React.FC<Props> = ({ text, href, offset = 64 }) => {
    const handleAction = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const targetElement = document.querySelector(href);
        const container = e.currentTarget.closest(".modal-container");

        if (targetElement && container) {
            const containerRect = container.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();

            const scrollTop = container.scrollTop;
            const targetPosition = targetRect.top - containerRect.top + scrollTop - offset;

            animate(scrollTop, targetPosition, {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                onUpdate: (latest) => {
                    container.scrollTo({ top: latest });
                },
            });
        }
    };

    return (
        <a
            href={href}
            onClick={handleAction}
            className="border-2 border-GreenLight bg-PurpleLight2 bg-opacity-40 text-center responsive-24 rounded-3xl py-2 px-4 w-fit hover:px-12 xxs:py-0"
        >
            {text}
        </a>
    );
};

export default ModalHref;
