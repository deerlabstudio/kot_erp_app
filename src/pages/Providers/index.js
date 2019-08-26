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

// Utils
import { getCompany } from '../../lib/token-manager';

class Providers extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    providers: [],
    providerWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetListProviders(company).catch(this.errorHandler);
  }

  getListProviders = company => getProvidersList(company);

  handleGetListProviders = company =>
  this.getListProviders(company)
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

  saveRegister = (data, company) => {
    saveProviders(data)
    .then(() => {
      this.handleGetListProviders(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateProviders(id, data)
    .then(() => {
      this.handleGetListProviders(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteProviders(id)
    .then(() => {
      this.handleGetListProviders(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      providers,
      providerWorking,
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
          <h3>Proveedores</h3>
          <br />
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
                company={company}
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
