import React from 'react';
import { Button, Table } from 'react-bootstrap';

const DataTable = () => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Alex</td>
        <td>Mejicanos</td>
        <td><Button variant="light">Hola</Button></td>
      </tr>
    </tbody>
  </Table>
);

export default DataTable;
