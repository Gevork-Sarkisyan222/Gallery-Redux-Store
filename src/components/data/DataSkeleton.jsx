import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <div className="data-skeleton">
    <ContentLoader
      speed={2}
      width={250}
      height={350} // Adjusted height to 350px
      viewBox="0 0 250 350" // Adjusted viewBox
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="233" y="221" rx="0" ry="0" width="1" height="1" />
      <rect x="7" y="-2" rx="20" ry="20" width="227" height="350" />{' '}
      {/* Adjusted height to 350px */}
    </ContentLoader>
  </div>
);

export default MyLoader;
