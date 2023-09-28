import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={240}
    viewBox="0 0 250 240"
    backgroundColor="#d6d6d6"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="184" y="158" rx="0" ry="0" width="3" height="2" />
    <rect x="177" y="148" rx="0" ry="0" width="1" height="1" />
    <rect x="7" y="5" rx="7" ry="7" width="212" height="233" />
  </ContentLoader>
);

export default MyLoader;
