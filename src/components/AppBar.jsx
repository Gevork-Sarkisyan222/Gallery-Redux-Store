import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material-next/Badge';
import Cart from '../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { setTrue, setFalse } from './redux/slices/OpenCart.slice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import { setChangeAvatar, setDeleteAvatar } from './redux/slices/Avatar.slice';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

// actions
import { setNameValue } from './redux/slices/inputs/nameValue.slice';
import { setSurnameValue } from './redux/slices/inputs/surnameValue.slice';
import { setEmailValue } from './redux/slices/inputs/emailValue.slice';

export default function ButtonAppBar() {
  const count = useSelector((state) => state.counterCart.count);
  const avatarState = useSelector((state) => state.avatar.avatar);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccautOut = () => {
    const message = window.confirm('Вы действительно хотите выйти с аккаунта?');

    if (message) {
      dispatch(setNameValue(''));
      dispatch(setSurnameValue(''));
      dispatch(setEmailValue(''));
      localStorage.removeItem('avatar');
      localStorage.removeItem('nameValue');
      localStorage.removeItem('surnameValue');
      localStorage.removeItem('emailValue');
      localStorage.removeItem('valueDescriptionProfile');
      navigate('/Login');
      dispatch(setDeleteAvatar());
    }
  };

  const handleWentFavorite = () => {
    navigate('/Favorite/Items');
  };

  const handleOpenProfile = () => {
    navigate('/Accaunt/Profile');
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) {
      dispatch(setChangeAvatar(storedAvatar));
    }
  }, [dispatch]);

  React.useEffect(() => {
    const countJson = JSON.stringify(count);
    localStorage.setItem('count', countJson);
  }, [count]);

  const handleMakeOpenCart = () => {
    dispatch(setTrue());

    document.body.style.overflow = 'hidden';
  };

  const isSmallScreen = useMediaQuery('(max-width:400px)');
  const isSmallScreen450 = useMediaQuery('(max-width:500px)');
  const fontWeight = isSmallScreen ? 1000 : 'inherit';
  const fontWeight450 = isSmallScreen450 ? 700 : 'inherit';
  const fontSize = isSmallScreen ? '14px' : 'inherit';
  const fontSize450 = isSmallScreen450 ? '20px' : 'inherit';
  const fontSizes = isSmallScreen ? fontSize : isSmallScreen450 ? fontSize450 : 'inherit';
  const fontWeights = isSmallScreen ? fontWeight : isSmallScreen450 ? fontWeight450 : 'inherit';

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
            sx={{ flexGrow: 1, fontWeight: fontWeights, fontSize: fontSizes }}>
            Магазин Галереи-<span style={{ color: 'yellow' }}>топ картинки здесь</span>
          </Typography>

          {/* {!(
            location.pathname === '/Login' ||
            location.pathname === '/Write/Phone-Number' ||
            location.pathname === '/Accaunt/Profile' ||
            location.pathname === '/Registration'
          ) &&
            !isSmallScreen450 && (
              <Button
                onClick={handleWentFavorite}
                sx={{ position: 'relative', right: '36px' }}
                color="inherit">
                <FavoriteIcon />
              </Button>
            )} */}

          {!(
            location.pathname === '/Login' ||
            location.pathname === '/Write/Phone-Number' ||
            location.pathname === '/Accaunt/Profile' ||
            location.pathname === '/Registration'
          ) &&
            !isSmallScreen450 && (
              <Button
                sx={{ position: 'relative', right: '50px' }}
                color="inherit"
                onClick={handleMakeOpenCart}>
                <ShoppingCartIcon />
                <Badge badgeContent={count} color="success" />
              </Button>
            )}
          {avatarState && (
            <Button
              onClick={handleMenu}
              sx={{ position: 'relative', right: '10px' }}
              color="inherit">
              <Avatar alt="Remy Sharp" src={avatarState} />
            </Button>
          )}

          {auth && (
            <Menu
              sx={{ zIndex: '100000' }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              {location.pathname === '/Login' ||
              location.pathname === '/Write/Phone-Number' ||
              location.pathname === '/Registration' ? (
                ''
              ) : (
                <div>
                  <MenuItem onClickCapture={handleOpenProfile} onClick={handleClose}>
                    Профиль
                  </MenuItem>
                  <MenuItem onClickCapture={handleAccautOut} onClick={handleClose}>
                    Выйти с аккаунта
                  </MenuItem>
                </div>
              )}
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
