import React from 'react';
import './Education.css';

export const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education__title">Образование</h2>
      <ul className="education__list">
        <li className="education__item">
          <div className="education__item-title">Курс "Веб-разработка"</div>
          <div className="education__item-subtitle">Яндекс Практикум</div>
          <div className="descr">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            itaque hic quibusdam fugiat est numquam harum, accusamus suscipit
            consequatur laboriosam!
          </div>
        </li>
        <li className="education__item">
          <div className="education__item-title">TypeScript/Redux</div>
          <div className="education__item-subtitle">
            Документация + свободные источники
          </div>
          <div className="descr">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            adipisci nobis nostrum vero nihil veniam.
          </div>
        </li>
        <li className="education__item">
          <div className="education__item-title">Java 17 Masterclass</div>
          <div className="education__item-subtitle">Udemy.com</div>
          <div className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima
            consequuntur soluta placeat iure totam commodi repellendus ea
            delectus, libero fugit quod reprehenderit, sequi quo, et dolorum
            saepe nulla hic.
          </div>
        </li>
        <li className="education__item">
          <div className="education__item-title">Spring Boot 3 with Java</div>
          <div className="education__item-subtitle">Udemy.com</div>
          <div className="descr">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            cumque.
          </div>
        </li>
        <li className="education__item">
          <div className="education__item-title">Advanced React</div>
          <div className="education__item-subtitle">Udemy.com</div>
          <div className="descr">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.
          </div>
        </li>
      </ul>
    </section>
  );
};
