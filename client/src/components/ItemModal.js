import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
  state = {
    // modal is closed by default
    modal: false,
    name: ''
  }

  // function to toggle the modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  // function for input change
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // add item from modal
  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: this.state.name,
      price: this.state.price,
      imagePath: this.state.imagePath,
      description: this.state.description,
    };

    // add item via addItem action
    this.props.addItem(newItem);

    // reset default image
    this.setState({ imagePath: 'https://picsum.photos/400/200/?random' })

    // close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Item</Button>

        <Modal
          style={{marginTop: '60px'}}
          isOpen={this.state.modal}
          toggle={this.toggle}>

          <ModalHeader
          toggle={this.toggle}>Add to Shopping List
          </ModalHeader>

          <ModalBody>
            <Form id="add-item-form" onSubmit={this.onSubmit}>
              {/* Item Name */}
              <FormGroup>
                <Label for="name">Item Name</Label>
                <Input
                  type="text"
                  name="name"
                  aria-label="Item Name"
                  aria-required="true"
                  id="name"
                  placeholder="iPhone X"
                  onChange={this.onChange.bind(this)}
                  required
                />
              </FormGroup>

              {/* Price */}
              <FormGroup>
                <Label for="price">Price</Label>
                <Input
                  aria-label="Price"
                  aria-required="true"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="749"
                  required
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>

              {/* Image Path */}
              <FormGroup>
                <Label for="imagePath">Image URL</Label>
                <Input
                  aria-label="Image URL"
                  type="text"
                  name="imagePath"
                  id="imagePath"
                  placeholder="https://someurl.com"
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>

              {/* Description */}
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  aria-label="Description"
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Product Description"
                  onChange={this.onChange.bind(this)}
                />
              </FormGroup>

              <Button
                color="dark"
                style={{marginTop: '2rem'}} block
              >Add Item</Button>

            </Form>
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);
