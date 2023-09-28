import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import Badge from '@mui/material-next/Badge';
import Cart from '../components/Cart/Cart';
import { useDispatch } from 'react-redux';
import { setTrue, setFalse } from './redux/slices/OpenCart.slice';
import { Link } from 'react-router-dom';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useMediaQuery } from '@mui/material';

export default function ButtonAppBar() {
  const count = useSelector((state) => state.counterCart.count);

  React.useEffect(() => {
    const countJson = JSON.stringify(count);
    localStorage.setItem('count', countJson);
  }, [count]);

  const dispatch = useDispatch();

  const handleMakeOpenCart = () => {
    dispatch(setTrue());

    document.body.style.overflow = 'hidden';
  };

  const isSmallScreen = useMediaQuery('(max-width:500px)');
  const fontWeight = isSmallScreen ? 1000 : 'inherit';
  const fontSize = isSmallScreen ? '15px' : 'inherit';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ background: 'linear-gradient(90deg, #007FFF 0%, #11FF4A 100%)' }}>
        <Toolbar>
          <Link to="Gallery-Redux-Store">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img
                style={{ width: '40px' }}
                src="https://cdn-icons-png.flaticon.com/512/178/178390.png"
              />
            </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: fontWeight, fontSize: fontSize }}>
            Магазин Галереи-<span style={{ color: 'yellow' }}>топ картинки здесь</span>
          </Typography>
          <Button
            sx={{ position: 'relative', right: '50px' }}
            color="inherit"
            onClick={handleMakeOpenCart}>
            <ShoppingCartIcon />
            <Badge badgeContent={count} color="success" />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
