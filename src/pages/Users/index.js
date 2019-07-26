import React, { Component } from 'react';
import { Button, Row, Modal } from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Components
import DataTable from './users-tables';

class Users extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className="panel">
        <Row>
          <Button onClick={this.toggleModal}>New Record</Button>
        </Row>
        <Row className="table-crud">
          <DataTable />
        </Row>
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is the Body</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
            <Button variant="primary" onClick={this.toggleModal}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Users;
