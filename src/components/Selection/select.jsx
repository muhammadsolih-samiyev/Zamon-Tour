import React from 'react'
import { useTranslation } from 'react-i18next';

import selectMenu from '../img/airvays.jpg'
import selectMenu2 from '../img/airplane.jpg'
import selectMenu3 from '../img/dubaiS.jpg'
import selectMenu4 from '../img/sharmS.jpg'
import selectMenu5 from '../img/istanbuS.jpg'

import './select.css'
import { FaGlobe, FaHome, FaUser } from 'react-icons/fa'

function Select() {
  const { t } = useTranslation();

  return (
    <section className='select'>
      <div className="select_container">
        <div className="select_title">
          <h2 className="select_h">
            {t('explore_destinations')}
          </h2>
          <div className="select_text">
            {t('find_best_deals')}
          </div>
        </div>

        <div className="select_menu">
          <div className="select_menu_img">
            <img src={selectMenu} alt="Airvays" className="select_pic"/>
          </div>
          <div className="select_menu_text">
            <div className="select_menu_title">
              <div className="select_hp">
                <h2 className="select_title_h">
                  {t('cheap_railway_tickets')}
                </h2>
                <p className="select_title_p">{t('whole_world')}</p>
              </div>
              <button className="select_title_btn">
                {t('explore_more')}
              </button>
            </div>
            <p className="select_title_p">
              {t('railway_adventure')}
            </p>
          </div>
        </div>
        <hr />

        <div className="select_menu">
          <div className="select_menu_img">
            <img src={selectMenu2} alt="Airvays" className="select_pic"/>
          </div>
          <div className="select_menu_text">
            <div className="select_menu_title">
              <div className="select_hp">
                <h2 className="select_title_h">
                  {t('cheap_airline_tickets')}
                </h2>
                <p className="select_title_p">{t('whole_world')}</p>
              </div>
              <button className="select_title_btn">
                {t('explore_more')}
              </button>
            </div>
            <p className="select_title_p">
              {t('airline_adventure')}
            </p>
          </div>
        </div>
        <hr />

        <div className="select_title">
          <h2 className="select_h">
            {t('visit_one_of_countries')}
          </h2>
          <div className="select_text">
            {t('discover_best_offers')}
          </div>
        </div>

        <div className="select_menu">
          <div className="select_menu_img">
            <img src={selectMenu3} alt="Airvays" className="select_pic"/>
          </div>
          <div className="select_menu_text">
            <div className="select_menu_title">
              <div className="select_hp">
                <h2 className="select_title_h">
                  {t('cheap_railway_tickets')}
                </h2>
                <p className="select_title_p">{t('whole_world')}</p>
              </div>
              <button className="select_title_btn">
                {t('explore_more')}
              </button>
            </div>
            <p className="select_title_p">
              {t('railway_adventure')}
            </p>
            <hr />
            <div className="select_malumot">
              <ul className="malumot_part">
                <li className="malumot_icon"><FaUser/> {t('mil_people')}</li>
                <li className="malumot_icon"><FaGlobe/> {t('km2')}</li>
                <li className="malumot_icon"><FaHome/> {t('price')}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className="select_menu">
          <div className="select_menu_img">
            <img src={selectMenu4} alt="Airvays" className="select_pic"/>
          </div>
          <div className="select_menu_text">
            <div className="select_menu_title">
              <div className="select_hp">
                <h2 className="select_title_h">
                  {t('cheap_airline_tickets')}
                </h2>
                <p className="select_title_p">{t('whole_world')}</p>
              </div>
              <button className="select_title_btn">
                {t('explore_more')}
              </button>
            </div>
            <p className="select_title_p">
              {t('airline_adventure')}
            </p>
            <hr />
            <div className="select_malumot">
              <ul className="malumot_part">
                <li className="malumot_icon"><FaUser/> {t('mil_people')}</li>
                <li className="malumot_icon"><FaGlobe/> {t('km2')}</li>
                <li className="malumot_icon"><FaHome/> {t('price')}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="select_menu">
          <div className="select_menu_img">
            <img src={selectMenu5} alt="Airvays" className="select_pic"/>
          </div>
          <div className="select_menu_text">
            <div className="select_menu_title">
              <div className="select_hp">
                <h2 className="select_title_h">
                  {t('cheap_airline_tickets')}
                </h2>
                <p className="select_title_p">{t('whole_world')}</p>
              </div>
              <button className="select_title_btn">
                {t('explore_more')}
              </button>
            </div>
            <p className="select_title_p">
              {t('airline_adventure')}
            </p>
            <hr />
            <div className="select_malumot">
              <ul className="malumot_part">
                <li className="malumot_icon"><FaUser/> {t('mil_people')}</li>
                <li className="malumot_icon"><FaGlobe/> {t('km2')}</li>
                <li className="malumot_icon"><FaHome/> {t('price')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default Select
