import React from 'react';
import { Table } from 'react-bootstrap';

const PossibleOpenFlowPorts = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr> <th>OpenFlow Port Name </th> <th>Description                                               </th> <th>Used in Packet Forwarding?</th> <th>Supported by the Switch </th> </tr>
    </thead>
    <tbody>
      <tr> <td>OFPP_IN_PORT       </td> <td>Forwards the packet out the input port.                                         </td> <td>Yes </td> <td>Unknown </td> </tr>
      <tr> <td>OFPP_TABLE         </td> <td>Performs actions in the flow table.                                             </td> <td>No  </td> <td>Unknown </td> </tr>
      <tr> <td>OFPP_NORMAL        </td> <td>Forwards the packet to be processed by the switch&apos;s normal switching.      </td> <td>Yes </td> <td>Yes     </td> </tr>
      <tr> <td>OFPP_FLOOD         </td> <td>Forwards the packet to all physical ports except input ports and blocked ports. </td> <td>Yes </td> <td>Yes     </td> </tr>
      <tr> <td>OFPP_ALL           </td> <td>Forwards the packet to all physical ports except input ports.                   </td> <td>Yes </td> <td>Unknown </td> </tr>
      <tr> <td>OFPP_CONTROLLER    </td> <td>Forwards the packet to the controller as a flow request.                        </td> <td>Yes </td> <td>Yes     </td> </tr>
      <tr> <td>OFPP_LOCAL         </td> <td>Local OpenFlow &quot;port&quot;. Indicates a local port of the switch.          </td> <td>Yes </td> <td>No      </td> </tr>
      <tr> <td>OFPP_ANY           </td> <td>Used as a wildcard in certain messages to the switch.                           </td> <td>No  </td> <td>Yes     </td> </tr>
    </tbody>
  </Table>
);

export default PossibleOpenFlowPorts;
