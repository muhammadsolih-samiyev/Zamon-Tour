import { useState } from "react";
import { useTranslation } from 'react-i18next';
import menuIstanbul from '../img/istanbul.jpg';
import menuCanada from '../img/England.jpg';
import menuAntalya from '../img/dubai2.jpg';
import menuEurope from '../img/menuErope.jpg';
import menuDubai from '../img/menuDubai.jpg'
import "./galery.css";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const items = [
  { image: menuIstanbul, headerm: "Istanbul", text: "Discover the city of Istanbul." },
  { image: menuCanada, header: "Canada", text: "Explore the landscapes of Canada." },
  { image: menuAntalya, header: "Antalya", text: "Relax on the beaches of Antalya." },
  { image: menuEurope, header: "Europe", text: "Travel through the cultures of Europe." },
  { image: menuDubai, header: "Dubai", text: "Travel through the cultures of Europe." },
];

export const ImageAccordion = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();

  const handleToggle = (index) => setActive(index);

  return (
    <div className="acardion">
      <h1 className="acardion_title">
        {t('best_locations')}
      </h1>
      <p className="acardion_p">
        {t('discover_best_offers')}
      </p>
      <section className="image-accordion">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={index}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} alt={item.header} />
              <div className="content">
                <div>
                  <h2>{t(item.header)}</h2>
                  <p>{t(item.text)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <div className="contactall">
        <div className="contactuse">
          <div className="contactuse_title">
            <h3 className="contactuse_title_h3">
              {t('book_prefered_deal')}
            </h3>
            <hr className="contactuse_hr" />
            <h1 className="contactuse_title_h1">
              {t('make_reservation')}
            </h1>
            <button className="contactuse_btn">
              {t('discover_more')}
            </button>
          </div>
        </div>

        <div className="contactuse_menu">
          <div className="contactuse_part">
            <FaPhone className="contactuse_part_icon" />
            <h2 className="contactuse_menu_h2">
              {t('phone_call')}
            </h2>
            <p className="contactuse_menu_p">
              +998 99 299 99 96
            </p>
          </div>
          <div className="contactuse_part">
            <FaEnvelope className="contactuse_part_icon" />
            <h2 className="contactuse_menu_h2">
              {t('contact_email')}
            </h2>
            <p className="contactuse_menu_p">
              zamonbiznestour@mail.ru
            </p>
          </div>
          <div className="contactuse_part">
            <FaMapMarkerAlt className="contactuse_part_icon" />
            <h2 className="contactuse_menu_h2">
              {t('visit_offices')}
            </h2>
            <p className="contactuse_menu_p">
              15/25, Chilanzar - 9, Tashkent city
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};                        
