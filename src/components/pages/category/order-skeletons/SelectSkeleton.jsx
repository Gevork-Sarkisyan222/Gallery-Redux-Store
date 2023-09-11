import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="Select-Skeleton">
    <ContentLoader
      speed={2}
      width={471}
      height={160}
      viewBox="0 0 471 160"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
      <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
      <rect x="4" y="2" rx="20" ry="20" width="432" height="155" />
    </ContentLoader>
  </div>
);

export default MyLoader;
