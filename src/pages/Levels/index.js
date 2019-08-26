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
  getLevelsList,
  saveLevels,
  updateLevels,
  deleteLevels,
} from '../../lib/services/levels';

// Utils
import { getCompany } from '../../lib/token-manager';

class Levels extends Component {
  state = {
    company: getCompany(),
    showModal: false,
    levels: [],
    levelWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    const { company } = this.state;
    this.handleGetLevels(company).catch(this.errorHandler);
  }

  getListLevels = company => getLevelsList(company);

  handleGetLevels = company =>
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

  handleEditAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 2,
      levelWorking: user,
    });
  }

  handleDeleteAction = (user) => {
    this.setState({
      showModal: true,
      actionType: 3,
      levelWorking: user,
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
      levelWorking: {},
      actionType: 0,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModal: false,
      levelWorking: {},
      actionType: 0,
    });
  }

  saveRegister = (data, company) => {
    saveLevels(data)
    .then(() => {
      this.handleGetLevels(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data, company) => {
    const { id } = data;
    updateLevels(id, data)
    .then(() => {
      this.handleGetLevels(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data, company) => {
    const { id } = data;
    deleteLevels(id)
    .then(() => {
      this.handleGetLevels(company).catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      levels,
      levelWorking,
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
          <h3>Niveles</h3>
          <br />
          <Row>
            <Button onClick={this.handleActionNew}>Nuevo Registro</Button>
          </Row>
          <Row className="table-crud">
            <DataTable
              items={levels}
              onEdit={this.handleEditAction}
              onDelete={this.handleDeleteAction}
            />
          </Row>
          {
            showModal ? (
              <ModalSave
                actionType={actionType}
                data={levelWorking}
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
