import React from 'react';
import './Greeting.css';
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
          Увлекся программированием в 2022 году. Сначала писал простые
          HTML/CSS/JS сайты с адаптивной версткой и скромным функционалом.
        </p>
        <p className="greeting__text">
          Потом начал работать с React, пытался познать Webpack, изучил
          Typescript и написал несколько пробных проектов с Redux Toolkit.
        </p>
        <p className="greeting__text">
          После года обучения frontend-разработки заинтересовался серверной
          стороной приложений. Тут же подоспели и алгоритмы, и типы данных.
        </p>
        <p className="greeting__text">
          В 2023 взялся за изучение языка Java, основ бэкенда и фреймворка
          Spring Boot.
        </p>
      </article>
    </section>
  );
};
