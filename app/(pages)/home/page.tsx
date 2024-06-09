'use client'
import React, {useState} from 'react';
import "./css/css.css"
import "./css/first_page.css"
import "./css/burger_menu.css"
import "./css/gallery_blocks.css"
import "./css/popup.css"
import "./css/popup_gallery.css"
import "./css/price.css"
import "./css/about_us.css"
import "./css/contact.css"
import "./css/footer.css"
import "./css/language.css"
import "./fonts/fonts.css"
import Image from "next/image";
import {GallerySection} from "@/app/widgets";
const HomePage = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <div className="first_page" id="first_page">
                <div className="left_slidebar">
                    <div className="left_slidebar_box">
                        <div className="slidebar_icon">
                            <a href="https://www.instagram.com/verbitskaya5272/"><i className="bi bi-instagram"></i></a>
                        </div>
                        <div className="slidebar_icon">
                            <a href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
                                className="bi bi-facebook"></i></a>
                        </div>
                        <div className="slidebar_icon">
                            <a href="https://vk.com/verbitskayairina"><i className="fab fa-vk"></i></a>
                        </div>
                        {/*// <!--                <div class="slidebar_icon">-->*/}
                        {/*// <!--                    <a href="https://www.behance.net/Verbitskaya_irina"><i class="bi bi-behance"></i></a>-->*/}
                        {/*// <!--                </div>-->*/}
                        <div className="slidebar_icon">
                            <i className="bi bi-telephone"></i>
                            <p className="phone_call"><a href="tel:+79500612752">+79500612752</a></p>
                        </div>
                        <div className="slidebar_icon">
                            <i className="bi bi-envelope"></i>
                            <p className="mail_call"><a
                                href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <header className="header">
                    <a href="#first_page" className="logo_box_a">
                        <div className="logo_box">
                            <Image src={'/icons/Logo_white.webp'} alt={'logo verbitsky Interior Design'} className="logo" width={130} height={1}/>
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
                            <a className="links_social" href="https://vk.com/verbitskayairina"><i
                                className="fab fa-vk"></i>
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
                <div className="body_first_page">
                    <div className="logo_title_box">
                        <Image src={'/icons/Logo_white.webp'} alt={'logo verbitsky Interior Design'} className="logo_title" width={200} height={1}/>
                    </div>
                    <h2 className="title_first_page">VERBITSKY</h2>
                    <h5 className="title_information">Дизайн который лечит <br/>
                        Салютогенный дизайн, VASTU дизайн интерьера</h5>
                    <p>
                    </p><br/><br/>
                    <div className="text_contact_me">
                        <h3><a href="mailto:verbitsky.vastu@gmail.com">Свяжитесь со мной</a></h3>
                        <p>
                            <a href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com</a>
                        </p>
                        <p>
                            <a href="tel:+79771315563">+79771315563</a>
                        </p>
                    </div>
                </div>
            </div>
            {/*// <!--    GALLERY-->*/}
            <div className="second_page" id="gallery">
                <div className="title_gallery_block">
                    <h2 className="title_gallery">ГАЛЕРЕЯ</h2>
                    <h5 className="gallery_information">
                        Для вас я собрала
                        галерею моих лучших проектов,
                        с которым вы можете ознакомиться
                    </h5>
                </div>
            </div>
            <GallerySection />
            {/*// <!--    PRICE -->*/}
            <div className="prices" id="price">
            <div className="price_text_title price_box">
                    <h1 className="price_title">УСЛУГИ</h1>
                    <div className="text_infa_price">
                        <div className="price_first">
                            <p>1. Дизайн-проект</p>
                            <p>
                                Дизайн-проект выполняется в несколько этапов:
                            </p>
                            <ul>
                                <li>Подписание договора, замеры</li>
                                <li>Концептуальный коллаж в проекции</li>
                                <li>Визуализация</li>
                                <li>Рабочая документация</li>
                                <li>Комплектация (дополнительная услуга)</li>
                                <li>Сопровождение (дополнительная услуга)</li>
                                <li>Авторский надзор (дополнительная услуга)</li>
                            </ul>
                            <p>2. Анализ помещения VASTU и консультация специалиста VASTU</p>
                            <p>3. Консультации по дизайну интерьера</p>
                            <p>4. Планировочное решение</p>
                        </div>
                    </div>
                </div>
                <div className="price_photo price_box">
                    <div className="box_photo_price"></div>
                </div>
            </div>
            {/*// <!--ABOUT ME-->*/}
            <div className="about_us" id="about_us">
                <div className="text_about_us">
                    <div className="container_text_about_us">
                        <h2 className="title_about_us">ОБО МНЕ</h2>
                        <ul className="list_about_me">
                            <li>Практикующий дизайнер с 2010 года</li>
                            <li>У меня степень магистра архитектуры</li>
                            <li>Большой опыт удаленной работы. Работаю в разных уголках Мира</li>
                            <li>Специалист по коррекции жилплощади и офисов по науке VASTU</li>
                            <li>Разрабатываю дизайн мебели</li>
                        </ul>
                        <p className="text_about_me">
                            Я помогаю людям и семьям найти свое
                            семейное и личное счастье в интерьерах
                            построенных по основным принципам гармонии
                            с природой. Основная направленность таких проектов
                            заключается в улучшении физического и духовного
                            здоровья человека, хозяина дома
                            и членов его семьи
                        </p>
                        <div className="container_text_img_about_us img_about_us_1"></div>
                        <br/>
                        <p className="text_about_me">
                            Таким образом, создание домов и офисов, по
                            специально разработанному мной проекту, поможет
                            укрепить здоровье, приобрести счастье,
                            создать гармонию и процветание
                            семьям и бизнесу<br/>

                        </p>
                        <div className="container_text_img_about_us img_about_us_2"></div>
                        <br/>
                        <p className="text_about_me">
                            Все усилия в работе я направляю на создание «живого дома», в котором
                            все физические и духовные процессы
                            работают оптимально и выровнены
                            с внутренним миром человека<br/>
                            Более 242 моих проектов помогли людям
                            создать более точный вариант гармоничного
                            помещения для достижения состояния
                            целостности и совершенства <br/>
                            Я гарантирую вам высокое качество работы, а также
                            уникальный и неповторимый дизайн-проект, в соответствии
                            точно с вашими пожеланиями и предпочтениями
                        </p>
                        <div className="container_text_img_about_us img_about_us_3"></div>
                    </div>
                    <div className="contact" id="call_center">
                        <div className="container_text_contacts">
                            <div className="text_container_box_contacts">
                                <h2 className="title_contacts">CONTACTS</h2>
                                {/*// <!--                        <div class="behance_block_contacts item_contacts">-->*/}
                                {/*// <!--                            <p>PORTFOLIO ON BEHANCE:</p>-->*/}
                                {/*// <!--                            <a href="https://www.behance.net/Verbitskaya_irina">https://www.behance.net/Verbitskaya_irina</a>-->*/}
                                {/*// <!--                        </div>-->*/}
                                <div className="social_media_title_contacts item_contacts">СОЦИАЛЬНЫЕ СЕТИ:</div>
                                <div className="social_media_contacts item_contacts">
                                    <div className="box_container_social_m_contacts">
                                        <div className="logo_social_contacts">
                                            <a href="https://www.instagram.com/verbitskaya5272/"><i
                                                className="bi bi-instagram"></i></a>
                                        </div>
                                        <div className="title_social_contacts">INSTAGRAM</div>
                                    </div>
                                    <div className="box_container_social_m_contacts">
                                        <div className="logo_social_contacts">
                                            <a href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
                                                className="bi bi-facebook"></i></a>
                                        </div>
                                        <div className="title_social_contacts">FACEBOOK</div>
                                    </div>
                                    <div className="box_container_social_m_contacts">
                                        <div className="logo_social_contacts">
                                            <a href="https://vk.com/verbitskayairina"><span
                                                className="vk_img_contacts"></span></a>
                                        </div>
                                        <div className="title_social_contacts">VK</div>
                                    </div>
                                    {/*// <!--                            <div class="box_container_social_m_contacts">-->*/}
                                    {/*// <!--                                <div class="logo_social_contacts">-->*/}
                                    {/*// <!--                                    <a href="https://www.behance.net/Verbitskaya_irina"><i class="bi bi-behance"></i></a>-->*/}
                                    {/*// <!--                                </div>-->*/}
                                    {/*// <!--                                <div class="title_social_contacts">BEHANCE</div>-->*/}
                                    {/*// <!--                            </div>-->*/}
                                </div>
                                <div className="container_phone_contacts item_contacts">
                                    <div className="item_phone_contact">
                                        <i className="bi bi-telephone-fill"></i><a
                                        href="tel:+79500612752">+79500612752</a>
                                    </div>
                                    <div className="item_phone_contact">
                                        <i className="bi bi-envelope-fill"></i><a
                                        href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo_about_us">
                    <div className="img_diz_about_us">
                        <div className="img_diz_photo_about_us"></div>
                        <div className="text_photo_about_us">
                            <p>ВЕРБИЦКАЯ ИРИНА</p>
                        </div>
                        <div className="text_photo_prof_about_us">
                            <p>ГЛАВНЫЙ ДИЗАЙНЕР</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container_logo_footer">
                    <img src="./images/logo_header.png" alt="alt"/>
                </div>
                <div className="text_footer">
                    <p>
                        VASTU дизайн интерьера
                    </p>
                </div>
                <a href="./html/developer.html" className="links_social">
                    <div className="text_link_social">РАЗРАБОТЧИК</div>
                </a>
                <div className="licens_container">
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" className="licens_footer">
                        <img alt="Лицензия Creative Commons" style={{borderWidth: 0}}
                             src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a>
                    <br/>This work is available on
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons
                        Attribution-NonCommercial-NoDerivatives 4.0 Worldwide License</a>
                </div>
            </footer>
        </>
    );
};

export default HomePage;