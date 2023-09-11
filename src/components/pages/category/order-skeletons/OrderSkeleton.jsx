import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="Order-Skeleton">
    <ContentLoader
      speed={2}
      width={600}
      height={600}
      viewBox="0 0 600 600"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
      <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
      <rect x="17" y="56" rx="7" ry="7" width="508" height="508" />
    </ContentLoader>
  </div>
);

export default MyLoader;
