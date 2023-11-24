import React, { useState } from 'react';
import './Greeting.css';
import { Link } from 'react-router-dom';
import { GITHUB_URL, LEETCODE_URL } from '../../utils/constants';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
import { CiBookmarkCheck } from 'react-icons/ci';
const avatar = require('../../images/avatar.jpg');

export const Greeting = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  return (
    <section className="greeting">
      <img src={avatar} alt="аватар" className="greeting__avatar"></img>
      <article className="greeting__article-container">
        <h1 className="greeting__title">
          <span className="greeting__title_type_enlarged">
            Привет!
            <span className="greeting__waving-hand">👋</span>
          </span>
          <br /> Меня зовут Владимир
          <br />Я –{' '}
          <span className="greeting__title_type_decorated">
            Web-Разработчик
          </span>
        </h1>
        <p className="greeting__text">
          Моя цель – найти команду увлеченных людей, работать над интересным
          проектом и развиваться как разработчик.
        </p>
        <div className="greeting__buttons-container">
          <Link
            to={GITHUB_URL}
            className="greeting__link greeting__link_type_github"
            target="_blank"
          >
            <SiGithub /> GitHub
          </Link>
          <Link
            to="/test-cv.pdf"
            className="greeting__link greeting__link_type_cv"
            target="_blank"
            download
            onClick={() => setIsDownloaded(true)}
          >
            <MdDownload />
            Скачать CV
          </Link>

          <CiBookmarkCheck
            className={
              isDownloaded
                ? 'greeting__success-icon greeting__success-icon_shown'
                : 'greeting__success-icon'
            }
          />
        </div>
      </article>
    </section>
  );
};
