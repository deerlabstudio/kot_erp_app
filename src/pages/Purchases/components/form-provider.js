import React, { Component } from 'react';
import {
  Form,
  Row,
  Col
} from 'react-bootstrap';

class FormProvider extends Component {
  state = {
    provider: {
      id: 0,
      name: '',
      phone: '',
      email: '',
    },
    date: null,
  }

  render() {
    const {
      provider,
      date,
    } = this.state;

    return (
      <Form>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Proveedor
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" value={provider.name} />
                <Form.Text className="text-muted">
                  F1 para buscar
                </Form.Text>
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Telefono
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly value={provider.phone} />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Correo
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly value={provider.email} />
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Fecha
              </Form.Label>
              <Col sm="10">
                <Form.Control readOnly value={date} />
              </Col>
            </Form.Group>
          </Col>
          <Col />
          <Col />
        </Row>
      </Form>
    );
  }
}

export default FormProvider;
