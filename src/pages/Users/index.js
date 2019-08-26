import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Components
import DataTable from './users-tables';
import ModalSave from './modal-save';
import AlertMessage from '../../components/Alert';

// Services
import {
  getUsersList,
  saveUsers,
  updateUsers,
  deleteUsers,
} from '../../lib/services/users';

import { getUsersTypesList } from '../../lib/services/userstypes';

// Utils
import { getCompany } from '../../lib/token-manager';

class Users extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    users: [],
    usersTypesList: [],
    userWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetUsers(company).catch(this.errorHandler);
    this.handleGetUsersTypes().catch(this.errorHandler);
  }

  getUsers = company => getUsersList(company);

  getUsersTypes = () => getUsersTypesList();

  handleGetUsers = company =>
  this.getUsers(company)
  .then((usersList) => {
    this.setState({
      users: usersList,
      hasError: false,
    });
  });

  handleGetUsersTypes = () =>
  this.getUsersTypes()
  .then((usersTypes) => {
    this.setState({
      usersTypesList: usersTypes,
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

  handleSubmitModal = (data) => {
    const { actionType, company } = this.state;

    switch (actionType) {
      case 1:
        this.saveRegister(data, company);
        break;
      case 2:
        this.updateRegister(data, company);
        break;
      case 3:
        this.deleteRegister(data, company);
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

  saveRegister = (data, company) => {
    saveUsers(data)
    .then(() => {
      this.handleGetUsers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateUsers(id, data)
    .then(() => {
      this.handleGetUsers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteUsers(id)
    .then(() => {
      this.handleGetUsers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      users,
      usersTypesList,
      userWorking,
      hasError,
      actionType,
      company,
    } = this.state;

    return (
      <>
        {
          hasError ? (
            <AlertMessage
              title="Opps, ocurrio un error!"
              message="Error al comunicarse con el servicio"
            />
          ) : null
        }
        <div className="panel">
          <h3>Usuarios</h3>
          <br />
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
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
                company={company}
                usersTypesList={usersTypesList}
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
