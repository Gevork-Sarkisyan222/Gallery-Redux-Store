import React from 'react';
import ContentLoader from 'react-content-loader';
import MobileLoader from './MobileSkeletons';

const MyLoader = (props) => (
  <div className="Card-Skeletons">
    <ContentLoader
      speed={2}
      width={317}
      height={300}
      viewBox="0 0 317 300"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="0" y="9" rx="7" ry="7" width="296" height="268" />
    </ContentLoader>
  </div>
);

export default MyLoader;
