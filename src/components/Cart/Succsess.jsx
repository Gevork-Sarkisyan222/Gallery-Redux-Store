import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { setFalse } from '../redux/slices/OpenCart.slice';
import { useDispatch } from 'react-redux';

function Succsess() {
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(setFalse());

    document.body.style.overflow = 'auto';
  }

  return (
    <div className="Succsess-Main">
      <h1>Спасибо за покупку</h1>
      <p>прекраснейших картин нашего магазина</p>
      <img src="https://cdn-icons-png.flaticon.com/512/2003/2003258.png" />
      <a href="/">
        <Button
          className="media-succsess-button"
          sx={{
            height: '50px',
            marginLeft: '-4px',
            width: '261px',
            top: '433px',
            borderRadius: '7px',
            backgroundColor: 'rgb(90,144,1)',
            '&:hover': {
              backgroundColor: 'rgb(107,174,1)',
            },
          }}
          variant="contained">
          <ArrowBackIcon />
          Назад
        </Button>
      </a>
    </div>
  );
}

export default Succsess;
