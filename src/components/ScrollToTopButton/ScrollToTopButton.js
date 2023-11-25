import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
import { FaCircleArrowUp } from 'react-icons/fa6';

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FaCircleArrowUp
      className={
        showButton ? 'scroll-to-top-button' : 'scroll-to-top-button hidden'
      }
      onClick={handleClick}
    />
  );
};
