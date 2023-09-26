import React from 'react';
import { Link } from 'react-router-dom';

function SaitInfo() {
  return (
    <div className="Sait-Info-Main">
      <div className="sait-info-wrapper">
        <div className="text-block">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 class="animate-charcter">
                Лучший интернет-магазин для картинок заказывайте здесь.
              </h1>
            </div>
          </div>
          <p>
            "Добро пожаловать в удивительный мир искусства и креативности! Наш магазин картинок
            предлагает вам уникальную возможность погрузиться в вихрь красок, форм и эмоций. У нас
            вы найдете широкий ассортимент произведений разных художников, от абстракции до
            реализма.
          </p>
          <Link to="/">
            <button class="button">Перейти</button>
          </Link>
          {/* <h1>Лучший интернет-магазин для картинок заказывайте здесь.</h1> */}
        </div>
        <img
          src="https://shkolyar.org.ua/Media/uploads/2022/06/21/hudozhnik-1.jpg"
          alt="image-of-artist"
        />
        <img
          className="mobile-image"
          src="https://cdn-icons-png.flaticon.com/128/3749/3749691.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SaitInfo;
