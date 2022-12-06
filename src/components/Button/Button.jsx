// import PropTypes from 'prop-types';
import { LoadMoreButton } from './Button.styled';

let pageNumber = 1;

const Button = props => {
  const handleClick = evt => {
    pageNumber += 1;
    props.onClick(pageNumber);
  };

  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load More
    </LoadMoreButton>
  );
};

export default Button;
