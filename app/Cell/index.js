import Counter from './Counter';
import Number from './Number';
import * as entry from '../entry';

const CellPresentational = ({ ...props }) => {
  switch(props.category.type) {
    case 'counter':
      return <Counter {...props} />;
    case 'number':
      return <Number {...props} />;
    default:
      return false;
  }
}

CellPresentational.propTypes = {
  entry: entry.propType,
};

CellPresentational.defaultProps = {
  entry: undefined,
};


export default CellPresentational;
