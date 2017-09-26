import times from 'lodash/fp/times';
import * as category from '../category';
import * as entry from '../entry';

// eslint-disable-next-line no-shadow
const Presentational = ({ category, entry }) => (<div>{
  times(i => <span key={i}>{category.icon}</span>, entry.value)
}</div>);

Presentational.propTypes = {
  category: category.propType.isRequired,
  entry: entry.propType.isRequired,
};

export default Presentational;
