import React from 'react';
import TablePage from '../../components/table';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Customers</title>
        </Helmet>
        <TablePage
          addItem={this.props.addItem}
          editItem={this.props.editItem}
          deleteItem={this.props.deleteItem}
          title={'Customers'}
          data={this.props.data}
          customers
        />
      </div>
      
    )
  }
};

const mapStateToProps = state => {
  return ({
    Customers: state.get('customersReducer'),
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
)(Customers);
