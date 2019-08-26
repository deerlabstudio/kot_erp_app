import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const DataTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Nit</th>
        <th>Nivel</th>
        <th>Es Compañia?</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {
        props.items.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.code}</td>
            <td>{user.level.name}</td>
            <td>{user.isCompany ? 'Si' : 'No'}</td>
            <td>{user.status ? 'Activo' : 'Inactivo'}</td>
            <td>
              <Button variant="outline-info" onClick={() => props.onEdit(user)}>Editar</Button>
              <Button variant="outline-danger" onClick={() => props.onDelete(user)}>Eliminar</Button>
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
