import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import { actionTypesModalResolver } from '../../lib/actionTypesModalResolver';

class ModalSave extends Component {
  state = {
    id: this.props.data.id || 0,
    title: this.props.data.title || '',
    description: this.props.data.description || '',
    vendor: this.props.data.vendor || '',
    height: this.props.data.height || '',
    width: this.props.data.width || '',
    weigth: this.props.data.weigth || '',
    price: this.props.data.price || '',
    sku: this.props.data.sku || '',
    categoriesId: this.props.data.categoriesId || '',
    status: this.props.data.status || true,
    company: this.props.company,
  };

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleInputSelect = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: parseInt(value, 10),
    });
  }

  handleOnCancel = () => {
    this.props.onCancel();
  }

  handleOnSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { showModal, categoriesList } = this.props;
    const {
      title,
      description,
      vendor,
      height,
      width,
      weigth,
      price,
      sku,
      status,
      categoriesId,
      id,
    } = this.state;

    const actionType = actionTypesModalResolver(this.props.actionType);

    return (
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>{actionType.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            this.props.actionType !== 3 ? (
              <Form>
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <input type="hidden" id="id" name="id" value={id} />
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Ingresa el nombre"
                    value={title}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Ingresa la descripción"
                    value={description}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Marca</Form.Label>
                      <Form.Control
                        name="vendor"
                        type="text"
                        placeholder="Ingresa la Marca"
                        value={vendor}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Altura (cm)</Form.Label>
                      <Form.Control
                        name="height"
                        type="text"
                        placeholder="Ingresa la altura"
                        value={height}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Ancho (cm)</Form.Label>
                      <Form.Control
                        name="width"
                        type="text"
                        placeholder="Ingresa el ancho"
                        value={width}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Peso (kg)</Form.Label>
                      <Form.Control
                        name="weigth"
                        type="text"
                        placeholder="Ingresa el peso"
                        value={weigth}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        name="price"
                        type="text"
                        placeholder="Ingresa el precio"
                        value={price}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>SKU</Form.Label>
                      <Form.Control
                        name="sku"
                        type="text"
                        placeholder="Ingresa el SKU"
                        value={sku}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Categoria</Form.Label>
                      <select
                        className="form-control"
                        name="categoriesId"
                        onChange={this.handleInputSelect}
                        value={categoriesId}
                      >
                        <option key={0} value={0}>Selecciona una categoria</option>
                        {
                          categoriesList.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                          ))
                        }
                      </select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Estado</Form.Label>
                      <select
                        className="form-control"
                        name="status"
                        onChange={this.handleInputSelect}
                        value={status}
                      >
                        <option key={1} value={1}>Activo</option>
                        <option key={0} value={0}>Inactivo</option>
                      </select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            ) : (
              <h4>Quieres eliminar el registro?</h4>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnCancel}>Close</Button>
          <Button
            variant={actionType.variant}
            onClick={this.handleOnSubmit}
          >
            {actionType.text}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalSave.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalSave;
