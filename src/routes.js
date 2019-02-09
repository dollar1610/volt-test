import Invoices from './containers/Invoices/index';
import Products from './containers/Products/index';
import Customers from './containers/Customers/index';
import ProductsAndCustomers from './containers/ProductsAndCustomers/index';

const routes = [
  {
    path: "/",
    exact: true,
    main: null
  },
  {
    path: "/products",
    main: ProductsAndCustomers(Products)
  },
  {
    path: "/customers",
    main: ProductsAndCustomers(Customers)
  },
  {
    path: "/invoices",
    main: Invoices
  }
];
 export default routes;
 