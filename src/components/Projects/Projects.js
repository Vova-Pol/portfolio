import React from 'react';
import './Projects.css';
const proj1 = require('../../images/test-web-preview.png');
const proj2 = require('../../images/test-web-preview-2.jpeg');

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">
        В моём портфолио два полноценных{' '}
        <span className="projects__title_type-decorated">fullstack</span>
        {'  '}проекта
      </h2>
      <ul className="projects__projects-list">
        <li className="projects__list-item">
          <img
            src={proj1}
            alt="проект Movie Explorer"
            className="projects__image"
          ></img>
          <h3 className="projects__item-title">Movies Explorer</h3>
          <ul className="projects__item-info">
            <li className="projects__text">Сервис поиска фильмов</li>
            <li className="projects__text">Авторизация пользователя</li>
            <li className="projects__text">Поиск фильмов с фильтрами</li>
            <li className="projects__text">Сохранение фильмов в избранное</li>
          </ul>
        </li>

        <li className="projects__list-item">
          <img
            src={proj2}
            alt="проект Movie Explorer"
            className="projects__image"
          ></img>
          <h3 className="projects__item-title">Travaler</h3>
          <ul className="projects__item-info">
            <li className="projects__text">Социальная сеть путешественников</li>
            <li className="projects__text">Авторизация пользователя</li>
            <li className="projects__text">Создание и редактирование постов</li>
            <li className="projects__text">Новостная лента</li>
            <li className="projects__text">Рекомендации на основе лайков</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
