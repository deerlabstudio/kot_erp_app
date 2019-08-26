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
  getCustomersList,
  saveCustomers,
  updateCustomers,
  deleteCustomers,
} from '../../lib/services/customers';

import { getLevelsList } from '../../lib/services/levels';

// Utils
import { getCompany } from '../../lib/token-manager';

class Customers extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    customers: [],
    customerWorking: {},
    levels: [],
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetListCustomers(company).catch(this.errorHandler);
    this.handleGetListLevels(company).catch(this.errorHandler);
  }

  getListCustomers = company => getCustomersList(company);

  getListLevels = company => getLevelsList(company);

  handleGetListCustomers = company =>
  this.getListCustomers(company)
  .then((providersList) => {
    this.setState({
      customers: providersList,
      hasError: false,
    });
  });

  handleGetListLevels = company =>
  this.getListLevels(company)
  .then((levelsList) => {
    this.setState({
      levels: levelsList,
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

  handleEditAction = (customer) => {
    this.setState({
      showModal: true,
      actionType: 2,
      customerWorking: customer,
    });
  }

  handleDeleteAction = (customer) => {
    this.setState({
      showModal: true,
      actionType: 3,
      customerWorking: customer,
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
      customerWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      customerWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data, company) => {
    saveCustomers(data)
    .then(() => {
      this.handleGetListCustomers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateCustomers(id, data)
    .then(() => {
      this.handleGetListCustomers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteCustomers(id)
    .then(() => {
      this.handleGetListCustomers(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      customers,
      customerWorking,
      hasError,
      actionType,
      company,
      levels,
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
          <h3>Clientes</h3>
          <br />
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={customers}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={customerWorking}
                company={company}
                levelsList={levels}
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

export default Customers;
