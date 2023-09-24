import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { minus } from '.././redux/slices/CounterCart.slice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeItem } from '.././redux/slices/HandleCart.slice';
import { setIsChecked } from '.././redux/slices/IsChecked.slice';

function CartCard({ title, year, image, price, id }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.isChecked.isChecked[id]);

  const handleDelete = () => {
    const userConfirmed = window.confirm('Вы действительно хотите удалить этот товар с корзины?');

    if (userConfirmed) {
      dispatch(setIsChecked({ id, value: false }));
      dispatch(removeItem(id));
      enqueueSnackbar('Товар удален из корзины!', { variant: 'error' });
      dispatch(minus());
    }
  };

  return (
    <div>
      <Card sx={{ width: 206 }}>
        <div>
          <Typography level="title-lg">{title}</Typography>
          <Typography level="body-sm">{year}</Typography>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          <img src={image} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${price}
            </Typography>
          </div>
          <Button
            onClick={handleDelete}
            variant="solid"
            size="md"
            color="primary"
            aria-label="Удалить товар"
            sx={{
              ml: 'auto',
              alignSelf: 'center',
              fontWeight: 600,
              backgroundColor: 'rgb(75,171,255)',
            }}>
            Удалить <DeleteForeverIcon />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default CartCard;
