import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import StreetviewIcon from '@mui/icons-material/Streetview';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenAccaunt, setCloseAccaunt } from './redux/slices/openAccaunt.slice';

function Accaunt() {
  const openAccaunt = useSelector((state) => state.openAccaunt.openAccaunt);
  const dispatch = useDispatch();

  return (
    <div className="Accaunt-Main">
      <React.Fragment>
        <Button
          sx={{ position: 'fixed', top: '14px', right: '90px', zIndex: '1500' }}
          color="inherit">
          <StreetviewIcon onClick={() => dispatch(setOpenAccaunt())} sx={{ color: 'white' }} />
        </Button>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={openAccaunt}
          onClose={() => dispatch(setCloseAccaunt())}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}>
            {/* <ModalClose variant="plain" sx={{ m: 4 }} /> */}
            <Card
              data-resizable
              sx={{
                textAlign: 'center',
                alignItems: 'center',
                width: 343,
                overflow: 'auto',
                resize: 'horizontal',
                '--icon-size': '100px',
              }}>
              <CardOverflow
                sx={{ background: 'linear-gradient(0deg, #a0eb00 0%, #01a78a 100%)' }}
                variant="solid">
                <AspectRatio
                  variant="outlined"
                  color="warning"
                  ratio="1"
                  sx={{
                    m: 'auto',
                    transform: 'translateY(50%)',
                    borderRadius: '50%',
                    width: 'var(--icon-size)',
                    boxShadow: 'sm',
                    bgcolor: 'background.surface',
                    position: 'relative',
                  }}>
                  <div>
                    {/* <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} /> */}{' '}
                    <img src="https://cdn-icons-png.flaticon.com/512/178/178390.png" alt="icon" />
                  </div>
                </AspectRatio>
              </CardOverflow>
              <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                🖼️ Gallery Store 🖼️
              </Typography>
              <CardContent sx={{ maxWidth: '40ch' }}>
                Лучший магазин Галерея покупайте картинки здесь и только здесь
              </CardContent>
              <CardActions
                orientation="vertical"
                buttonFlex={1}
                sx={{
                  '--Button-radius': '40px',
                  width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                }}>
                <a
                  style={{ color: 'rgb(80,85,90)' }}
                  href="https://www.instagram.com/gallery_store_react/?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D"
                  target="_blank">
                  <Button variant="solid" color="warning">
                    Перейти
                  </Button>
                </a>
                <Button onClick={() => dispatch(setCloseAccaunt())} variant="plain" color="neutral">
                  Пропустить
                </Button>
              </CardActions>
            </Card>
          </Sheet>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default Accaunt;
