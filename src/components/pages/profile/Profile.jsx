import React, { useState, useEffect, useRef } from 'react';
import './profile.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setChangeAvatar } from '../../redux/slices/Avatar.slice';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { setDeleteAvatar } from '../../redux/slices/Avatar.slice';
import { setNameValue } from '../../redux/slices/inputs/nameValue.slice';
import { setSurnameValue } from '../../redux/slices/inputs/surnameValue.slice';
import { setEmailValue } from '../../redux/slices/inputs/emailValue.slice';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const avatar = useSelector((state) => state.avatar.avatar);
  const nameValue = useSelector((state) => state.nameValue.nameValue);
  const surnameValue = useSelector((state) => state.surnameValue.surnameValue);
  const emailValue = useSelector((state) => state.emailValue.emailValue);
  const [pencil, setPencil] = useState(false);
  const [openDescription, setOpenDescription] = useState(false);
  const [changeText, setChangeText] = useState(false);
  const [changeInputOpen, setChangeInputOpen] = useState(false);
  const [valueDescription, setValueDescription] = useState(() => {
    const desJson = localStorage.getItem('valueDescriptionProfile');
    return desJson ? JSON.parse(desJson) : '';
  });
  const [randomGuestNumber] = useState(() => Math.floor(Math.random() * 100000));
  const fileInputRef = useRef(null);

  useEffect(() => {
    const desJson = JSON.stringify(valueDescription);
    localStorage.setItem('valueDescriptionProfile', desJson);
  }, [valueDescription]);

  useEffect(() => {
    const randomGuestNumber = Math.floor(Math.random() * 100000);
  }, []);

  React.useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    const savedNameValue = localStorage.getItem('nameValue');
    const savedSurnameValue = localStorage.getItem('surnameValue');
    const savedEmailValue = localStorage.getItem('emailValue');

    if (savedAvatar) dispatch(setChangeAvatar(savedAvatar));
    if (savedNameValue) dispatch(setNameValue(savedNameValue));
    if (savedSurnameValue) dispatch(setSurnameValue(savedSurnameValue));
    if (savedEmailValue) dispatch(setEmailValue(savedEmailValue));
  }, [dispatch]);

  const handleNameChange = (e) => {
    dispatch(setNameValue(e.target.value));
    localStorage.setItem('nameValue', e.target.value);
  };
  const handleSurnameChange = (e) => {
    dispatch(setSurnameValue(e.target.value));
    localStorage.setItem('surnameValue', e.target.value);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

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

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newAvatarURL = e.target.result;
        dispatch(setChangeAvatar(newAvatarURL));
        localStorage.setItem('avatar', newAvatarURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const onChangeDescription = (event) => {
    setValueDescription(event.target.value);
  };

  const nameDisplayValue = nameValue || `Guest`;
  const surnameDisplayValue = surnameValue || `${randomGuestNumber}`;
  const emailDisplayValue = emailValue || ` электронная почта не указана`;

  const onClickChangeAndPencil = () => {
    setPencil(!pencil);
    setChangeText(!changeText);
    setChangeInputOpen(!changeInputOpen);
    setOpenDescription(!openDescription);
  };

  const isSmallScreen = useMediaQuery('(max-width:400px)');
  const isSmallScreen450 = useMediaQuery('(max-width:500px)');
  const allContentWidth = isSmallScreen + isSmallScreen450 ? '245px' : '100%';
  const contentWidth = isSmallScreen + isSmallScreen450 ? 278 : 684;
  const contentMoveLeft = isSmallScreen + isSmallScreen450 ? 63 : 109;
  const contentMoveTop = isSmallScreen + isSmallScreen450 ? 28 : 89;
  const imageWidth = isSmallScreen + isSmallScreen450 ? '188px' : '100%';
  const imageLeft = isSmallScreen + isSmallScreen450 && '30px';

  // margin-left: 30px

  return (
    <div className="Profile-Main">
      <div className="profile-wrapper">
        <Box
          sx={{
            width: contentWidth,
            position: 'absolute',
            left: contentMoveLeft,
            top: contentMoveTop,
            overflow: { xs: 'auto', sm: 'initial' },
          }}>
          {pencil && (
            <div>
              <input
                type="file"
                accept="image/*"
                id="avatarInput"
                onChange={handleAvatarChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
              <label htmlFor="avatarInput" className="button">
                <button
                  onClick={handleButtonClick}
                  style={{ position: 'absolute', top: '12px', zIndex: '10', left: '5px' }}>
                  📷
                </button>
              </label>
            </div>
          )}
          <Card
            orientation="horizontal"
            sx={{
              width: allContentWidth,
              flexWrap: 'wrap',
              [`& > *`]: {
                '--stack-point': '500px',
                minWidth:
                  'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
              },
              overflow: 'auto',
              resize: 'horizontal',
            }}>
            <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 221 }}>
              {/* <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              /> */}
              {avatar && (
                <img
                  style={{ borderRadius: '200px', width: imageWidth, marginLeft: imageLeft }}
                  src={avatar}
                  alt="Avatar"
                  className="profile-avatar"
                />
              )}
            </AspectRatio>
            <CardContent>
              <Typography fontSize="xl" fontWeight="lg">
                {nameDisplayValue} {pencil && <button style={{ cursor: 'pointer' }}>✏️</button>}
                {changeInputOpen && (
                  <input style={{ marginLeft: '6px' }} type="text" onChange={handleNameChange} />
                )}
              </Typography>
              <Typography fontSize="xl" fontWeight="lg">
                {surnameDisplayValue} {pencil && <button style={{ cursor: 'pointer' }}>✏️</button>}
                {changeInputOpen && (
                  <input style={{ marginLeft: '6px' }} type="text" onChange={handleSurnameChange} />
                )}
              </Typography>
              <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                {emailDisplayValue}
              </Typography>
              <Sheet
                sx={{
                  bgcolor: 'background.level1',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 },
                }}>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    {pencil && 'Добавьте'} описание о вашем профиле {pencil && <button>✏️</button>}
                  </Typography>

                  {openDescription ? (
                    <input
                      onChange={onChangeDescription}
                      value={valueDescription}
                      className="input-description"
                      type="text"
                      maxLength="50"
                      placeholder="Напиши описание"
                    />
                  ) : (
                    <Typography>
                      {valueDescription ? `${valueDescription}` : 'У вас нету описания'}
                    </Typography>
                  )}
                </div>
              </Sheet>
              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button onClick={handleAccautOut} variant="outlined" color="neutral">
                  Выйти с аккаунта
                </Button>
                <Button
                  sx={{ width: '10px' }}
                  onClick={onClickChangeAndPencil}
                  variant="solid"
                  color="primary">
                  {changeText ? 'Сохранить изменение' : ' Редактировать профиль ✏️'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* <form className="Name-Surname-Form">
          <h1>Gevork</h1>
          <h1>Sarkisyan</h1>
        </form> */}
      </div>
    </div>
  );
}

export default Profile;
