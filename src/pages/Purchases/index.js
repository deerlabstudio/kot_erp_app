import React, { Component } from 'react';
import {
  Button,
  Row,
  Col,
  Form,
  ButtonToolbar,
} from 'react-bootstrap';

// Styles
import '../../styles/Crud.css';

// Modals
import ModalFindProduct from './modal-find';
import ModalCreateProvider from './modal-create-provider';
import ModalCreateProduct from './modal-create-products';

// Components
import ProductsTable from './components/products-table';
import ActionsToolbar from './components/actions-toolbar';
import FormProvider from './components/form-provider';

class Purchases extends Component {
  state = {
    showModalFind: false,
    showModalAddProduct: false,
    showModalAddProvider: false,
    items: [],
    total: 0.00,
  }

  handleClickFindProduct = (event) => {
    event.preventDefault();
    this.setState({
      showModalFind: true,
      showModalAddProduct: false,
      showModalAddProvider: false,
    });
  }

  handleClickAddProduct = (event) => {
    event.preventDefault();
    this.setState({
      showModalFind: false,
      showModalAddProduct: true,
      showModalAddProvider: false,
    });
  }

  handleClickAddProvider = (event) => {
    event.preventDefault();
    this.setState({
      showModalFind: false,
      showModalAddProduct: false,
      showModalAddProvider: true,
    });
  }

  handleCancelModal = () => {
    this.setState({
      showModalFind: false,
      showModalAddProduct: false,
      showModalAddProvider: false,
    });
  }

  handleSubmitFindProduct = (info) => {

  }

  handleSubmitAddProvider = (provider) => {

  }

  handleSubmitAddProduct = (product) => {

  }

  render() {
    const {
      showModalFind,
      showModalAddProvider,
      showModalAddProduct,
      items,
      total
    } = this.state;

    return (
      <div className="panel">
        <h3>Nueva Compra</h3>
        <br />
        <FormProvider />
        <ActionsToolbar
          handleClickFindProduct={this.handleClickFindProduct}
          handleClickAddProduct={this.handleClickAddProduct}
          handleClickAddProvider={this.handleClickAddProvider}
        />
        <br />
        <Row className="table-crud">
          <ProductsTable
            items={items}
            total={total}
          />
        </Row>
        {
          showModalFind ? (
            <ModalFindProduct
              showModal={showModalFind}
              onCancel={this.handleCancelModal}
              onSubmit={this.handleSubmitFindProduct}
            />
          ) : null
        }
        {
          showModalAddProvider ? (
            <ModalCreateProvider
              showModal={showModalAddProvider}
              onCancel={this.handleCancelModal}
              onSubmit={this.handleSubmitAddProvider}
            />
          ) : null
        }
        {
          showModalAddProduct ? (
            <ModalCreateProduct
              showModal={showModalAddProduct}
              onCancel={this.handleCancelModal}
              onSubmit={this.handleSubmitAddProduct}
            />
          ) : null
        }
      </div>
    );
  }
}

export default Purchases;
