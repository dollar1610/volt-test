import React, { Component } from 'react';
import ModalAdd from '../../components/Modals/modalAdd';
import DeleteItem from '../../components/Modals/modalDelete';
import EditItem from '../../components/Modals/modalEdit';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggle = this.toggle.bind(this);
    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.collectData = this.collectData.bind(this);
  }
  collectData(id) {
    this.toggle();
    let data;
    if (this.props.customers) {
      data = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
      }
    }
    if (this.props.products) {
      data = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
      }
    }
    if (id) data = {...data, id};
    return data;
  }
  add(id) {
    this.props.addItem(this.collectData(id));
  }
  edit(id) {
    this.props.editItem(this.collectData(id));
  }
  delete(id) {
    this.toggle();
    this.props.deleteItem(id);
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    if (this.props.addItem) {
      return (
        <ModalAdd
          title={this.props.title}
          show={this.state.show}
          add={this.add}
          toggle={this.toggle}
          customers={this.props.customers}
          products={this.props.products}
        />
      );
    }
    if (this.props.deleteItem) {
      return (
        <DeleteItem
          title={this.props.title}
          show={this.state.show}
          delete={this.delete}
          toggle={this.toggle}
          customers={this.props.customers}
          products={this.props.products}
          data={this.props.data}
        />
      )
    }
    if (this.props.editItem) {
      return (
        <EditItem
          title={this.props.title}
          show={this.state.show}
          edit={this.edit}
          toggle={this.toggle}
          customers={this.props.customers}
          products={this.props.products}
          data={this.props.data}
        />
      )
    }
    return null;
  }
}

export default Modals;
