import React, { useContext } from 'react';
import CartCard from './CartCard';
import { setFalse } from '../redux/slices/OpenCart.slice';
import { useDispatch, useSelector } from 'react-redux';
import { makeOpenSuccsess } from '../redux/slices/OpenSuccsess.slice';
import Button from '@mui/material/Button';
import Succsess from './Succsess';
import { clearItem } from '../redux/slices/HandleCart.slice';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import { setIsCheckedClearAll } from '../redux/slices/IsChecked.slice';
import { deleteCounter } from '../redux/slices/CounterCart.slice';

function Cart() {
  const dispatch = useDispatch();
  const openSuccsess = useSelector((state) => state.openSuccsess.isOpenSuccsess);
  const cartItems = useSelector((state) => state.cartItems.items);
  const [openIcon, setOpenIcon] = React.useState(false);

  React.useEffect(() => {
    const json = JSON.stringify(cartItems);
    localStorage.setItem('cart', json);
    console.log(json);
  }, [cartItems]);

  const handleBackClick = () => {
    dispatch(setFalse());

    document.body.style.overflow = 'auto';
  };

  const handleBuyAllItems = () => {
    setTimeout(() => {
      dispatch(makeOpenSuccsess());
      dispatch(setIsCheckedClearAll());
      dispatch(deleteCounter());
      dispatch(clearItem());
    }, 1200);
  };

  const handleClearAllItems = () => {
    const clearIt = window.confirm('Вы действительно хотите очистить корзину?');

    if (clearIt) {
      dispatch(clearItem());
      dispatch(setIsCheckedClearAll());
      dispatch(deleteCounter());
    }
  };

  return (
    <div className="Cart-Main">
      <div className="cart-wrapper">
        <img
          onClick={handleBackClick}
          className="back-cart-icon"
          src="https://cdn-icons-png.flaticon.com/512/2099/2099190.png"
        />
        {openIcon && (
          <a href="/">
            <img
              className="back-cart-icon-another"
              src="https://cdn-icons-png.flaticon.com/512/2099/2099190.png"
            />
          </a>
        )}
        <h1>Корзина картинок</h1>
        <FolderDeleteIcon
          onClick={handleClearAllItems}
          sx={{
            position: 'absolute',
            top: '18px',
            left: '374px',
            color: 'black',
            fontSize: '29px',
            cursor: 'pointer',
          }}
        />
        {cartItems.length === 0 ? (
          <div className="Empty-Cart">
            <h1>Ваша корзина пустая</h1>
            <p>Добавьте хотя бы парочку товаров</p>
            <img src="https://img.freepik.com/premium-vector/vector-illustration-cartoon-box_134830-81.jpg" />
          </div>
        ) : (
          <>
            <div className="cart-cards-place-border">
              <div className="cart-cards-render-place">
                {cartItems.map((obj) => (
                  <CartCard key={obj.id} {...obj} />
                ))}
              </div>
            </div>
            <Button
              className="buy-media"
              onClickCapture={() => setOpenIcon(true)}
              onClick={handleBuyAllItems}
              sx={{
                position: 'absolute',
                top: '570px',
                height: '43px',
                width: '218px',
                borderRadius: '7px',
                backgroundColor: 'rgb(75,171,255)',
              }}
              variant="contained">
              Купить
            </Button>
          </>
        )}
      </div>
      {openSuccsess && <Succsess />}
    </div>
  );
}

export default Cart;
