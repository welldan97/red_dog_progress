import React, { Component } from 'react';
import PropTypes from 'prop-types';

import noop from 'lodash/fp/noop';

import { Button } from 'reactstrap';

export default class Presentational extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingNewCategory: false,
      newCategoryValue: '',
    };
  }

  handleNewCategory = () => {
    this.setState(state => ({
      ...state,
      isAddingNewCategory: true,
    }));
  }

  handleCreateCategory = () => {
    this.props.onCreateCategory({
      name: this.state.newCategoryValue,
    });
    this.setState(state => ({
      ...state,
      isAddingNewCategory: false,
      newCategoryValue: '',
    }));
  }

  handleChange = event => {
    if (event.persist) {
      event.persist();
    }
    this.setState(state => ({
      ...state,
      newCategoryValue: event.target.value,
    }));
  }

  render() {
    const { isAddingNewCategory, newCategoryValue } = this.state;
    if (isAddingNewCategory) {
      return (
        <div>
          <input
            type="text"
            value={newCategoryValue}
            onChange={this.handleChange}
          />
          <Button
            color="primary"
            className="ml-2"
            onClick={this.handleCreateCategory}
          >
            Create
          </Button>
        </div>
      );
    }
    return (
      <Button color="success" block onClick={this.handleNewCategory}>
        Add another category...
      </Button>
    );
  }
}

Presentational.propTypes = {
  onCreateCategory: PropTypes.func,
};

Presentational.defaultProps = {
  onCreateCategory: noop,
};
