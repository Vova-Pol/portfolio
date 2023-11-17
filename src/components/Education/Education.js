import React from 'react';
import './Education.css';

export const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education__title">Образование</h2>
      <ul className="education__list">
        <li className="education__item">
          <h3 className="education__item-title">Курс "Веб-разработчик"</h3>
          <div className="education__container">
            <p className="education__item-subtitle">Яндекс Практикум</p>
            <p className="education__item-text">
              В 2022 году увлекся веб-разработкой и пошел на 10-ти месячный курс
              по фронтенду.
            </p>
            <p className="education__item-text">
              Начали с базовых навыков: HTML, CSS и ванильный JavaScript. Основы
              языка, ООП, взаимодействие с DOM-деревом и работа с формами.
            </p>
            <p className="education__item-text">
              Далее познакомились с разработкой на React, работой Webpack,
              установкой зависимостей через npm и взаимодействием с сервером.
            </p>
            <p className="education__item-text">
              Под конец курса получили основы бэкенд-разработки на Express.js,
              написали небольшое REST API и соединили его с уже имеющимся
              фронтенд-приложением.
            </p>
          </div>
        </li>
        <li className="education__item">
          <h3 className="education__item-title">TypeScript & Redux</h3>
          <p className="education__item-subtitle">
            Документация и свободные источники
          </p>
          <p className="education__item-text">
            Знание TypeScript и Redux - "маст-хэв" в современной
            фронтенд-разработке. И после 10 месяцев обучения с ментором было
            приятно самостоятельно взяться за изучение новых технологий.
          </p>
          <p className="education__item-text">
            Типизация на TS далась достаточно легко: хватило чтения документации
            и практики на учебных проектах (возможно, я просто капнул
            недостаточно глубоко&#129300;)
          </p>
          <p className="education__item-text">
            А вот разобраться с логикой работы стейт-менеджера оказалось
            сложнее. Помимо доки пришлось прибегнуть к другим открытым
            источникам.
          </p>
        </li>
        <li className="education__item">
          <h3 className="education__item-title">Java 17 Masterclass</h3>
          <p className="education__item-subtitle">Udemy.com</p>
          <p className="education__item-text">
            При работе над пет-проектом понял, что мне не хватает знанией по
            структурам данных и устройству бэкенд части приложения. Поэтому
            решил освоить новый ЯП, более подходящий для таких целей.
          </p>
        </li>
        <li className="education__item">
          <h3 className="education__item-title">Spring Boot 3 with Java</h3>
          <p className="education__item-subtitle">Udemy.com</p>
          <p className="education__item-text">
            Почувствовав уверенность в работе с Java, я взялся за освоение
            фреймворка Spring. Писать бэкенд – сложно, но можно&#129299;
          </p>
        </li>
        <li className="education__item">
          <h3 className="education__item-title">Advanced React</h3>
          <p className="education__item-subtitle">Udemy.com</p>
          <p className="education__item-text">
            Фронтенд – это у меня в крови. Написав несколько пробных проектов на
            Spring Boot, я вернулся к React. Захотелось углубить знания и узнать
            новые подходы к разработке.
          </p>
          <p className="education__item-text">
            На данный момент я прохожу курс с многообещающим названием: Advanced
            React: Design System, Design Patterns, Performance.
          </p>
          <p className="education__item-text">
            Тут непросто, и есть ощущение, что курс выходит за рамки
            junior-разработчика. Но от этого становится только интереснее!
          </p>
        </li>
      </ul>
    </section>
  );
};
