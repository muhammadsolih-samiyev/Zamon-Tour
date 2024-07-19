import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserFriends, FaGlobe, FaHome, FaTimes, FaTelegramPlane, FaInstagram, FaBars } from 'react-icons/fa';
import NavLogo from '../img/zamon.svg';
import istanbulImage from '../img/istanbul.jpg';
import antalyaImage from '../img/antalya.jpg';
import dubaiImage from '../img/dubai2.jpg';
import sharmImage from '../img/sharm2.jpg';
import './navbar.css';

function NavbarHeader() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const cities = ['Istanbul', 'Antalya', 'Dubai', 'Sharm El-Sheikh'];
    const images = [istanbulImage, antalyaImage, dubaiImage, sharmImage];
    const cityData = {
        Istanbul: {
            population: '15.46 M',
            territory: '5,343 KM2',
            avgPrice: '$500,000'
        },
        Antalya: {
            population: '2.5 M',
            territory: '20,177 KM2',
            avgPrice: '$300,000'
        },
        Dubai: {
            population: '3.3 M',
            territory: '4,114 KM2',
            avgPrice: '$946,000'
        },
        'Sharm El-Sheikh': {
            population: '73,000',
            territory: '42.000 KM2',
            avgPrice: '$200,000'
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % cities.length);
        }, 3000);

        return () => clearInterval(interval);
    });

    const currentCity = cities[index];

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="nav">
                        <div className="nav_logo">
                            <img src={NavLogo} alt="Zamon Tour Logo" className="nav_logo_img" />
                        </div>
                        <div className={`nav_items ${isOpen ? 'open' : ''}`}>
                            <ul className="nav_item_list">
                                <li className="nav_list_li"><a href="#home" className="nav_link">{t('home')}</a></li>
                                <li className="nav_list_li"><a href="#about" className="nav_link">{t('about')}</a></li>
                                <li className="nav_list_li"><a href="#tours" className="nav_link">{t('tours')}</a></li>
                                <li className="nav_list_li"><a href="#contacts" className="nav_link">{t('contacts')}</a></li>
                            </ul>
                            <ul className="nav_link_list">
                                <li className="nav_link_li"><a href="#/" onClick={() => changeLanguage('uz')} className="nav_lang">UZ</a></li>
                                <li className="nav_link_li"><a href="#/" onClick={() => changeLanguage('en')} className="nav_lang">ENG</a></li>
                                <li className="nav_link_li"><a href="#/" onClick={() => changeLanguage('ru')} className="nav_lang">RU</a></li>
                                <li className="nav_link_li">
                                    <a href="https://www.telegram.org" className="nav_link_icon"><FaTelegramPlane /></a>
                                    <a href="https://www.instagram.com" className="nav_link_icon"><FaInstagram /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="burger" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </div>
            </nav>

            <header className='header' style={{ backgroundImage: `url(${images[index]})` }}>
                <div className="header_city">
                    <h3 className="header_city_title">
                        {t('take_a_glimpse')}
                    </h3>
                    <h1 className="header_title">{currentCity}</h1>
                    <button className='header_btn'>{t('go_there')}</button>
                </div>

                <div className="header_content">
                    <div className="container">
                        <div className="header_menu">
                            <div className="population nnn">
                                <div className="population_icon header_icon">
                                    <FaUserFriends />
                                </div>
                                <div className="population_title">
                                    <p className="population_text">
                                        {t('population')}
                                    </p>
                                    <h3 className="population_h">
                                        {cityData[currentCity].population}
                                    </h3>
                                </div>
                            </div>

                            <div className="territory nnn">
                                <div className="territory_icon header_icon">
                                    <FaGlobe />
                                </div>
                                <div className="territory_title">
                                    <p className="territory_text">
                                        {t('territory')}
                                    </p>
                                    <h3 className="territory_h">
                                        {cityData[currentCity].territory}
                                    </h3>
                                </div>
                            </div>

                            <div className="price nnn">
                                <div className="price_icon header_icon">
                                    < FaHome />
                                </div>
                                <div className="price_title">
                                    <p className="price_text">
                                        {t('avg_price')}
                                    </p>
                                    <h3 className="price_h">
                                        {cityData[currentCity].avgPrice}
                                    </h3>
                                </div>
                            </div>

                            <div className="header_menu_btn">
                                <button className='menu_btn'>{t('explore_more')}</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    );
}

export default NavbarHeader;
