import times from 'lodash/fp/times';

import Icon from './Icon';
import * as category from '../category';
import * as entry from '../entry';

// eslint-disable-next-line no-shadow
const CounterPresentational = ({ category, entry }) => (
  <div>
    { entry && times(i => <Icon key={i} value={category.icon} />, entry.value) }
  </div>
);

CounterPresentational.propTypes = {
  category: category.propType.isRequired,
  entry: entry.propType,
};

CounterPresentational.defaultProps = {
  entry: undefined,
};

export default CounterPresentational;
