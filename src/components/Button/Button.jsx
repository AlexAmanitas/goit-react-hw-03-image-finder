// import PropTypes from 'prop-types';
import { LoadMoreButton } from 'components/Button';

let pageNumber = 1;

const Button = props => {
  const handleClick = evt => {
    pageNumber += 1;
    props.onClick(pageNumber);
  };

  return (
    <button type="button" onClick={handleClick}>
      Load More
    </button>
  );
};

export default Button;
