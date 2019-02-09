import React from 'react';
import { Button, Modal, ModalFooter, ModalHeader, ModalBody, FormGroup, Input, Label } from 'reactstrap';

const ModalAdd = (prop) => (
  <div>
    <Button color="secondary" outline onClick={prop.toggle}>
      {prop.title}
    </Button>
      <Modal isOpen={prop.show} toggle={prop.toggle}>
        {prop.customers && <ModalHeader toggle={prop.toggle}>Add new customer</ModalHeader>}
        {prop.products && <ModalHeader toggle={prop.toggle}>Add new product</ModalHeader>}
        <ModalBody>
          <FormGroup>
            <Label for="name">Add new name</Label>
            <Input id="name" />
          </FormGroup>
          {prop.products && <FormGroup>
            <Label for="price">Add new price</Label>
            <Input id="price" />
          </FormGroup>
          }
          {prop.customers && <FormGroup>
            <Label for="address">Add new address</Label>
            <Input id="address" />
          </FormGroup>
          }
          {prop.customers &&<FormGroup>
            <Label for="phone">Add new phone</Label>
            <Input id="phone" />
          </FormGroup>}
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" onClick={prop.add}>Save</Button>
          <Button color="secondary" onClick={prop.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
  </div>
)

export default ModalAdd;
