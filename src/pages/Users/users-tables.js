import React from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const DataTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button variant="outline-info" onClick={() => props.onEdit(user)}>Edit</Button>
              <Button variant="outline-danger" onClick={() => props.onDelete(user)}>Delete</Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

DataTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

DataTable.defaultProps = {
  users: [],
};

export default DataTable;
