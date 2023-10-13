import React, { useState, useEffect } from 'react';
import './favorite.scss';
import ImageCard from '../../ImageCard';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteCard from './FavoriteCard';

function Favorite() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const favoriteItems = useSelector((state) => state.favoriteItems.favoriteItems);

  useEffect(() => {
    const jsonFavorite = JSON.stringify(favoriteItems);
    localStorage.setItem('favoriteItems', jsonFavorite);
    console.log(jsonFavorite);
  }, [favoriteItems]);

  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const filterFavoriteInput = () => {
    return favoriteItems.filter((obj) => {
      return obj.title.toLowerCase().includes(value.toLowerCase());
    });
  };

  const filterFavoriteItems = filterFavoriteInput();

  return (
    <div className="Favorite-Main">
      <div className="favorite-wrapper">
        {favoriteItems.length === 0 ? (
          <div className="Empty-Favorite">
            <h1>Ваши закладки пустые</h1>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/empty-box-3455002-2887429.png?f=webp"
              alt=""
            />
          </div>
        ) : (
          <div>
            <h1>Закладки</h1>
            <div className="input-container">
              <input
                value={value}
                onChange={onChangeValue}
                placeholder="поиск товара"
                type="text"
              />
              <button className="button">Найти</button>
            </div>

            <div className="Favorite-Card-Render-Place">
              {filterFavoriteItems.length === 0 ? (
                <div className="No-Results-Message">
                  <h2>Ничего не найдено по вашему запросу</h2>
                  <h1 className="error-text">404</h1>

                  <div data-js="astro" className="astronaut">
                    <div className="head"></div>
                    <div className="arm arm-left"></div>
                    <div className="arm arm-right"></div>
                    <div className="body">
                      <div className="panel"></div>
                    </div>
                    <div className="leg leg-left"></div>
                    <div className="leg leg-right"></div>
                    <div className="schoolbag"></div>
                  </div>
                </div>
              ) : (
                filterFavoriteItems.map((obj) => <FavoriteCard {...obj} />)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
