import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import times from 'lodash/fp/times';
import noop from 'lodash/fp/noop';

import Icon from './Icon';
import * as category from '../category';
import * as entry from '../entry';

const CounterPresentational = ({
  category,
  entry,
  onCellClick,
  onIconClick,
}) => (
  <div
    role="button"
    tabIndex={0}
    style={{ height: '100%' }}
    onClick={e => { e.preventDefault(); onCellClick({ entry, category }); }}
  >
    {entry.value > 0}
    { entry.value != undefined && entry.value > 0 &&
    times(i =>
      (<Icon
        key={i}
        value={category.icon}
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onIconClick({ entry, category });
        }}
      />), entry.value) }
  </div>
);

CounterPresentational.propTypes = {
  category: category.propType.isRequired,
  entry: entry.propType,
  onAddValue: PropTypes.func,
};

CounterPresentational.defaultProps = {
  entry: undefined,
  onAddValue: noop,
};

const CounterContainer = connect(
  (state, { category, entry }) =>
    ({ category, entry }),
  dispatch => ({
    onCellClick: (...args) =>
      dispatch(entry.actions.addValue(...args)),
    onIconClick: (...args) =>
      dispatch(entry.actions.subtractValue(...args)),
  }),

)(CounterPresentational);

export default CounterContainer;
