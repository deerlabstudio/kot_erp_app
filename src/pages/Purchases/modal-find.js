import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';

// Services
import { getProductsByCompanyAndText } from '../../lib/services/products';

// Components
import ProductsTableModal from './components/products-modal';

// Utils
import { getCompany } from '../../lib/token-manager';

class ModalFindProduct extends Component {
  state = {
    company: getCompany(),
    textToFind: '',
    quantity: 1,
    price: 0,
    productSelected: null,
    items: [],
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleOnKeyUp = async (event) => {
    event.preventDefault();

    if (event.key !== 'Enter') {
      return;
    }

    try {
      const { company, textToFind } = this.state;
      const listProducts = await getProductsByCompanyAndText(company, textToFind);
      this.setState({
        items: listProducts,
      });
    } catch (error) {
      this.setState({
        items: [],
      });
    }
  }

  handleOnCancel = () => {
    this.props.onCancel();
  }

  handleOnSelect = (item) => {
    console.log(item);
  }

  render() {
    const { showModal } = this.props;
    const {
      textToFind,
      quantity,
      price,
      items
    } = this.state;
    return (
      <Modal show={showModal} size="lg">
        <Modal.Header>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Nombre Producto</Form.Label>
                  <Form.Control
                    name="textToFind"
                    type="text"
                    placeholder="Ingresa el nombre del producto a buscar"
                    value={textToFind}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleOnKeyUp}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="Ingresa la cantidad"
                    value={quantity}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Precio (Q)</Form.Label>
                  <Form.Control
                    name="price"
                    type="text"
                    placeholder="Ingresa el precio"
                    value={price}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <ProductsTableModal
                items={items}
                onSelect={this.handleOnSelect}
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnCancel}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalFindProduct.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalFindProduct;
