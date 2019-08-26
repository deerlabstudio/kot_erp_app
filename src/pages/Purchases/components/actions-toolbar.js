import React from 'react';
import { Button, Row, ButtonToolbar } from 'react-bootstrap';

const ActionsToolbar = props => (
  <Row className="float-right">
    <ButtonToolbar>
      <Button
        variant="primary"
        className="mr-2"
        onClick={props.handleClickAddProduct}
      >
        Nuevo Producto
      </Button>
      <Button
        variant="secondary"
        className="mr-2"
        onClick={props.handleClickAddProvider}
      >
        Nuevo Proveedor
      </Button>
      <Button
        variant="success"
        className="mr-2"
        onClick={props.handleClickFindProduct}
      >
        Agregar Producto
      </Button>
    </ButtonToolbar>
  </Row>
);

export default ActionsToolbar;
