import React, { useState } from 'react';
import './registration.scss';
import { setChangeAvatar } from '../redux/slices/Avatar.slice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNameValue } from '../redux/slices/inputs/nameValue.slice';
import { setSurnameValue } from '../redux/slices/inputs/surnameValue.slice';
import { setEmailValue } from '../redux/slices/inputs/emailValue.slice';

function Registration() {
  // const [avatar, setAvatar] = useState(
  //   'https://img.myloview.com/murals/default-avatar-profile-image-vector-social-media-user-icon-400-228654854.jpg',
  // );
  const avatar = useSelector((state) => state.avatar.avatar);
  const nameValue = useSelector((state) => state.nameValue.nameValue);
  const surnameValue = useSelector((state) => state.surnameValue.surnameValue);
  const emailValue = useSelector((state) => state.emailValue.emailValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    country: '',
    email: '',
    password: '',
    repeat_password: '',
  });

  const handleNameChange = (e) => {
    dispatch(setNameValue(e.target.value));
    localStorage.setItem('nameValue', e.target.value);
  };
  const handleSurnameChange = (e) => {
    dispatch(setSurnameValue(e.target.value));
    localStorage.setItem('surnameValue', e.target.value);
  };
  const handleEmailChange = (e) => {
    dispatch(setEmailValue(e.target.value));
    localStorage.setItem('emailValue', e.target.value);
  };

  const handleCreateAccaunt = () => {
    for (const field in formData) {
      if (formData[field] === '') {
        alert('Пожалуйста, заполните все поля');
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    if (formData.password.length < 6 || formData.repeat_password.length < 6) {
      alert('Пароли должны содержать как минимум 6 символов.');
      return;
    }

    if (formData.country.length < 4) {
      alert('К сожалению такой страны + города не существует');
      return;
    }

    if (formData.password !== formData.repeat_password) {
      setPasswordsMatch(false);
      alert('Пароли не совпадают. Пожалуйста, проверьте введенные данные.');
      return;
    }

    if (formData.name.length < 5 || formData.surname.length < 5) {
      alert('Имя и Фамилия должны содержать как минимум 5 символа.');
      return;
    }

    setPasswordsMatch(true);
    const message = window.confirm('Ваш аккаунт успешно создан, поздравляем!');

    if (message) {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in formData) {
      if (formData[field] === '') {
        alert('Пожалуйста, заполните все поля');
        return;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Пожалуйста, введите корректный адрес электронной почты.');
      return;
    }

    if (formData.password !== formData.repeat_password) {
      setPasswordsMatch(false);
      alert('Пароли не совпадают. Пожалуйста, проверьте введенные данные.');
      return;
    }

    setPasswordsMatch(true);
    console.log('Форма успешно отправлена!');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatarURL = e.target.result;
        dispatch(setChangeAvatar(newAvatarURL));
        localStorage.setItem('avatar', newAvatarURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenGoogle = () => {
    window.open('https://myaccount.google.com/', '_blank');
  };
  const handleOpenApple = () => {
    window.open('https://www.apple.com/shop/help/your_account', '_blank');
  };
  const handleOpenTwitter = () => {
    window.open('https://twitter.com/i/flow/login', '_blank');
  };

  return (
    <div className="Registration-Main">
      <div className="registration-wrapper">
        <form className="registration-form" onSubmit={handleSubmit}>
          <div class="container">
            <div class="heading">Создание аккаунта</div>
            <form action="" class="form">
              <input
                required
                class="input"
                onChangeCapture={handleNameChange}
                value={nameValue}
                type="text"
                name="text"
                id="text"
                placeholder="Имя"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                required
                class="input"
                onChangeCapture={handleSurnameChange}
                value={surnameValue}
                type="text"
                name="text"
                id="text"
                placeholder="Фамилия"
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              />
              <input
                required
                class="input"
                type="text"
                name="text"
                id="text"
                placeholder="Страна | Город"
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
              <input
                required
                class="input"
                value={emailValue}
                onChangeCapture={handleEmailChange}
                type="email"
                name="email"
                id="email"
                placeholder="Эл. почта"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                required
                class="input"
                type="password"
                name="password"
                id="password"
                placeholder="Придумайте пароль"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (e.target.value === formData.repeat_password) {
                    setPasswordsMatch(true);
                  } else {
                    setPasswordsMatch(false);
                  }
                }}
              />
              <input
                required
                class="input"
                type="password"
                name="repeat_password"
                id="repeat_password"
                placeholder="Повторите ваш пароль"
                onChange={(e) => {
                  setFormData({ ...formData, repeat_password: e.target.value });
                  if (e.target.value === formData.password) {
                    setPasswordsMatch(true);
                  } else {
                    setPasswordsMatch(false);
                  }
                }}
              />
              {!passwordsMatch && (
                <div style={{ color: 'red' }}>
                  Пароли не совпадают. Пожалуйста, проверьте введенные данные.
                </div>
              )}
              <input
                onClick={handleCreateAccaunt}
                class="login-button"
                type="button"
                value="Зарегистрироваться"
              />
            </form>
            <div class="social-account-container">
              <span class="title">Зарегистрироваться с помошью</span>
              <div class="social-accounts">
                <button onClick={handleOpenGoogle} class="social-button google">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                </button>
                <button onClick={handleOpenApple} class="social-button apple">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                  </svg>
                </button>
                <button onClick={handleOpenTwitter} class="social-button twitter">
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="left-registration-side">
          <div className="left-registration-content">
            <div className="avatar-container">
              {avatar && <img src={avatar} alt="Avatar" className="avatar" />}
            </div>
            <input
              type="file"
              accept="image/*"
              id="avatarInput"
              style={{ display: 'none' }}
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatarInput" className="button">
              Выберите аватарку
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
