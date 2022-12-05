// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li class="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
