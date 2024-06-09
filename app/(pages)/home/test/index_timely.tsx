// import React from 'react';
//
//
// // <link rel="stylesheet" href="./css/css.css"/>
// // <link rel="stylesheet" href="./fonts/fonts.css"/>
// // <link rel="stylesheet" href="./css/first_page.css"/>
// // <link rel="stylesheet" href="./css/burger_menu.css"/>
// // <link rel="stylesheet" href="./css/gallery_blocks.css"/>
// // <link rel="stylesheet" href="./css/popup.css"/>
// // <link rel="stylesheet" href="./css/popup_gallery.css"/>
// // <link rel="stylesheet" href="./css/price.css"/>
// // <link rel="stylesheet" href="./css/about_us.css"/>
// // <link rel="stylesheet" href="./css/contact.css"/>
// // <link rel="stylesheet" href="./css/footer.css"/>
// // <link rel="stylesheet" href="./css/language.css"/>
//
// const IndexTimely = () => {
//     return (
//         <div>
//             <div className="first_page" id="first_page">
//                 <div className="left_slidebar">
//                     <div className="left_slidebar_box">
//                         <div className="slidebar_icon">
//                             <a href="https://www.instagram.com/verbitskaya5272/"><i className="bi bi-instagram"></i></a>
//                         </div>
//                         <div className="slidebar_icon">
//                             <a href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
//                                 className="bi bi-facebook"></i></a>
//                         </div>
//                         <div className="slidebar_icon">
//                             <a href="https://vk.com/verbitskayairina"><i className="fab fa-vk"></i></a>
//                         </div>
//                         {/*// <!--                <div class="slidebar_icon">-->*/}
//                         {/*// <!--                    <a href="https://www.behance.net/Verbitskaya_irina"><i class="bi bi-behance"></i></a>-->*/}
//                         {/*// <!--                </div>-->*/}
//                         <div className="slidebar_icon">
//                             <i className="bi bi-telephone"></i>
//                             <p className="phone_call"><a href="tel:+79500612752">+79500612752</a></p>
//                         </div>
//                         <div className="slidebar_icon">
//                             <i className="bi bi-envelope"></i>
//                             <p className="mail_call"><a
//                                 href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com</a></p>
//                         </div>
//                     </div>
//                 </div>
//                 <header className="header">
//                     <a href="#first_page" className="logo_box_a">
//                         <div className="logo_box">
//                             <img src="./images/logo_header.png" alt="alt" className="logo">
//                         </div>
//                     </a>
//                     <div className="nav">
//                         <a href="#gallery" className="header_link">
//                             <div className="box_header_link">
//                                 <div className="secret_title">ГАЛЕРЕЯ</div>
//                             </div>
//                         </a>
//                         <a href="#price" className="header_link">
//                             <div className="box_header_link">
//                                 <div className="secret_title">УСЛУГИ</div>
//                             </div>
//                         </a>
//                         <a href="#about_us" className="header_link">
//                             <div className="box_header_link">
//                                 <div className="secret_title">ОБО МНЕ</div>
//                             </div>
//                         </a>
//                         <a href="#call_center" className="header_link">
//                             <div className="box_header_link">
//                                 <div className="secret_title">КОНТАКТЫ</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div className="burger_menu">
//                         <input type="checkbox" id="navcheck" role="button" title="menu">
//                             <label for="navcheck" aria-hidden="true" title="menu">
//                                 <span className="burger">
//                                     <span className="bar">
//                                     <span className="visuallyhidden">Menu</span>
//                                     </span>
//                                 </span>
//                             </label>
//                             <nav id="menu">
//                                 <a className="menu_links" href="#gallery">ГАЛЕРЕЯ</a>
//                                 <a className="menu_links" href="#price">УСЛУГИ</a>
//                                 <a className="menu_links" href="#about_us">ОБО МНЕ</a>
//                                 <a className="menu_links" href="#call_center">КОНТАКТЫ</a>
//                                 <br><br>
//                                     <a className="links_social" href="https://www.instagram.com/verbitskaya5272/"><i
//                                         className="bi bi-instagram"></i>
//                                         <div className="text_link_social">INSTAGRAM</div>
//                                     </a>
//                                     <a className="links_social" href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
//                                         className="bi bi-facebook"></i>
//                                         <div className="text_link_social">FACEBOOK</div>
//                                     </a>
//                                     <a className="links_social" href="https://vk.com/verbitskayairina"><i
//                                         className="fab fa-vk"></i>
//                                         <div className="text_link_social">VK</div>
//                                     </a>
//                                     <a className="links_social" href="tel:+79500612752"><i className="bi bi-telephone-fill"></i>
//                                         <div className="text_link_social">+79500612752</div>
//                                     </a>
//                                     <a className="links_social" href="mailto:verbitskiyirina@gmail.com"><i
//                                         className="bi bi-envelope-fill"></i>
//                                         <div className="text_link_social">verbitskiyirina@gmail.com</div>
//                                     </a>
//                                     <br><br>
//                                         <a href="./html/developer.html" className="links_social">
//                                             <div className="text_link_social">РАЗРАБОТЧИК</div>
//                                         </a>
//                             </nav>
//                     </div>
//                 </header>
//                 <div className="body_first_page">
//                     <div className="logo_title_box">
//                         <img src="./images/Logo.png" alt="alt" className="logo_title">
//                     </div>
//                     <h2 className="title_first_page">VERBITSKY</h2>
//                     <h5 className="title_information">Дизайн который лечит <br>
//                         Салютогенный дизайн, VASTU дизайн интерьера</h5>
//                     <p>
//                     </p><br><br>
//                     <div className="text_contact_me">
//                         <h3><a href="mailto:verbitsky.vastu@gmail.com">Свяжитесь со мной</a></h3>
//                         <p>
//                             <a href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com</a>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <!--    GALLERY-->
//             <div className="second_page" id="gallery">
//                 <input type="radio" name="b" id="b1" checked>
//                     <input type="radio" name="b" id="b2">
//                         <input type="radio" name="b" id="b3">
//                             <input type="radio" name="b" id="b4">
//                                 <input type="radio" name="b" id="b5">
//                                     <div className="title_gallery_block">
//                                         <h2 className="title_gallery">ГАЛЕРЕЯ</h2>
//                                         <h5 className="gallery_information">
//                                             Для вас я собрала
//                                             галерею моих лучших проектов,
//                                             с которым вы можете ознакомиться
//                                         </h5>
//                                     </div>
//                                     <div className="gallery_blocks_images">
//                                         <!-- <img src="./images/background_logo.png" alt="alt" class="back_img"> -->
//                                         <div className="gallery_block_slider_1 block_gallery_container">
//                                             <div className="block_left_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img1 img_block_gallery">
//                                                     <a href="#popup_1" id="popup_1_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ВИЛЛА В МАЙАМИ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img2 img_block_gallery">
//                                                     <a href="#popup_2" id="popup_2_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ДОМ В<br>ЛОС-АНДЖЕЛЕСЕ</span></a>
//                                                 </div>
//                                             </div>
//                                             <div className="block_right_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img3 img_block_gallery">
//                                                     <a href="#popup_3" id="popup_3_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ОФИС В МАЙАМИ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img4 img_block_gallery">
//                                                     <a href="#popup_4" id="popup_4_open"
//                                                        className="secret_block_gallery"><span className="text_hover">БАНЯ В ГОРОДЕ<br>"ЧЕРМГОВО"</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="gallery_block_slider_2 block_gallery_container">
//                                             <div className="block_left_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img5 img_block_gallery">
//                                                     <a href="#popup_5" id="popup_5_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ДЕТСКАЯ КОМНАТА<br>С ВАННОЙ<br><br>ВИЛЛА В МАЙАМИ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img6 img_block_gallery">
//                                                     <a href="#popup_6" id="popup_6_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ВАННЫЕ КОМНАТЫ В СЕМЕЙНОМ ДОМЕ<br><br>ВИЛЛА В МАЙАМИ</span></a>
//                                                 </div>
//                                             </div>
//                                             <div className="block_right_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img7 img_block_gallery">
//                                                     <a href="#popup_7" id="popup_7_open"
//                                                        className="secret_block_gallery"><span className="text_hover">КАБИНЕТ и СПАЛЬНЯ<br><br>ВИЛЛА В МАЙАМИ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img8 img_block_gallery">
//                                                     <a href="#popup_8" id="popup_8_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ЖИЛОЙ КОМПЛЕКС<br>"WINTER-SUMMER"</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="gallery_block_slider_3 block_gallery_container">
//                                             <div className="block_left_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img9 img_block_gallery">
//                                                     <a href="#popup_9" id="popup_9_open"
//                                                        className="secret_block_gallery"><span className="text_hover">ЖИЛОЙ КОМПЛЕКС<br>В МОСКВЕ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img10 img_block_gallery">
//                                                     <a href="#popup_10" id="popup_10_open" className="secret_block_gallery"><span
//                                                         className="text_hover">КВАРТИРА В МОСКВЕ</span></a>
//                                                 </div>
//                                             </div>
//                                             <div className="block_right_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img11 img_block_gallery">
//                                                     <a href="#popup_11" id="popup_11_open" className="secret_block_gallery"><span
//                                                         className="text_hover">ЖИЛОЙ КОМПЛЕКС<br>"RIVER PARK"</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img12 img_block_gallery">
//                                                     <a href="#popup_12" id="popup_12_open" className="secret_block_gallery"><span
//                                                         className="text_hover">МАЛЕНЬКАЯ СЕМЕЙНАЯ КВАРТИРА</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="gallery_block_slider_4 block_gallery_container">
//                                             <div className="block_left_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img13 img_block_gallery">
//                                                     <a href="#popup_13" id="popup_13_open" className="secret_block_gallery"><span
//                                                         className="text_hover">ДОМ ДЛЯ ПОЖИЛОЙ ПАРЫ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img14 img_block_gallery">
//                                                     <a href="#popup_14" id="popup_14_open" className="secret_block_gallery"><span
//                                                         className="text_hover">УЮТНАЯ КВАРТИРА В ЦЕНТРЕ</span></a>
//                                                 </div>
//                                             </div>
//                                             <div className="block_right_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img15 img_block_gallery">
//                                                     <a href="#popup_15" id="popup_15_open" className="secret_block_gallery"><span
//                                                         className="text_hover">НЕБОЛЬШОЙ ЗАГОРОДНЫЙ ДОМ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img16 img_block_gallery">
//                                                     <a href="#popup_16" id="popup_16_open" className="secret_block_gallery"><span
//                                                         className="text_hover">КВАРТИРА НА УЛИЦЕ МАГЕЛЛАНА</span></a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="gallery_block_slider_5 block_gallery_container">
//                                             <div className="block_left_gallery block_side_img_gallery">
//                                                 <div className="gallery_block_img17 img_block_gallery">
//                                                     <a href="#popup_17" id="popup_17_open" className="secret_block_gallery"><span
//                                                         className="text_hover">УЮТНАЯ КВАРТИРА ДЛЯ НЕБОЛЬШОЙ СЕМЬИ</span></a>
//                                                 </div>
//                                                 <div className="gallery_block_img18 img_block_gallery">
//                                                     <a href="#popup_18" id="popup_18_open" className="secret_block_gallery"><span
//                                                         className="text_hover">ПРОВИНЦИЯ "CATS"</span></a>
//                                                 </div>
//                                             </div>
//                                             <div className="block_right_gallery block_side_img_gallery">
//                                                 <!--                    <div class="gallery_block_img19 img_block_gallery"></div>-->
//                                                 <!--                    <div class="gallery_block_img20 img_block_gallery"></div>-->
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="buttons">
//                                         <label for="b1" className="butt label_1"><span
//                                             className="button_number number_1">1</span></label>
//                                         <label for="b2" className="butt label_2"><span
//                                             className="button_number number_2">2</span></label>
//                                         <label for="b3" className="butt label_3"><span
//                                             className="button_number number_3">3</span></label>
//                                         <label for="b4" className="butt label_4"><span
//                                             className="button_number number_4">4</span></label>
//                                         <label for="b5" className="butt label_4"><span
//                                             className="button_number number_5">5</span></label>
//                                     </div>
//                                     <!--        POPUPS-->
//                                     <div className="popup_1" id="popup_1">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">MIAMI</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/miami/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/miami/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/miami/4.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_1_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_2" id="popup_2">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">LOS-ANGELES</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/2_los-angeles/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/2_los-angeles/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/2_los-angeles/3.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_2_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_3">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ОФИС В МАЙАМИ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/3_office_miami/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/3_office_miami/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/3_office_miami/1.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_3_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_4">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">BATH IN THE CITY "CHEREMHOVO"</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/4_banya/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/4_banya/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/4_banya/3.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_4_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_5">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ДЕТСКАЯ КОМНАТА С ВАННОЙ (ВИЛЛА В МАЙАМИ)</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/5_kidsroom/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/5_kidsroom/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/5_kidsroom/10.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_5_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_6">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ВАННЫЕ КОМНАТЫ В СЕМЕЙНОМ ДОМЕ (ВИЛЛА В
//                                                             МАЙАМИ)</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/6_miami_bath/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/6_miami_bath/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/6_miami_bath/10.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_6_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_7">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">КАБИНЕТ и СПАЛЬНЯ ВИЛЛА В МАЙАМИ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/7_miami_study/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/7_miami_study/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/7_miami_study/6.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_7_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_8">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ЖИЛОЙ КОМПЛЕКС "WINTER-SUMMER"</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/8_winter_summer/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/8_winter_summer/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/8_winter_summer/7.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_8_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_9">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ЖИЛОЙ КОМПЛЕКС В МОСКВЕ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/9_resident_moscow/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/9_resident_moscow/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/9_resident_moscow/8.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_9_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_10">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">КВАРТИРА В МОСКВЕ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/10_res_moscow/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/10_res_moscow/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/10_res_moscow/10.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_10_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_11">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ЖИЛОЙ КОМПЛЕКС "RIVER PARK"</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/11_luxury/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/11_luxury/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/11_luxury/10.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_11_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_12">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">МАЛЕНЬКАЯ СЕМЕЙНАЯ КВАРТИРА</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/12_small_house/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/12_small_house/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/12_small_house/10.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_12_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_13">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ДОМ ДЛЯ ПОЖИЛОЙ ПАРЫ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/13_old_cuple/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/13_old_cuple/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/13_old_cuple/2.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_13_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_14">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">УЮТНАЯ КВАРТИРА В ЦЕНТРЕ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/14_downtown_house/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/7.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/6.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/10.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/8.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/9.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/14_downtown_house/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/14_downtown_house/2.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_14_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_15">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">НЕБОЛЬШОЙ ЗАГОРОДНЫЙ ДОМ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/15_country_house/1.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/15_country_house/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/15_country_house/2.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/15_country_house/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/15_country_house/3.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/15_country_house/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/15_country_house/4.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/15_country_house/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/15_country_house/5.jpg"
//                                                                className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/15_country_house/5.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_15_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_16">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">КВАРТИРА НА УЛИЦЕ МАГЕЛЛАНА</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/16_magelan/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/16_magelan/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/16_magelan/5.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_16_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_17">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">УЮТНАЯ КВАРТИРА ДЛЯ НЕБОЛЬШОЙ СЕМЬИ</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/17_flat/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/4.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/10.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/10.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/17_flat/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/17_flat/1.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_17_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="popup_3" id="popup_18">
//                                         <div className="popup_1_container">
//                                             <div className="popup_1_body">
//                                                 <div className="gallery_popup_1">
//                                                     <section className="gallery">
//                                                         <h2 className="title">ПРОВИНЦИЯ "CATS"</h2>
//                                                         <div className="gallery-list">
//                                                             <a href="./gallery/18_cats/5.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/5.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/6.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/6.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/7.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/7.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/8.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/8.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/9.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/9.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/3.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/3.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/1.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/1.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/2.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/2.jpg" alt="alt">
//                                                             </a>
//                                                             <a href="./gallery/18_cats/4.jpg" className="gallery-item">
//                                                                 <div className="gallery-item-hover">СМОТРЕТЬ</div>
//                                                                 <img src="./gallery/18_cats/4.jpg" alt="alt">
//                                                             </a>
//                                                         </div>
//                                                     </section>
//                                                     <script src="https://code.jquery.com/jquery-3.5.1.js"
//                                                             integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
//                                                             crossorigin="anonymous"></script>
//                                                     <script
//                                                         src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>
//                                                     <script>
//                                                         $(".gallery-list").magnificPopup({
//                                                         delegate: "a",
//                                                         type: "image",
//                                                         gallery: {
//                                                         enabled: true
//                                                     }
//                                                     });
//                                                     </script>
//                                                 </div>
//                                                 <div className="popup_1_close" id="popup_18_close">ЗАКРЫТЬ</div>
//                                             </div>
//                                         </div>
//                                     </div>
//             </div>
//             <!--    PRICE -->
//             <div className="prices" id="price">
//                 <div className="price_text_title price_box">
//                     <h1 className="price_title">УСЛУГИ</h1>
//                     <div className="text_infa_price">
//                         <div className="price_first">
//                             <p>1. Дизайн-проект</p>
//                             <p>
//                                 Дизайн-проект выполняется в несколько этапов:
//                             </p>
//                             <ul>
//                                 <li>Подписание договора, замеры</li>
//                                 <li>Концептуальный коллаж в проекции</li>
//                                 <li>Визуализация</li>
//                                 <li>Рабочая документация</li>
//                                 <li>Комплектация (дополнительная услуга)</li>
//                                 <li>Сопровождение (дополнительная услуга)</li>
//                                 <li>Авторский надзор (дополнительная услуга)</li>
//                             </ul>
//                             <p>2. Анализ помещения VASTU и консультация специалиста VASTU</p>
//                             <p>3. Консультации по дизайну интерьера</p>
//                             <p>4. Планировочное решение</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="price_photo price_box">
//                     <div className="box_photo_price"></div>
//                 </div>
//             </div>
//             <!--ABOUT ME-->
//             <div className="about_us" id="about_us">
//                 <div className="text_about_us">
//                     <div className="container_text_about_us">
//                         <h2 className="title_about_us">ОБО МНЕ</h2>
//                         <ul className="list_about_me">
//                             <li>Практикующий дизайнер с 2010 года</li>
//                             <li>У меня степень магистра архитектуры</li>
//                             <li>Большой опыт удаленной работы. Работаю в разных уголках Мира</li>
//                             <li>Специалист по коррекции жилплощади и офисов по науке VASTU</li>
//                             <li>Разрабатываю дизайн мебели</li>
//                         </ul>
//                         <p className="text_about_me">
//                             Я помогаю людям и семьям найти свое
//                             семейное и личное счастье в интерьерах
//                             построенных по основным принципам гармонии
//                             с природой. Основная направленность таких проектов
//                             заключается в улучшении физического и духовного
//                             здоровья человека, хозяина дома
//                             и членов его семьи
//                         </p>
//                         <div className="container_text_img_about_us img_about_us_1"></div>
//                         <br/>
//                         <p className="text_about_me">
//                             Таким образом, создание домов и офисов, по
//                             специально разработанному мной проекту, поможет
//                             укрепить здоровье, приобрести счастье,
//                             создать гармонию и процветание
//                             семьям и бизнесу<br/>
//
//                         </p>
//                         <div className="container_text_img_about_us img_about_us_2"></div>
//                         <br/>
//                         <p className="text_about_me">
//                             Все усилия в работе я направляю на создание «живого дома», в котором
//                             все физические и духовные процессы
//                             работают оптимально и выровнены
//                             с внутренним миром человека<br/>
//                             Более 242 моих проектов помогли людям
//                             создать более точный вариант гармоничного
//                             помещения для достижения состояния
//                             целостности и совершенства <br/>
//                             Я гарантирую вам высокое качество работы, а также
//                             уникальный и неповторимый дизайн-проект, в соответствии
//                             точно с вашими пожеланиями и предпочтениями
//                         </p>
//                         <div className="container_text_img_about_us img_about_us_3"></div>
//                     </div>
//                     <div className="contact" id="call_center">
//                         <div className="container_text_contacts">
//                             <div className="text_container_box_contacts">
//                                 <h2 className="title_contacts">CONTACTS</h2>
//                                 <!--                        <div class="behance_block_contacts item_contacts">-->
//                                 <!--                            <p>PORTFOLIO ON BEHANCE:</p>-->
//                                 <!--                            <a href="https://www.behance.net/Verbitskaya_irina">https://www.behance.net/Verbitskaya_irina</a>-->
//                                 <!--                        </div>-->
//                                 <div className="social_media_title_contacts item_contacts">СОЦИАЛЬНЫЕ СЕТИ:</div>
//                                 <div className="social_media_contacts item_contacts">
//                                     <div className="box_container_social_m_contacts">
//                                         <div className="logo_social_contacts">
//                                             <a href="https://www.instagram.com/verbitskaya5272/"><i
//                                                 className="bi bi-instagram"></i></a>
//                                         </div>
//                                         <div className="title_social_contacts">INSTAGRAM</div>
//                                     </div>
//                                     <div className="box_container_social_m_contacts">
//                                         <div className="logo_social_contacts">
//                                             <a href="https://www.facebook.com/IrinaVerbitskaiaDesigner"><i
//                                                 className="bi bi-facebook"></i></a>
//                                         </div>
//                                         <div className="title_social_contacts">FACEBOOK</div>
//                                     </div>
//                                     <div className="box_container_social_m_contacts">
//                                         <div className="logo_social_contacts">
//                                             <a href="https://vk.com/verbitskayairina"><span
//                                                 className="vk_img_contacts"></span></a>
//                                         </div>
//                                         <div className="title_social_contacts">VK</div>
//                                     </div>
//                                     <!--                            <div class="box_container_social_m_contacts">-->
//                                     <!--                                <div class="logo_social_contacts">-->
//                                     <!--                                    <a href="https://www.behance.net/Verbitskaya_irina"><i class="bi bi-behance"></i></a>-->
//                                     <!--                                </div>-->
//                                     <!--                                <div class="title_social_contacts">BEHANCE</div>-->
//                                     <!--                            </div>-->
//                                 </div>
//                                 <div className="container_phone_contacts item_contacts">
//                                     <div className="item_phone_contact">
//                                         <i className="bi bi-telephone-fill"></i><a href="tel:+79500612752">+79500612752</a>
//                                     </div>
//                                     <div className="item_phone_contact">
//                                         <i className="bi bi-envelope-fill"></i><a
//                                         href="mailto:verbitsky.vastu@gmail.com">verbitsky.vastu@gmail.com </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="photo_about_us">
//                     <div className="img_diz_about_us">
//                         <div className="img_diz_photo_about_us"></div>
//                         <div className="text_photo_about_us">
//                             <p>ВЕРБИЦКАЯ ИРИНА</p>
//                         </div>
//                         <div className="text_photo_prof_about_us">
//                             <p>ГЛАВНЫЙ ДИЗАЙНЕР</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <footer className="footer">
//                 <div className="container_logo_footer">
//                     <img src="./images/logo_header.png" alt="alt"/>
//                 </div>
//                 <div className="text_footer">
//                     <p>
//                         VASTU дизайн интерьера
//                     </p>
//                 </div>
//                 <a href="./html/developer.html" className="links_social">
//                     <div className="text_link_social">РАЗРАБОТЧИК</div>
//                 </a>
//                 <div className="licens_container">
//                     <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" className="licens_footer">
//                         <img alt="Лицензия Creative Commons" style="border-width:0"
//                              src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/></a>
//                     <br/>This work is available on
//                     <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons
//                         Attribution-NonCommercial-NoDerivatives 4.0 Worldwide License</a>
//                 </div>
//             </footer>
//         </div>
// );
// };
//
// export default IndexTimely;