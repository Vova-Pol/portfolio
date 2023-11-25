import React, { useState } from 'react';
import './Contacts.css';
import { ReactComponent as EmailIcon } from '../../images/contacts-mail.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import emailjs from 'emailjs-com';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { RxCheckCircled, RxCrossCircled } from 'react-icons/rx';

export const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({
      name: '',
      email: '',
      message: '',
    });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.name || !values.email || !values.message) return;

    setShowErrors(true);

    if (isValid) {
      setIsLoading(true);
      emailjs
        .sendForm(
          'service_ty3rrhc',
          'template_n0nnjg7',
          evt.target,
          'f42ejHZ2bkYjMsWnT',
        )
        .then(() => {
          resetForm();
          setIsLoading(false);
          setIsSuccess(true);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsServerError(true);
          console.log(error.text);
        });
    }
  }

  return (
    <section id="contacts" className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__container">
        <div className="contacts__icon-container">
          <EmailIcon className="contacts-email-icon" />
        </div>
        <form className="contacts__form" onSubmit={handleSubmit} noValidate>
          <h3 className="contacts__form-title">Форма связи</h3>
          <label className="contacts__label">От кого:</label>
          <input
            type="text"
            name="name"
            className="contacts__input"
            placeholder="ФИО"
            minLength={2}
            maxLength={30}
            onChange={handleChange}
            value={values.name}
            required
          ></input>
          <span className="contacts__error">
            {showErrors && errors.name ? errors.name : ''}
          </span>
          <label className="contacts__label">E-mail:</label>
          <input
            type="email"
            name="email"
            className="contacts__input"
            placeholder="example@gmail.com"
            onChange={handleChange}
            value={values.email}
            required
          ></input>
          <span className="contacts__error contacts__error_type_double-line">
            {showErrors && errors.email ? errors.email : ''}
          </span>
          <label className="contacts__label">Сообщение:</label>
          <textarea
            name="message"
            className="contacts__textarea"
            placeholder="Привет, Вов!"
            minLength={2}
            maxLength={3000}
            onChange={handleChange}
            value={values.message}
            required
          ></textarea>
          <span className="contacts__error">
            {showErrors && errors.message ? errors.message : ''}
          </span>
          <button
            type="submit"
            className="contacts__button"
            disabled={isLoading}
          >
            {isLoading ? (
              <AiOutlineLoading3Quarters className="contacts__loading-icon" />
            ) : (
              'Отправить'
            )}
          </button>
          <div
            className={
              isSuccess
                ? 'contacts__result-message contacts__result-message_type_success'
                : isServerError
                ? 'contacts__result-message contacts__result-message_type_error'
                : 'contacts__result-message'
            }
          >
            {isSuccess && (
              <>
                <p>Ваше письмо отправлено</p>
                <RxCheckCircled />
              </>
            )}
            {isServerError && (
              <>
                <p>Произошла ошибка</p>
                <RxCrossCircled />
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
