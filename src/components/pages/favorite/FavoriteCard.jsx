import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { removeFavoriteItems } from '../../redux/slices/Favorite.slice';
import { useDispatch } from 'react-redux';

export default function MultipleInteractionCard({ title, image, year, price, id }) {
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = () => {
    const deleteMessage = window.confirm('Вы действительно хотите удалить этот товар с корзины?');

    if (deleteMessage) {
      dispatch(removeFavoriteItems(id));
    }
  };

  return (
    <Card variant="outlined" sx={{ width: 280 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={image} loading="lazy" alt="" />
        </AspectRatio>
        <IconButton
          onClick={handleRemoveFromFavorite}
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: 0,
            transform: 'translateY(50%)',
          }}>
          <Favorite />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <Link href="#multiple-actions" overlay underline="none">
            {title}
          </Link>
        </Typography>
        <Typography level="body-sm">
          <Link href="#multiple-actions">{year}</Link>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft">
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs">${price}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs">1 hour ago</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
