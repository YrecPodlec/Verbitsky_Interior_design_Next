"use client"
import React, {useEffect, useState} from 'react';
import {ModalBtn, ModalWindow} from "@/app/[locale]/components/shared";

interface Props {
    children: React.ReactNode;
    childrenBtn: React.ReactNode;
    Title: string;
}

const ModalComponentBones: React.FC<Props> = ({ children, childrenBtn, Title }) => {
    const [active, setActive] = useState(false);
    // Блокируем/разблокируем скролл страницы
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
        } else {
            document.body.style.overflow = ''; // Включаем прокрутку страницы обратно
        }

        return () => {
            document.body.style.overflow = ''; // Обязательно восстанавливаем при размонтировании
        };
    }, [active]);
    return (
        <>
            <ModalBtn setActive={setActive} childrenBtn={childrenBtn} Title={Title}/>
            <ModalWindow active={active} setActive={setActive}>
                {children}
            </ModalWindow>
        </>
    );
};

export default ModalComponentBones;