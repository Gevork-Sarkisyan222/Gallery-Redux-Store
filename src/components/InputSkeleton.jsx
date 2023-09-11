import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="Input-Skeleton">
    <ContentLoader
      speed={2}
      width={550}
      height={300}
      viewBox="0 0 550 300"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="233" y="221" rx="0" ry="0" width="1" height="1" />
      <rect x="12" y="104" rx="4" ry="4" width="517" height="54" />
    </ContentLoader>
  </div>
);

export default MyLoader;
