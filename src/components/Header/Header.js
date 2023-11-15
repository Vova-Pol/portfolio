import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa6';

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
        {/* <input
          className="header__input"
          type="checkbox"
          checked={isDarkTheme}
          onChange={handleChangeTheme}
        ></input> */}
        <span onClick={handleChangeTheme}>
          {isDarkTheme ? (
            <FaLightbulb className="header__theme-icon" />
          ) : (
            <FaRegLightbulb className="header__theme-icon" />
          )}
        </span>
      </div>
    </header>
  );
};
