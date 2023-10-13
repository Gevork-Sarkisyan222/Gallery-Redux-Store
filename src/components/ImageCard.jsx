import React, { useContext, useEffect, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ImageInfo from './ImageInfo';
import { plus, minus } from './redux/slices/CounterCart.slice';
import { addItem, removeItem } from './redux/slices/HandleCart.slice';
import { useSelector, useDispatch } from 'react-redux';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {
  setIsChecked,
  initializeStateFromLocalStorage,
} from '../components/redux/slices/IsChecked.slice';
import { useMediaQuery } from '@mui/material';
import { setOpenInfo } from './redux/slices/OpenImageInfo.slice';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteCheckedIcon from '@mui/icons-material/Favorite';
import { addFavoriteItems, removeFavoriteItems } from './redux/slices/Favorite.slice';

export default function ImageCard({ title, year, image, price, info, id }) {
  const dispatch = useDispatch();
  const [isCheckedFavorite, setIsCheckedFavorite] = useState(() => {
    const storedValue = localStorage.getItem(`favoriteChecked-${id}`);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const isChecked = useSelector((state) => state.isChecked.isChecked[id]);
  const openInfo = useSelector((state) => state.openInfoCard.openInfo[id]);
  const { enqueueSnackbar } = useSnackbar();

  const isSmallScreen = useMediaQuery('(max-width:550px)');
  const cardWidth = isSmallScreen ? 190 : 270;

  useEffect(() => {
    const favoriteChecked = JSON.stringify(isCheckedFavorite);
    localStorage.setItem(`favoriteChecked-${id}`, favoriteChecked);
    console.log(favoriteChecked);
  }, [isCheckedFavorite]);

  useEffect(() => {
    dispatch(initializeStateFromLocalStorage());
  }, [dispatch]);

  const handleChecked = () => {
    // setIsChecked(true);
    dispatch(setIsChecked({ id, value: true }));
    dispatch(plus());
    const items = {
      title,
      year,
      image,
      price,
      id,
      // setIsCheckedFalse,
    };
    dispatch(addItem(items));
    enqueueSnackbar('Товар добавлен в корзину!', { variant: 'success' });
    localStorage.setItem(`favoriteChecked-${id}`, JSON.stringify(true));
  };

  const handleDelete = () => {
    dispatch(minus());

    dispatch(setIsChecked({ id, value: false }));
    dispatch(removeItem(id));
    enqueueSnackbar('Товар удален из корзины!', { variant: 'error' });
    localStorage.setItem(`favoriteChecked-${id}`, JSON.stringify(false));
  };

  const handleMakeAddFavoriteIcon = (obj) => {
    const fromFavoriteItems = {
      title,
      year,
      image,
      price,
      id,
    };
    setIsCheckedFavorite(true);
    dispatch(addFavoriteItems(fromFavoriteItems));
  };

  const handleRemoveFavoriteIcon = () => {
    setIsCheckedFavorite(false);
    dispatch(removeFavoriteItems(id));
  };

  return (
    <div>
      <Card variant="outlined" sx={{ width: cardWidth }}>
        <div>
          {/* <Button
            variant="outlined"
            size="small"
            sx={{ marginLeft: '230px', color: 'red', borderColor: 'red' }}>
            {isCheckedFavorite ? (
              <FavoriteCheckedIcon onClick={handleRemoveFavoriteIcon} />
            ) : (
              <FavoriteIcon onClick={handleMakeAddFavoriteIcon} />
            )}
          </Button> */}
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-sm">{year}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img onClick={() => dispatch(setOpenInfo({ id }))} src={image} alt="" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Цена:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${price}
            </Typography>
          </div>
          {isChecked ? (
            <Button
              onClick={handleDelete}
              variant="solid"
              size="md"
              aria-label="Удалить из корзины"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, backgroundColor: '#00CC00' }}>
              <CheckIcon />
            </Button>
          ) : (
            <Button
              onClick={handleChecked}
              variant="solid"
              size="md"
              aria-label="Добавить в корзину"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, backgroundColor: '#4BABFF' }}>
              <AddIcon />
            </Button>
          )}
        </CardContent>
      </Card>
      {openInfo && (
        <ImageInfo title={title} image={image} price={price} year={year} info={info} id={id} />
      )}
    </div>
  );
}

export function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <ImageCard
        title="Название товара"
        year="2023"
        image="ссылка на изображение"
        price="100"
        info="Дополнительная информация о товаре"
      />
    </SnackbarProvider>
  );
}
