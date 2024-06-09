import React from 'react';
import './header.css'
import Image from "next/image";

const Header_timely = () => {
    return (
        <header className="header">
            <a href="#first_page" className="logo_box_a">
                <div className="logo_box">
                    {/*<img src="/icons/Logo_white.webp" alt="alt" className="logo"/>*/}
                    <Image src={'/icons/Logo_white.webp'} alt={'Verbitsky Logo'}
                           className={`w-auto h-12 ${'logo'}`}
                           width={160} height={48}/>
                </div>
            </a>
            <div className="nav">
                <a href="#gallery" className="header_link">
                    <div className="box_header_link">
                        <div className="secret_title">ГАЛЕРЕЯ</div>
                    </div>
                </a>
                <a href="#price" className="header_link">
                    <div className="box_header_link">
                        <div className="secret_title">УСЛУГИ</div>
                    </div>
                </a>
                <a href="#about_us" className="header_link">
                    <div className="box_header_link">
                        <div className="secret_title">ОБО МНЕ</div>
                    </div>
                </a>
                <a href="#call_center" className="header_link">
                    <div className="box_header_link">
                        <div className="secret_title">КОНТАКТЫ</div>
                    </div>
                </a>
            </div>
            <div className="burger_menu">
                <input type="checkbox" id="navcheck" role="button" title="menu"/>
                <label htmlFor="navcheck" aria-hidden="true" title="menu">
            <span className="burger">
                <span className="bar">
                <span className="visuallyhidden">Menu</span>
                </span>
            </span>
                </label>
                <nav id="menu">
                    <a className="menu_links" href="#gallery">ГАЛЕРЕЯ</a>
                    <a className="menu_links" href="#price">УСЛУГИ</a>
                    <a className="menu_links" href="#about_us">ОБО МНЕ</a>
                    <a className="menu_links" href="#call_center">КОНТАКТЫ</a>
                    <br/><br/>
                    <a className="links_social" href="https://www.instagram.com/verbitskaya5272/"><i
                        className="bi bi-instagram"></i>
                        <div className="text_link_social">INSTAGRAM</div>
                    </a>
                    <a className="links_social" href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
                        className="bi bi-facebook"></i>
                        <div className="text_link_social">FACEBOOK</div>
                    </a>
                    <a className="links_social" href="https://vk.com/verbitskayairina"><i className="fab fa-vk"></i>
                        <div className="text_link_social">VK</div>
                    </a>
                    <a className="links_social" href="tel:+79500612752"><i className="bi bi-telephone-fill"></i>
                        <div className="text_link_social">+79500612752</div>
                    </a>
                    <a className="links_social" href="mailto:verbitskiyirina@gmail.com"><i
                        className="bi bi-envelope-fill"></i>
                        <div className="text_link_social">verbitskiyirina@gmail.com</div>
                    </a>
                    <br/><br/>
                    <a href="./html/developer.html" className="links_social">
                        <div className="text_link_social">РАЗРАБОТЧИК</div>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header_timely;