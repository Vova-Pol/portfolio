// ---------- URLs

export const GITHUB_URL = 'https://github.com/Vova-Pol';
export const LEETCODE_URL = 'https://leetcode.com/Vova_Pol/';

// ---------- Images

const russianTravel1 = require('../images/russian-travel-prev-1.png');
const russianTravel2 = require('../images/russian-travel-prev-2.png');
const russianTravel3 = require('../images/russian-travel-prev-3.png');

// ---------- Projects Data

export const PROJECTS = [
  {
    title: 'Лендинг',
    images: [russianTravel1, russianTravel2, russianTravel3],
    imageAlt: 'Путешествия по России',
    demoUrl: 'https://vova-pol.github.io/russian-travel',
    githubUrl: 'https://github.com/Vova-Pol/russian-travel',
    technology: 'Верстка',
    // сложность проекта 2/5, значит понадобится 2 закрашенные
    // иконки и 3 незакрашенные
    difficulty: [2, 3],
    functionality: [
      'Адаптивная верстка',
      'Файловая структура и наименование классов по БЭМ',
      'Flex & Grid Layout',
      'Семантические HTML теги',
    ],
  },
  {
    title: 'Интернет-магазин',
    images: [russianTravel1, russianTravel2, russianTravel3],
    imageAlt: 'Интернет-магазин',
    demoUrl: 'https://vova-pol.github.io/book-store',
    githubUrl: 'https://github.com/Vova-Pol/book-store',
    technology: 'Redux',
    difficulty: [3, 2],
    functionality: [
      'Работа с глобальным стейтом',
      'Добавление/удаление товаров в корзину',
      'Добавление/удаление товаров в избранное',
      'Переключатель Grid/Column Layout',
    ],
  },
  {
    title: 'Поисковик фильмов',
    images: [russianTravel1, russianTravel2, russianTravel3],
    imageAlt: 'Поисковик фильмов',
    demoUrl: 'https://vova-pol.github.io/book-store',
    githubUrl: 'https://github.com/Vova-Pol/movies-explorer-frontend',
    technology: 'Fullstack',
    difficulty: [5, 0],
    functionality: [
      'Авторизация пользователя',
      'Запросы к REST Api',
      'Поиск фильмов с фильтром "короткометражки"',
      'Сохранение/удаление фильмов в избранном',
      'Редактирование профиля',
      'Фронтенд: React + Typescript',
      'Бекэнд: Spring Boot + MySQL',
    ],
  },
  {
    title: 'Сервис изучения иностранного языка',
    images: [russianTravel1, russianTravel2, russianTravel3],
    imageAlt: 'Сервис изучения иностранного языка',
    demoUrl: 'https://vova-pol.github.io/my-chinese-tool',
    githubUrl: 'https://github.com/Vova-Pol/my-chinese-tool',
    technology: 'Fullstack',
    difficulty: [5, 0],
    functionality: [
      'Добавление списков слов',
      'Повторние с карточками',
      'Повторение по видео',
      'Шкала прогресса',
      'Поиск по словарю с указанием частотности',
      'Инструмент "5000 иероглифов"',
      'Фронтенд: React + Typescript',
      'Бекэнд: Express.js + MongoDB',
    ],
  },
];
