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

export default function ImageCard({ title, year, image, price, info, id, onPlus, onDelete }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // const [isChecked, setIsChecked] = useState(() => {
  //   const storedValue = localStorage.getItem(`isChecked-${id}`);
  //   return storedValue !== null ? JSON.parse(storedValue) : false;
  // });
  const isChecked = useSelector((state) => state.isChecked.isChecked[id]);
  const { enqueueSnackbar } = useSnackbar();

  // React.useEffect(() => {
  //   const checkedJson = JSON.stringify(isChecked);
  //   console.log(checkedJson);
  //   localStorage.setItem(`isChecked-${id}`, checkedJson);
  // }, [isChecked, id]);

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
  };

  console.log(isChecked);

  const handleDelete = () => {
    dispatch(minus());

    dispatch(setIsChecked({ id, value: false }));
    // setIsChecked(false);
    dispatch(removeItem(id));
    // onDelete();
    enqueueSnackbar('Товар удален из корзины!', { variant: 'error' });
  };

  return (
    <div>
      <Card variant="outlined" sx={{ width: 270 }}>
        <div>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-sm">{year}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img onClick={() => setOpen(true)} src={image} alt="" />
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
      {open && <ImageInfo title={title} image={image} price={price} year={year} info={info} />}
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
