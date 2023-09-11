import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="Text-Skeleton">
    <ContentLoader
      speed={2}
      width={520}
      height={500}
      viewBox="0 0 520 500"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
      <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
      <rect x="9" y="165" rx="3" ry="3" width="506" height="76" />
      <rect x="7" y="280" rx="3" ry="3" width="506" height="76" />
      <rect x="9" y="60" rx="3" ry="3" width="506" height="76" />
    </ContentLoader>
  </div>
);

export default MyLoader;
