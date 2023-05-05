import React from 'react';
import { Table } from 'react-bootstrap';

const OverviewFlowTableCase2 = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr> <th width="125">Flow Priority </th> <th width="350">Match Criteria </th> <th width="150">Is matched to? </th> <th>Action Applied </th> </tr>
    </thead>
    <tbody>
      <tr> <td>1            </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>Yes          </td> <td>Forwarded to the physical port number &quot;4&quot; </td> </tr>
      <tr> <td>0            </td> <td>Match all                                         </td> <td>N/A          </td> <td>N/A                                                 </td> </tr>
    </tbody>
  </Table>
);

export default OverviewFlowTableCase2;
