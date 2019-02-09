import React from 'react';
import Modals from '../containers/Modals/index';

const Rows = (prop) => (
  <tbody>
    {prop.items.map((item) =>(
      <tr>
        <th>{item.id}</th>
        <th>{item.name}</th>
        {item.price && <th>{item.price}</th>}
        {item.address && <th>{item.address}</th>}
        {item.phone && <th>{item.phone}</th>}
        <th>
          <Modals
            products={prop.products}
            customers={prop.customers}
            title={'edit'}
            editItem={prop.editItem}
            data={item}
          />
          <Modals
            products={prop.products}
            customers={prop.customers} 
            title={'delete'}
            deleteItem={prop.deleteItem}
            data={item}
          />
        </th>
      </tr>
    ))}
  </tbody>
);

export default Rows;
