import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const ProductsTableModal = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Código</th>
        <th>Descripción</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        props.items.map(item => (
          <tr key={item.sku}>
            <td>{item.sku}</td>
            <td>{item.description}</td>
            <td>
              <Button variant="success" onClick={() => props.onSelect(item)}>Agregar</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

ProductsTableModal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

ProductsTableModal.defaultProps = {
  items: []
};

export default ProductsTableModal;
