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

class Levels extends Component {
  state = {
    showModal: false,
    levels: [],
    levelWorking: {},
    actionType: 1,
    hasError: false,
  };

  componentDidMount() {
    this.handleGetLevels().catch(this.errorHandler);
  }

  getListLevels = () => getLevelsList();

  handleGetLevels = () =>
  this.getListLevels()
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

  saveRegister = (data) => {
    saveLevels(data)
    .then(() => {
      this.handleGetLevels().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  updateRegister = (data) => {
    const { id } = data;
    updateLevels(id, data)
    .then(() => {
      this.handleGetLevels().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  deleteRegister = (data) => {
    const { id } = data;
    deleteLevels(id)
    .then(() => {
      this.handleGetLevels().catch(this.errorHandler);
    }).catch(this.errorHandler);
  }

  render() {
    const {
      showModal,
      levels,
      levelWorking,
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
