import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Components
import DataTable from './data-table';
import ModalSave from './data-modal';
import AlertMessage from '../../components/Alert';

// Services
import {
  getProvidersList,
  saveProviders,
  updateProviders,
  deleteProviders,
} from '../../lib/services/providers';

class Providers extends Component {
  state = {
    showModal: false,
    providers: [],
    providerWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetListProviders().catch(this.errorHandler);
  }

  getListProviders = () => getProvidersList();

  handleGetListProviders = () =>
  this.getListProviders()
  .then((providersList) => {
    this.setState({
      providers: providersList,
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
      providerWorking: user,
    });
  }

  handleDeleteAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 3,
      providerWorking: user,
    });
  }

  handleSubmitModal = (data) => {
    const { actionType } = this.state;

    switch (actionType) {
      case 1:
        this.saveRegister(data);
        break;
      case 2:
        this.updateRegister(data);
        break;
      case 3:
        this.deleteRegister(data);
        break;
      default:
        // Nothing
        break;
    }

    this.setState({
      showModal: false,
      providerWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      providerWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data) => {
    saveProviders(data)
    .then(() => {
      this.handleGetListProviders().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data) => {
    const { id } = data;
    updateProviders(id, data)
    .then(() => {
      this.handleGetListProviders().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data) => {
    const { id } = data;
    deleteProviders(id)
    .then(() => {
      this.handleGetListProviders().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      providers,
      providerWorking,
      hasError,
      actionType,
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
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={providers}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={providerWorking}
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

export default Providers;
