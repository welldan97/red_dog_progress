import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';

const IconPresentational = ({ value, onClick }) => (
  <a style={{ fontSize: '32px' }} href="" onClick={onClick}>
    {value}
  </a>
);

IconPresentational.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

IconPresentational.defaultProps = {
  onClick: noop,
};


export default IconPresentational;
