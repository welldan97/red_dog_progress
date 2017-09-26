import Counter from './Counter';
import * as entry from '../entry';

const Presentational = ({ ...props }) => {
  if (!props.entry) {
    return false;
  }
  return <Counter {...props} />;
};

Presentational.propTypes = {
  entry: entry.propType,
};

Presentational.defaultProps = {
  entry: undefined,
};


export default Presentational;
