import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const stockImg =
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1f5dac30344325.561e92024f623.png';

const Gallery = ({ images }) => (
  <section>
    {images.map((image, i) => (
      <div className="media" key={i}>
        <img src={stockImg} alt="" />
      </div>
    ))}
  </section>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Gallery.defaultProps = {
  images: [1, 2, 3, 4, 5, 6].map(num => stockImg),
};

export default Gallery;
