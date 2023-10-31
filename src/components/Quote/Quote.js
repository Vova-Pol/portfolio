import React from 'react';
import './Quote.css';
import { LuRefreshCw } from 'react-icons/lu';

export const Quote = () => {
  return (
    <section className="quote">
      <h2 className="quote__title">#Цитата_дня</h2>
      <LuRefreshCw className="quote__refresh-icon" />
      <blockquote className="quote__text">
        "Хорошая реклама образовывает людей, только и всего. Невозможно
        одурачить людей в этом бизнесе. Продукты говорят сами за себя."
      </blockquote>
      <span className="quote__author">Кофуций*</span>
      <p className="quote__origin-author">
        *Но это не точно... Возможно, это был Стив Джобс
      </p>
    </section>
  );
};
