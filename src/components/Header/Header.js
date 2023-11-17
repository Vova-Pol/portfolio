import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaReact } from 'react-icons/fa';

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleChangeTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li>
            <Link to="/" className="header__link">
              <LiaLaptopCodeSolid className="header__logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="header__link">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/#education" className="header__link">
              Образование
            </Link>
          </li>
          <li>
            <Link to="/#projects" className="header__link">
              Проекты
            </Link>
          </li>
          <li>
            <Link to="/#stack" className="header__link">
              Стек
            </Link>
          </li>
          <li>
            <Link to="/#contacts" className="header__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__input-container">
        <FaReact className="header__icon" />
      </div>
    </header>
  );
};
