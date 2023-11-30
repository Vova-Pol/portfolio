import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { FaReact } from 'react-icons/fa';
import useResize from '../../hooks/useResize';
import { Navigation } from '../Navigation/Navigation';
import MobileMenu from '../MobileMenu/MobileMenu';

export const Header = () => {
  const { isScreenLaptop, isScreenMobile, isScreenTablet } = useResize();

  return (
    <header className="header">
      {isScreenLaptop ? (
        <>
          <Navigation />
          <FaReact className="header__icon" />
        </>
      ) : (
        <>
          <FaReact className="header__icon" />
          <MobileMenu />
        </>
      )}
    </header>
  );
};
