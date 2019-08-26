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
  getProductsList,
  saveProducts,
  updateProducts,
  deleteProducts,
} from '../../lib/services/products';

import { getCategoriesList } from '../../lib/services/categories';

// Utils
import { getCompany } from '../../lib/token-manager';

class Customers extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    products: [],
    productWorking: {},
    categories: [],
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetListProducts(company).catch(this.errorHandler);
    this.handleGetListCategories(company).catch(this.errorHandler);
  }

  getListProducts = company => getProductsList(company);

  getListCategories = company => getCategoriesList(company);

  handleGetListProducts = company =>
  this.getListProducts(company)
  .then((productsList) => {
    this.setState({
      products: productsList,
      hasError: false,
    });
  });

  handleGetListCategories = company =>
  this.getListCategories(company)
  .then((categoriesList) => {
    this.setState({
      categories: categoriesList,
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

  handleEditAction = (product) => {
    this.setState({
      showModal: true,
      actionType: 2,
      productWorking: product,
    });
  }

  handleDeleteAction = (product) => {
    this.setState({
      showModal: true,
      actionType: 3,
      productWorking: product,
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
      productWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      productWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data, company) => {
    saveProducts(data)
    .then(() => {
      this.handleGetListProducts(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateProducts(id, data)
    .then(() => {
      this.handleGetListProducts(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteProducts(id)
    .then(() => {
      this.handleGetListProducts(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      products,
      productWorking,
      hasError,
      actionType,
      company,
      categories,
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
          <h3>Productos</h3>
          <br />
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={products}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={productWorking}
                company={company}
                categoriesList={categories}
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
