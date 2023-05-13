import React from 'react';
import { Table } from 'react-bootstrap';

const OperationFlowTable100 = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr style={{ background: 'darkgray' }}> <td align="center" colSpan="5"> <b> Flow Table 100    </b> </td> <td align="center" colSpan="2"> <b>Packet </b> </td> </tr>
      <tr>
        <th>idle_timeout   </th>
        <th>hard_timeout   </th>
        <th>priority       </th>
        <th>match          </th>
        <th>instructions   </th>
        <th>Is matched to? </th>
        <th>Action Applied </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0                                        </td>
        <td>0                                        </td>
        <td>0                                        </td>
        <td>match-all                                </td>
        <td>Forward to OFPP_CONTROLLER<sup>3</sup>   </td>
        <td>Yes                                      </td>
        <td>Forwarded to OFPP_CONTROLLER<sup>3</sup> </td>
      </tr>
    </tbody>
  </Table>
);

export default OperationFlowTable100;
