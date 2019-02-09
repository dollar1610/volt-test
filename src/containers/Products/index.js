import React from 'react';
import TablePage from '../../components/table';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <TablePage
          addItem={this.props.addItem}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
          title={'Products'}
          data={this.props.data}
          products
        />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return ({
    Products: state.get('productsReducer'),
  })
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);