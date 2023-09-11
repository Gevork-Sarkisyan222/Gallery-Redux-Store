import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ImageInfo({ title, image, year, price, info }) {
  return (
    <div className="Image-Info-Main">
      <a href="/">
        <img
          className="back-icon"
          src="data:image/png;base64,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"
        />
      </a>
      <Card
        className="media-Info-Main"
        variant="outlined"
        sx={{ position: 'fixed', width: 550, left: '149px', top: '149px' }}>
        <div>
          <Typography level="title-lg" sx={{ fontSize: '30px' }}>
            {title}
          </Typography>
          <Typography level="body-sm" sx={{ fontSize: '17px' }}>
            {year}
          </Typography>
        </div>
        <AspectRatio minHeight="300px" maxHeight="500px">
          <img src={image} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Цена:</Typography>
            <Typography fontSize="lg" fontWeight="lg" sx={{ fontSize: '23px' }}>
              ${price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}>
            читать информацию <ArrowRightAltIcon />
          </Button>
        </CardContent>
      </Card>

      <div className="Info-Main">
        <p>{info}</p>
      </div>
    </div>
  );
}

export default ImageInfo;
