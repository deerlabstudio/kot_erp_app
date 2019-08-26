import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const DataTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Marca</th>
        <th>SKU</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.vendor}</td>
            <td>{item.sku}</td>
            <td>{item.status ? 'Activo' : 'Inactivo'}</td>
            <td>
              <Button variant="outline-info" onClick={() => props.onEdit(item)}>Editar</Button>
              <Button variant="outline-danger" onClick={() => props.onDelete(item)}>Eliminar</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

DataTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

DataTable.defaultProps = {
  items: [],
};

export default DataTable;
