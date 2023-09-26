import React, { useEffect, useState } from 'react';
import './category.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OrderSkeleton from './order-skeletons/OrderSkeleton';
import TextSkeleton from './order-skeletons/TextSkeleton';
import SelectSkeleton from './order-skeletons/SelectSkeleton';

function Order() {
  const [age, setAge] = React.useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age1, setAge1] = React.useState('');

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

  function handleFileUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const image = new Image();

        image.onload = function () {
          if (image.width <= 2000 && image.height <= 2000) {
            const imageContent = document.querySelector('.image-content-border');
            imageContent.style.backgroundImage = `url(${e.target.result})`;
          } else {
            alert('Файл должен быть не больше 2000px в ширину или высоту.');
            event.target.value = '';
          }
        };

        image.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function handleClickAlert() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files[0]) {
      alert('Выберите фотографию');
      return;
    }

    if (!age || !age1) {
      alert('Заполните все поля');
      return;
    }

    const randomPrice = Math.floor(Math.random() * (1200 - 500 + 1)) + 500;
    const money = window.confirm(`Сумма картины составляет ${randomPrice} долларов.`);

    if (money) {
      const userConfirmed = window.confirm(
        'Ожидайте вашу картинку в скором времени её доставят к вам',
      );

      if (userConfirmed) {
        window.location.reload();
      }
    }
  }

  return (
    <div className="Order-Main">
      <div className="order-wrapper">
        <h1>Заказать свою картину 📷🖼️</h1>
        <label htmlFor="fileInput" className="custom-file-input-label">
          Выберите ваше фото
        </label>
        <input
          type="file"
          id="fileInput"
          className="custom-file-input"
          accept="image/*"
          onChange={handleFileUpload}
        />
        {isLoading ? (
          <div className="Order-Skeletons">
            <OrderSkeleton />
            <TextSkeleton />
            <SelectSkeleton />
          </div>
        ) : (
          <>
            <div>
              <div className="image-content-border"></div>

              <article className="Checkbox-wrapper">
                <div className="first-checkbox-text">
                  <h2>Собственные технологии и производство</h2>
                  <p>Мы сами производим краски по собственным технологиям</p>
                </div>
                <div className="checkbox">
                  <span className="icon-check"></span>
                </div>
                <div className="second-checkbox-text">
                  <h2>Качественное изготовление и доставка картин</h2>
                  <p>Производства и доставки по адресу набора по фото на заказ.</p>
                </div>
                <div className="checkbox">
                  <span className="icon-check"></span>
                </div>
                <div className="third-checkbox-text">
                  <h2>Любые особенности фотографий</h2>
                  <p>Наши художники выполнят, учитывая все и особенности рисунка.</p>
                </div>
                <div className="checkbox">
                  <span className="icon-check"></span>
                </div>
              </article>
            </div>
            <div className="Select-Border">
              <div className="Select-size">
                <Box sx={{ minWidth: 160 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Размер</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}>
                      <MenuItem value={10}>40x50</MenuItem>
                      <MenuItem value={20}>40x60</MenuItem>
                      <MenuItem value={30}>50x50</MenuItem>
                      <MenuItem value={40}>50x60</MenuItem>
                      <MenuItem value={50}>50x70</MenuItem>
                      <MenuItem value={60}>50x80</MenuItem>
                      <MenuItem value={70}>50x90</MenuItem>
                      <MenuItem value={80}>50x100</MenuItem>
                      <MenuItem value={90}>60x70</MenuItem>
                      <MenuItem value={100}>56x80</MenuItem>
                      <MenuItem value={110}>56x90</MenuItem>
                      <MenuItem value={120}>56x100</MenuItem>
                      <MenuItem value={130}>56x120</MenuItem>
                      <MenuItem value={140}>100x100</MenuItem>
                      <MenuItem value={150}>120x120</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className="Term-Border">
                  <Box sx={{ minWidth: 160 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Срок изготовления</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age1}
                        label="Age"
                        onChange={handleChange1}>
                        <MenuItem value={10}>10 часов</MenuItem>
                        <MenuItem value={20}>1 день</MenuItem>
                        <MenuItem value={30}>2 дня</MenuItem>
                        <MenuItem value={40}>5 дней</MenuItem>
                        <MenuItem value={50}>когда будет готово</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <Button
                onClick={handleClickAlert}
                sx={{
                  positon: 'absolute',
                  left: '83px',
                  top: '152px',
                  width: '301px',
                  height: '49px',
                  borderRadius: '10px',
                  zIndex: 11,
                  background: 'linear-gradient(0deg, #18cc00 0%, #5aff57 100%)',
                }}
                variant="contained">
                Заказать
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Order;
