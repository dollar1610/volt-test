import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody, FormGroup, Input, Label } from 'reactstrap';

const ModalAdd = (prop) => (
  <div>
    <Button color="link" onClick={prop.toggle}>
      {prop.title}
    </Button>
      <Modal isOpen={prop.show} toggle={prop.toggle}>
        {prop.customers && <ModalHeader toggle={prop.toggle}>Edit customer</ModalHeader>}
        {prop.products && <ModalHeader toggle={prop.toggle}>Edit product</ModalHeader>}
        <ModalBody>
          <FormGroup>
            <Label for="name">Edit name</Label>
            <Input defaultValue={prop.data.name} id="name" />
          </FormGroup>
          {prop.products && <FormGroup>
            <Label for="price">Edit price</Label>
            <Input defaultValue={prop.data.price} id="price" />
          </FormGroup>
          }
          {prop.customers && <FormGroup>
            <Label for="address">Edit address</Label>
            <Input defaultValue={prop.data.address} id="address" />
          </FormGroup>
          }
          {prop.customers &&<FormGroup>
            <Label for="phone">Edit phone</Label>
            <Input defaultValue={prop.data.phone} id="phone" />
          </FormGroup>}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={() => prop.edit(prop.data.id)}>Save</Button>
          <Button color="secondary" onClick={prop.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
  </div>
)

export default ModalAdd;
