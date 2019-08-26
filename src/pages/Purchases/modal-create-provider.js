import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
} from 'react-bootstrap';

class ModalCreateProvider extends Component {
  state = {
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

    return (
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnCancel}>Close</Button>
          <Button variant="secondary" onClick={this.handleOnCancel}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalCreateProvider.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalCreateProvider;
