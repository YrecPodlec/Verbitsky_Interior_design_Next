"use client"
import React from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>X</button>
            <section className={`fixed bg-black bg-opacity-70 w-screen h-screen left-0 top-0 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`} onClick={() => { setIsOpen(false) }}>
                <div onClick={e => e.stopPropagation()} className={'w-3/4 bg-greenMainDark h-screen'}>
фывфывфыв
                </div>
            </section>
        </div>
    );
};

export default Menu;