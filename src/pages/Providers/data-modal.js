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
    name: this.props.data.name || '',
    contact: this.props.data.contact || '',
    email: this.props.data.email || '',
    phone: this.props.data.phone || '',
    webpage: this.props.data.webpage || '',
    principal_phone: this.props.data.principal_phone || '',
    contact_phone: this.props.data.contact_phone || '',
    status: this.props.data.status || true,
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
    const { showModal } = this.props;
    const {
      name,
      contact,
      email,
      phone,
      webpage,
      principal_phone,
      contact_phone,
      status,
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
                    name="name"
                    type="text"
                    placeholder="Ingresa el nombre"
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Contacto</Form.Label>
                  <Form.Control
                    name="contact"
                    type="text"
                    placeholder="Ingresa el contacto"
                    value={contact}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Ingresa el contacto"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        name="phone"
                        type="text"
                        placeholder="Ingresa el telefono"
                        value={phone}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Pagina Web</Form.Label>
                      <Form.Control
                        name="webpage"
                        type="text"
                        placeholder="Ingresa el telefono"
                        value={webpage}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono Principal</Form.Label>
                      <Form.Control
                        name="principal_phone"
                        type="text"
                        placeholder="Ingresa el telefono"
                        value={principal_phone}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono Contacto</Form.Label>
                      <Form.Control
                        name="contact_phone"
                        type="text"
                        placeholder="Ingresa el telefono"
                        value={contact_phone}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono Principal</Form.Label>
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
                  <Col />
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
