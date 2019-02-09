import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  addItem,
  loadData,
  getCurrentLocation,
  editItem,
  deleteItem,
} from './action';

const ProductsAndCustomers = Component => (
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.add = this.add.bind(this);
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this);
    }
    componentDidMount() {
      this.props.dispatch(getCurrentLocation(this.props.location.pathname))
      this.props.dispatch(loadData());
    }
    add(data) {
      this.props.dispatch(addItem(data));
    }
    delete(data) {
      this.props.dispatch(deleteItem(data));
    }
    edit(data) {
      this.props.dispatch(editItem(data));
    }
    render() {
      return (
        <Component
          data={this.props.ProductsAndCustomers.get('data')}
          addItem={this.add}
          editItem={this.edit}
          deleteItem={this.delete}
        />
      );
    }
  }
)

const mapStateToProps = state => {
  return {
    ProductsAndCustomers: state.get('productsAndCustomersReducer')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
}

const composeProductsAndCustomers = compose(
  connect(mapStateToProps, mapDispatchToProps),
  ProductsAndCustomers
);

export default composeProductsAndCustomers;
