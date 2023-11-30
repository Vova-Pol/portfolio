import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { LiaLaptopCodeSolid } from 'react-icons/lia';

export const Navigation = ({ handleLink = () => {} }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <LiaLaptopCodeSolid className="navigation__logo" />
        </li>
        <li className="navigation__item">
          <Link to="/" className="navigation__link" onClick={handleLink}>
            Главная
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/#education"
            className="navigation__link"
            onClick={handleLink}
          >
            Образование
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/#projects"
            className="navigation__link"
            onClick={handleLink}
          >
            Проекты
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/#stack" className="navigation__link" onClick={handleLink}>
            Стек
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/#contacts"
            className="navigation__link"
            onClick={handleLink}
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};
