import React from 'react';
import './Navigation.css';
import { LiaLaptopCodeSolid } from 'react-icons/lia';

export const Navigation = ({ handleLink = () => {} }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <LiaLaptopCodeSolid className="navigation__logo" />
        </li>
        <li className="navigation__item">
          <a
            href="#education"
            className="navigation__link"
            onClick={handleLink}
          >
            Образование
          </a>
        </li>
        <li className="navigation__item">
          <a href="#projects" className="navigation__link" onClick={handleLink}>
            Проекты
          </a>
        </li>
        <li className="navigation__item">
          <a href="#stack" className="navigation__link" onClick={handleLink}>
            Стек
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contacts" className="navigation__link" onClick={handleLink}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
