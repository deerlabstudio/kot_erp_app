import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const ProductsTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Código</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Precio Unitario</th>
        <th>Sub Total</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        props.items.map(item => (
          <tr key={item.sku}>
            <td>{item.sku}</td>
            <td>{item.description}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.subtotal}</td>
            <td>
              <Button variant="outline-danger" onClick={() => props.onDelete(item)}>Eliminar</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td />
        <td />
        <td />
        <td className="text-right font-weight-bold">Total</td>
        <td className="font-weight-bold">{props.total}</td>
        <td />
      </tr>
    </tfoot>
  </Table>
);

ProductsTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
};

ProductsTable.defaultProps = {
  items: [],
  total: 0.00
};

export default ProductsTable;
