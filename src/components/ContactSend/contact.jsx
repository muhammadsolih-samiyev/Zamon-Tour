import React from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

function Contact() {
  const { t } = useTranslation();

  const SendMessage = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;

    if (!name || !number || !country || !date) {
      alert(t('fill_all_fields'));
      return;
    }

    if (!number.match(/^\+?\d{10,}$/)) {
      alert(t('invalid_phone_format'));
      return;
    }

    const token = "6846219432:AAFbd1Cwyt5GywQ0jYssEbPKMbaNW50tOdI";
    const chat_id = 6030007736;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: 'POST',
      data: {
        chat_id: chat_id,
        text: `${t('name')}: ${name}\n${t('number')}: ${number}\n${t('country')}: ${country}\n${t('date')}: ${date}`,
      },
    })
    .then((res) => {
      alert(t('success_message'));
    })
    .catch((error) => {
      alert(`${t('error_message')}: ${error}`);
    });
  };

  return (
    <div id='contacts' className="contact">
      <div className="map">
        <iframe className='contactmap'
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3252.2562871331756!2d69.19966845675911!3d41.28903224846708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schilonzor-9%20dom-25!5e1!3m2!1sen!2s!4v1705743542224!5m2!1sen!2s"
          width="100%"
          height="450px"
          frameBorder="0"
          style={{ border: '0', borderTopLeftRadius: '23px', borderTopRightRadius: '23px' }}
          allowFullScreen=""
        ></iframe>
      </div>
      <div className="contact_sms">
        <h1 className='contact_make'>{t('make_your_reservation')} <span className="slix">{t('reservation')}</span> {t('form')} </h1>
        <form onSubmit={SendMessage} className="contact-set">
          <div className="Contact-stime">
            <div className="contact-sms1">
              <label htmlFor="name">{t('your_name')}</label> <br />
              <input id='name' placeholder='Ex. John Smithe' type="text" /><br />
              <label htmlFor="section">{t('number_of_guests')}</label><br />
              <select id="section">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4.01">4</option>
              </select>
            </div>
            <div className="contact-sms1">
              <label htmlFor="number">{t('your_number')}</label> <br />
              <input id='number' placeholder='+998939992226' type="text" /><br />
              <label id='datetime' htmlFor="date">{t('date_of_arrival')}</label><br />
              <input id='date' type="date" />
            </div>
          </div>
          <div className="contact-item">
            <select id="country" name="country">
              <option value="">{t('select_country')}</option>
              <option value="usa">USA</option>
              <option value="istanbul">Istanbul</option>
              <option value="canada">Canada</option>
              <option value="england">England</option>
            </select>
            <button type='submit'>{t('make_your_reservation_now')}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
