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
  getCategoriesList,
  saveCategories,
  updateCategories,
  deleteCategories,
} from '../../lib/services/categories';

// Utils
import { getCompany } from '../../lib/token-manager';

class Levels extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    categories: [],
    categoryWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetCategories(company).catch(this.errorHandler);
  }

  getListCategories = company => getCategoriesList(company);

  handleGetCategories = company =>
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

  handleEditAction = (category) => {
    this.setState({
      showModal: true,
      actionType: 2,
      categoryWorking: category,
    });
  }

  handleDeleteAction = (category) => {
    this.setState({
      showModal: true,
      actionType: 3,
      categoryWorking: category,
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
      categoryWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      categoryWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data, company) => {
    saveCategories(data)
    .then(() => {
      this.handleGetCategories(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateCategories(id, data)
    .then(() => {
      this.handleGetCategories(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteCategories(id)
    .then(() => {
      this.handleGetCategories(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      categories,
      categoryWorking,
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
          <h3>Categorias</h3>
          <br />
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={categories}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={categoryWorking}
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

export default Levels;
