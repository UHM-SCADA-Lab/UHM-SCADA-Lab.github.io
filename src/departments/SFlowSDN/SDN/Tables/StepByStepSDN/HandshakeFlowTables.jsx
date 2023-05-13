import React from 'react';
import { Table } from 'react-bootstrap';

const HandshakeFlowTables = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr style={{ background: 'darkgray' }}> <td align="center" colSpan="5"> <b> Flow Table 0    </b> </td> </tr>
      <tr> <th>idle_timeout </th> <th>hard_timeout </th> <th>priority </th> <th>match     </th> <th>instructions              </th> </tr>
    </thead>
    <tbody>
      <tr> <td>0            </td> <td>0            </td> <td>0        </td> <td>match-all </td> <td>Forward to <b>Flow Table 100</b> </td> </tr>
    </tbody>
    <thead>
      <tr style={{ background: 'darkgray' }}> <td align="center" colSpan="5"> <b> Flow Table 100  </b> </td> </tr>
      <tr> <th>idle_timeout </th> <th>hard_timeout </th> <th>priority </th> <th>match     </th> <th>instructions              </th> </tr>
    </thead>
    <tbody>
      <tr> <td>0            </td> <td>0            </td> <td>0        </td> <td>match-all </td> <td>Forward to OFPP_CONTROLLER<sup>3</sup> </td> </tr>
    </tbody>
    <thead>
      <tr style={{ background: 'darkgray' }}> <td align="center" colSpan="5"> <b> Flow Table 200  </b> </td> </tr>
      <tr> <th>idle_timeout </th> <th>hard_timeout </th> <th>priority </th> <th>match     </th> <th>instructions              </th> </tr>
    </thead>
    <tbody>
      <tr> <td>-            </td> <td>-            </td> <td>-        </td> <td>-         </td> <td>-                         </td> </tr>
    </tbody>
  </Table>
);

export default HandshakeFlowTables;
