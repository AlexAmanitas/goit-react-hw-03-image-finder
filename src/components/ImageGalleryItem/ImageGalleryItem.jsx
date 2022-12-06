// import PropTypes from 'prop-types';

import '../ImageGalleryItem/ImageGalleryItem.css';

const ImageGalleryItem = props => {
  const { largeImageURL, previewURL, tags } = props.picture;

  const handleImgClick = evt => {
    console.log('object', largeImageURL);
    props.onClick(largeImageURL);
  };

  return (
    <li className="photo-card">
      <div className="img-wrap">
        <img
          className="image"
          src={previewURL}
          alt={tags}
          onClick={handleImgClick}
        />
      </div>
    </li>
  );
};

export default ImageGalleryItem;

// ({picture: { largeImageURL, previewURL, tags } })
