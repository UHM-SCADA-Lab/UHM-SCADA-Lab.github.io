import React from 'react';
import { Table } from 'react-bootstrap';

const OverviewFlowTable = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr> <th width="125">Flow Priority </th> <th width="500">Match Criteria </th> <th>Action Output </th> </tr>
    </thead>
    <tbody>
      <tr> <td>1             </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>Forward to the physical port number &quot;4&quot; </td> </tr>
      <tr> <td>0             </td> <td>Match all                                         </td> <td>Forward to the SDN Controller                     </td> </tr>
    </tbody>
  </Table>
);

export default OverviewFlowTable;
