import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArtists } from '../redux/slices/ArtistData.slice';
import DataSkeleton from '../data/DataSkeleton';

function Artists() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.artistData.userData);
  const status = useSelector((state) => state.artistData.status);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    dispatch(fetchArtists());

    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="Artists-Main">
      <div className="artists-wrapper">
        <h1>Наши лучшие художники 👨‍🏭👨‍🏭👨‍🏭</h1>
        <div className="user-artist-content-wrapper">
          {showSkeleton && (
            <div className="Data-Skeleton-Main">
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <DataSkeleton />
              <div className="last-data-skeletons">
                <DataSkeleton />
                <DataSkeleton />
              </div>
            </div>
          )}
          {status === 'error' ? (
            <div className="Data-Error-Main">
              <h1>Произошла ошибка при получении данных</h1>
              <h2>⚠️⛔⛔⚠️</h2>
            </div>
          ) : (
            userData.map((obj, index) => (
              <div className="user-artist-content" key={obj.id}>
                <h3>{obj.name}</h3>
                <h4>{obj.email}</h4>
                <img src={obj.image} alt={`artist-image-${index}`} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
