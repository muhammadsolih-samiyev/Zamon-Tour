// src/components/Slider.jsx
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import menuIstanbul from '../img/menuIstanbul.jpg';
import menuCanada from '../img/menuCanada.jpg';
import menuAntalya from '../img/menuAntalya.jpg';
import menuDubai from '../img/menuDubai.jpg';
import menuEurope from '../img/menuErope.jpg';
import menuSharm from '../img/menuSharm.jpg';
import menuUsa from '../img/usa1.jpg';
import menuEngland from '../img/England.jpg';
import { FaUsers, FaArrowLeft, FaArrowRight, FaTags, FaClock, FaCheck } from 'react-icons/fa';
import './slider.css';

function Slider() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const sectionWidth = scrollRef.current.querySelector('.slider_part').offsetWidth;
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.querySelector('.slider_part').offsetWidth;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= sectionWidth;
      } else {
        scrollRef.current.scrollLeft += sectionWidth;
      }
    }
  };

  const renderSliderPart = (city, checkIns, image) => (
    <div className="slider_part" key={city}>
      <div className="slider_img">
        <img src={image} alt={city} className="slider_pic" />
      </div>
      <div className="slider_list">
        <div className="container">
          <div className="slider_list_city">
            <h2 className="slider_list_h">{city}</h2>
          </div>
          <div className="slider_list_person">
            <div className="slider_person_icon">
              <FaUsers />
              <p className="slider_person_text">{checkIns} {t('check_ins')}</p>
            </div>
          </div>
          <hr />
          <div className="slider_list_deal">
            <h5 className="slider_deal-h">{t('benefits_of_visa_support_service')}</h5>
            <div className="slider_deal_icon"><FaTags /> {t('deal_includes')} {t('5 Days Trip Hotel Included')}</div>
            <div className="slider_deal_icon"><FaClock /> {t('experience_stress_free_travel')} {t('airplane_bill_included')}</div>
            <div className="slider_deal_icon"><FaCheck /> {t('seamless_assistance')} {t('Daily Places Visit')}</div>
          </div> 
          <button className="slider_list_btn">{t('make_reservation')}</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <hr />
      <div className="slider">
        <div className="slider_title">
          <h1 className="slider_h">{t('visa_support')}</h1>
          <p className="slider_text">
            {t('experience_stress_free_travel')} <br /> {t('seamless_assistance')} {t('comprehensive_guidance')}, {t('smooth_journey')}.
          </p>
        </div>

        <div className="content_container">
          <div className="content" ref={scrollRef}>
            {renderSliderPart('Istanbul', 234, menuIstanbul)}
            {renderSliderPart('El-Sheikh', 189, menuSharm)}
            {renderSliderPart('England', 256, menuEngland)}
            {renderSliderPart('USA', 312, menuUsa)}
            {renderSliderPart('Canada', 275, menuCanada)}
            {renderSliderPart('Berlin', 198, menuEurope)}
            {renderSliderPart('Dubai', 223, menuDubai)}
            {renderSliderPart('Antalya', 145, menuAntalya)}
            {renderSliderPart('Istanbul', 234, menuIstanbul)}
            {renderSliderPart('El-Sheikh', 189, menuSharm)}
            {renderSliderPart('England', 256, menuEngland)}
            {renderSliderPart('USA', 312, menuUsa)}
            {renderSliderPart('Canada', 275, menuCanada)}
            {renderSliderPart('Berlin', 198, menuEurope)}
            {renderSliderPart('Dubai', 223, menuDubai)}
            {renderSliderPart('Antalya', 145, menuAntalya)}
          </div>
        </div>
        <div className="slider_btn">
          <button className="slider_left_btn" onClick={() => scroll('left')}>
            <FaArrowLeft />
          </button>
          <button className="slider_right_btn" onClick={() => scroll('right')}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
