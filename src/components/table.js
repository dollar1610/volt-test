import React from 'react';
import { Table } from 'reactstrap';
import { Container } from 'reactstrap';
import Rows from './rows';
import Modals from '../containers/Modals/index';

const TablePage = (prop) => (
  <Container>
    <div>
      <h1>{prop.title}</h1>
      <Modals
        products={prop.products}
        customers={prop.customers}
        addItem={prop.addItem}
        title={'Create'}
      />
    </div>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>{prop.customers ? 'Address' : 'Price'}</th>
            {prop.customers && <th>Phone</th>}
        </tr>
      </thead>
      <Rows
        customers={prop.customers}
        products={prop.products}
        items={prop.data}
        deleteItem={prop.deleteItem}
        editItem={prop.editItem}
      />
    </Table>
  </Container>
)

export default TablePage;
