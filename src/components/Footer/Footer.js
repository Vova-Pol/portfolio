import React from 'react';
import './Footer.css';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contacts">
        <h4 className="footer__title">Контакты</h4>
        <ul className="footer__contacts-list">
          <li className="footer__contacts-item">
            <FaWhatsapp className="footer__contacts-icon" />
            +7-967-292-84-53
          </li>
          <li className="footer__contacts-item">
            <FaTelegram className="footer__contacts-icon" />
            @Vova_Pol_94
          </li>
          <li className="footer__contacts-item">
            <MdOutlineMailOutline className="footer__contacts-icon" />
            ya-chai777@yandex.ru
          </li>
        </ul>
      </div>
      <div className="footer__message">
        <p className="footer__text">
          Буду рад обратной связи по любому из представленных проектов &#128578;
        </p>
        <p className="footer__author">
          &#169; {new Date().getFullYear()}. Поляница Владимир
        </p>
      </div>
    </footer>
  );
};
