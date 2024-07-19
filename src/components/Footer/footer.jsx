import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer_title">
        <div className="footer_text">
          <h1 className="footer_h1">
            {t('are_you_looking_to_travel')}<br />
          </h1>
          <p className="footer_p">
            {t('make_a_reservation')}
          </p>
        </div>
        <div className="footer_btnn">
          <button className='footer_btn'>
            {t('book_yours_now')}
          </button>
        </div>
      </div>
      <h5 className="footer_copy">
        {t('footer_copyright')}
      </h5>
    </footer>
  );
}

export default Footer;
