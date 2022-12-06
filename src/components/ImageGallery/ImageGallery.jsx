// import PropTypes from 'prop-types';
import '../ImageGallery/ImageGallery.css';

const ImageGallery = ({ children }) => {
  return <ul className="gallery">{children}</ul>;
};

export default ImageGallery;
