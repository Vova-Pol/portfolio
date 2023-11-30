import React, { useState } from 'react';
import './MobileMenu.css';
import { Navigation } from '../Navigation/Navigation';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOnClose() {
    setIsOpen(false);
  }
  return (
    <div className="mobile-menu">
      <input
        type="checkbox"
        className="mobile-menu__toggle"
        checked={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      ></input>
      <div className="mobile-menu__icon"></div>
      <div className="mobile-menu__menu">
        <Navigation handleLink={handleOnClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
