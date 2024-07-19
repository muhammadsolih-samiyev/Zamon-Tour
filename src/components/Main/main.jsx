// Main.jsx
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import menuIstanbul from '../img/menuIstanbul.jpg';
import menuCanada from '../img/menuCanada.jpg';
import menuAntalya from '../img/menuAntalya.jpg';
import menuDubai from '../img/menuDubai.jpg';
import menuEurope from '../img/menuErope.jpg';
import menuSharm from '../img/menuSharm.jpg';
import menuUsa from '../img/usa1.jpg';
import menuEngland from '../img/menuIstanbul.jpg'; 
import { FaBuilding, FaPlane, FaTaxi, FaUsers, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './main.css';

function Main() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const sectionWidth = scrollRef.current.querySelector('.main_part').offsetWidth;
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.querySelector('.main_part').offsetWidth;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= sectionWidth;
      } else {
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }
  };

  const renderMainPart = (city, price, checkIns, image) => (
    <div className="main_part" key={city}>
      <div className="main_img">
        <img src={image} alt={city} className="main_pic" />
      </div>
      <div className="main_list">
        <div className="container">
          <div className="main_list_city">
            <h2 className="main_list_h">{city}</h2>
            <h2 className="main_list_h">${price}</h2>
          </div>
          <div className="main_list_person">
            <div className="main_person_icon">
              <FaUsers />
              <p className="main_person_text">{checkIns} {t('check_ins')}</p>
            </div>
            <p className="main_person_text"> {t('person')}</p>
          </div>
          <hr />
          <div className="main_list_deal">
            <h4 className="main_deal-h">{t('deal_includes')}:</h4>
            <div className="main_deal_icon"><FaTaxi /> 5 {t('days_trip')} {t('visa_support')}</div>
            <div className="main_deal_icon"><FaPlane /> {t('experience_stress_free_travel')}</div>
            <div className="main_deal_icon"><FaBuilding /> {t('seamless_assis_tance')} {t('comprehensive_guidance')}</div>
          </div>
          <button className="main_list_btn">{t('make_reservation')}</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main">
      <div className="main_title">
        <h1 className="main_h">{t('best_weekly_offers')}</h1>
        <p className="main_text">
          {t('discover_weekly_offers')}
        </p>
      </div>
      <div className="content_container">
        <div className="content" ref={scrollRef}>
          {renderMainPart('Istanbul', 420, 234, menuIstanbul)}
          {renderMainPart('El-Sheikh', 520, 189, menuSharm)}
          {renderMainPart('England', 600, 256, menuEngland)}
          {renderMainPart('USA', 750, 312, menuUsa)}
          {renderMainPart('Canada', 680, 275, menuCanada)}
          {renderMainPart('Berlin', 490, 198, menuEurope)}
          {renderMainPart('Dubai', 650, 223, menuDubai)}
          {renderMainPart('Antalya', 720, 145, menuAntalya)}
          {renderMainPart('Istanbul', 420, 234, menuIstanbul)}
          {renderMainPart('El-Sheikh', 520, 189, menuSharm)}
          {renderMainPart('England', 600, 256, menuEngland)}
          {renderMainPart('USA', 750, 312, menuUsa)}
          {renderMainPart('Canada', 680, 275, menuCanada)}
          {renderMainPart('Berlin', 490, 198, menuEurope)}
          {renderMainPart('Dubai', 650, 223, menuDubai)}
          {renderMainPart('Antalya', 720, 145, menuAntalya)}
        </div>
      </div>
      <div className="main_btn">
        <button className="menu_left_btn" onClick={() => scroll('left')}>
          <FaArrowLeft />
        </button>
        <button className="menu_right_btn" onClick={() => scroll('right')}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Main;
