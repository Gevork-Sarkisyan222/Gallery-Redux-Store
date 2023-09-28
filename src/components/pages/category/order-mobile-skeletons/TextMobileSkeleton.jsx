import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="Text-Mobile-Skeleton">
    <ContentLoader
      speed={2}
      width={400}
      height={400}
      viewBox="0 0 400 400"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
      <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
      <rect x="1" y="17" rx="0" ry="0" width="400" height="93" />
      <rect x="0" y="148" rx="0" ry="0" width="400" height="93" />
      <rect x="-1" y="288" rx="0" ry="0" width="400" height="93" />
    </ContentLoader>
  </div>
);

export default MyLoader;
