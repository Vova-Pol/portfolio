import React from 'react';
import './Greeting.css';
import { Link } from 'react-router-dom';
import { GITHUB_URL, LEETCODE_URL } from '../../utils/constants';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { MdDownload } from 'react-icons/md';
const avatar = require('../../images/avatar.jpg');

export const Greeting = () => {
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
          Моя цель – найти команду увлеченных людей и работать над интересным,
          стоящим проектом. Рассматриваю как крупны компании, так и начинающие
          старт-апы.
        </p>
        <div className="greeting__buttons-container">
          <Link to={GITHUB_URL} className="greeting__link" target="_blank">
            <SiGithub /> GitHub
          </Link>
          <button className="greeting__button">
            <MdDownload />
            Скачать CV
          </button>
        </div>
      </article>
    </section>
  );
};
