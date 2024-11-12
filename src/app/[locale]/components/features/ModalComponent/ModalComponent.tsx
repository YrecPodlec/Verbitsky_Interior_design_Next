"use client"
import React, {useEffect, useState} from 'react';
import {ModalBtn, ModalWindow} from "@/app/[locale]/components/shared";

interface Props {
    children: React.ReactNode;
    childrenBtn: React.ReactNode;
    hover: React.ReactNode;
}

const ModalComponentBones: React.FC<Props> = ({ children, childrenBtn, hover }) => {
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
            <ModalBtn setActive={setActive} childrenBtn={childrenBtn} hover={hover}/>
            <ModalWindow active={active} setActive={setActive}>
                {children}
            </ModalWindow>
        </>
    );
};

export default ModalComponentBones;