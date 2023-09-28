import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="button-skeleton">
    <ContentLoader
      speed={2}
      width={301}
      height={100}
      viewBox="0 0 301 100"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
      <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
      <rect x="7" y="12" rx="10" ry="10" width="287" height="78" />
    </ContentLoader>
  </div>
);

export default MyLoader;
