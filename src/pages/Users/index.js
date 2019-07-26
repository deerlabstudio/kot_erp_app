import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Components
import DataTable from './users-tables';
import ModalSave from './modal-save';
import AlertMessage from '../../components/Alert';

// Services
import { getUsersList } from '../../lib/services/users';

class Users extends Component {
  state = {
    showModal: false,
    users: [],
    userWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetUsers().catch(this.errorHandler);
  }

  getUsers = () => getUsersList();

  handleGetUsers = () =>
  this.getUsers()
  .then((usersList) => {
    this.setState({
      users: usersList,
      hasError: false,
    });
  });

  errorHandler = () => {
    this.setState({ hasError: true });
  }

  handleActionNew = () => {
    this.setState({
      showModal: true,
      actionType: 1,
    });
  }

  handleEditAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 2,
      userWorking: user,
    });
  }

  handleDeleteAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 3,
      userWorking: user,
    });
  }

  handleSubmitModal = () => {
    const { actionType } = this.state;

    switch (actionType) {
      case 1:
        // Guardar
        break;
      case 2:
        // Editar
        break;
      case 3:
        // Eliminar
        break;
      default:
        // Nothing
        break;
    }

    this.setState({
      showModal: false,
      userWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      userWorking: {},
      actionType: 0,
    });
  }

  render() {
    const {
      showModal,
      users,
      userWorking,
      hasError,
      actionType,
    } = this.state;

    return (
      <>
        {
          hasError ? (
            <AlertMessage
              title="Opps, and error!"
              message="Problem fetching data from server"
            />
          ) : null
        }
        <div className="panel">
          <Row>
            <Button onClick={this.handleActionNew}>New Record</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              users={users}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={userWorking}
                showModal={showModal}
                onCancel={this.handleCancelModal}
                onSubmit={this.handleSubmitModal}
              />
            ) : null
          }
        </div>
      </>
    );
  }
}

export default Users;
