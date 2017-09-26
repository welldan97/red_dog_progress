import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';

import * as category from '../category';
import * as entry from '../entry';

class NumberPresentational extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isEditting: 0,
    };
  }
  handleCellClick = () => {
    this.setState(state => ({
      ...state,
      value: this.props.entry.value || 0,
      isEditting: true,
    }));
  }

  handleChange = event => {
    if (event.persist) {
      event.persist();
    }
    this.setState(state => ({
      ...state,
      value: event.target.value,
    }));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      const { onChange } = this.props;
      onChange({
        ...this.props.entry,
        value: Number(this.state.value),
      });

      this.setState(state => ({
        ...state,
        isEditting: false,
      }));
    }
  }

  render() {
    const {
      category,
      entry,
    } = this.props;
    const value = entry.value || 0;
    return (
      <div
        role="button"
        tabIndex={0}
        style={{ height: '100%' }}
        onClick={this.handleCellClick}
        onKeyPress={this.handleKeyPress}

      >
        {
          this.state.isEditting &&
          <input value={this.state.value} onChange={this.handleChange} /> ||
          value
        }{category.units}
      </div>
    );
  }
}
NumberPresentational.propTypes = {
  category: category.propType.isRequired,
  entry: entry.propType,
  onAddValue: PropTypes.func,
};

NumberPresentational.defaultProps = {
  entry: undefined,
  onAddValue: noop,
};

const NumberContainer = connect(
  (state, { category, entry }) =>
    ({ category, entry }),
  dispatch => ({
    onChange: (...args) =>
      dispatch(entry.actions.createOrUpdateEntry(...args)),
  }),

)(NumberPresentational);

export default NumberContainer;
