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
    email: this.props.data.email || '',
    phone: this.props.data.phone || '',
    code: this.props.data.code || '',
    isCompany: this.props.data.isCompany || 0,
    levelsId: this.props.data.levelsId || 0,
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
    const { showModal, levelsList } = this.props;
    const {
      name,
      email,
      phone,
      code,
      isCompany,
      status,
      levelsId,
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
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Ingresa el correo"
                    value={email}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    name="phone"
                    type="text"
                    placeholder="Ingresa el telefono"
                    value={phone}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nit</Form.Label>
                  <Form.Control
                    name="code"
                    type="text"
                    placeholder="Ingresa el nit"
                    value={code}
                    onChange={this.handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Nivel Cliente</Form.Label>
                  <select
                    className="form-control"
                    name="levelsId"
                    onChange={this.handleInputSelect}
                    value={levelsId}
                  >
                    <option key={0} value={0}>Selecciona un Nivel</option>
                    {
                      levelsList.map(userType => (
                        <option key={userType.id} value={userType.id}>{userType.name}</option>
                      ))
                    }
                  </select>
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Es Compañia?</Form.Label>
                      <select
                        className="form-control"
                        name="isCompany"
                        onChange={this.handleInputSelect}
                        value={isCompany}
                      >
                        <option key={1} value={1}>Si</option>
                        <option key={0} value={0}>No</option>
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
