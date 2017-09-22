import PropTypes from 'prop-types';

export const type = PropTypes.shape({
  id: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  value: PropTypes.number,
});
