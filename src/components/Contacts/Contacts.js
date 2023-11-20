import React from 'react';
import './Contacts.css';
import { ReactComponent as EmailIcon } from '../../images/contacts-mail.svg';

export const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <div className="contacts__icon-container">
          <EmailIcon className="contacts-email-icon" />
        </div>
        <form className="contacts__form">
          <h3 className="contacts__form-title">Форма связи</h3>
          <label className="contacts__label">От кого:</label>
          <input
            type="text"
            className="contacts__input"
            placeholder="ФИО"
            required
          ></input>
          <label className="contacts__label">E-mail:</label>
          <input
            type="email"
            className="contacts__input"
            placeholder="example@gmail.com"
            required
          ></input>
          <label className="contacts__label">Сообщение:</label>
          <textarea
            className="contacts__textarea"
            placeholder="Привет, Вов!"
            required
          ></textarea>
          <button type="submit" className="contacts__button">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};
