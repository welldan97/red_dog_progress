import Counter from './Counter';
import * as entry from '../entry';

const CellPresentational = ({ ...props }) => {
  return <Counter {...props} />;
};

CellPresentational.propTypes = {
  entry: entry.propType,
};

CellPresentational.defaultProps = {
  entry: undefined,
};


export default CellPresentational;
