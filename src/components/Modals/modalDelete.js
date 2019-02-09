import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody, FormGroup, Input, Label } from 'reactstrap';

const ModalAdd = (prop) => (
  <div>
    <Button color="link" onClick={prop.toggle}>
      {prop.title}
    </Button>
      <Modal isOpen={prop.show} toggle={prop.toggle}>
        {prop.customers && <ModalHeader toggle={prop.toggle}>Delete customer</ModalHeader>}
        {prop.products && <ModalHeader toggle={prop.toggle}>Delete product</ModalHeader>}
        <ModalBody>
          <FormGroup>
            <Label for="name">Delete name</Label>
            <Input readOnly defaultValue={prop.data.name} id="name" />
          </FormGroup>
          {prop.products && <FormGroup>
            <Label for="price">Delete price</Label>
            <Input readOnly defaultValue={prop.data.price} id="price" />
          </FormGroup>
          }
          {prop.customers && <FormGroup>
            <Label for="address">Delete address</Label>
            <Input readOnly defaultValue={prop.data.address} id="address" />
          </FormGroup>
          }
          {prop.customers &&<FormGroup>
            <Label for="phone">Delete phone</Label>
            <Input readOnly defaultValue={prop.data.phone} id="phone" />
          </FormGroup>}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={() => prop.delete(prop.data.id)}>Delete</Button>
          <Button color="secondary" onClick={prop.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
  </div>
)

export default ModalAdd;
