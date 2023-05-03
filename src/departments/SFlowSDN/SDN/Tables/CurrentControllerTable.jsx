import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CurrentControllerTable = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr>
        <th>Controller Name</th>
        <th>Status</th>
        <th>OS/Platform</th>
        <th>Derived From</th>
        <th>License</th>
        <th>Developed In</th>
        <th>Download</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><Link to="https://opendev.org/openstack/os-ken">os-ken</Link></td>
        <td>Active</td>
        <td>Ubuntu (16.04 LTS or later)</td>
        <td>N/A</td>
        <td>Apache 2.0</td>
        <td>Python</td>
        <td><Link to="https://github.com/openstack/os-ken">Download</Link></td>
      </tr>
    </tbody>
  </Table>
);

export default CurrentControllerTable;
