import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StepByStepSDNHandshakeTable = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr>
        <th>Message</th>
        <th>table_id     </th>
        <th>command      </th>
        <th>idle_timeout </th>
        <th>hard_timeout </th>
        <th>priority     </th>
        <th>out_port     </th>
        <th>out_group    </th>
        <th width="100">match</th>
        <th>instructions </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Delete all flows </td>
        <td>100</td>
        <td><Link to="https://github.com/openstack/os-ken/blob/dcd0d1a1eeb12fe7de64b3c3a7e1f8f64d86e37e/os_ken/ofproto/ofproto_v1_3.py#L364">OFPFC_DELETE</Link></td>
        <td>default</td>
        <td>default</td>
        <td>default</td>
        <td>OFPP_ANY<sup>3</sup></td>
        <td>OFPP_ANY<sup>3</sup></td>
        <td>match-all<sup>4</sup></td>
        <td>default</td>
      </tr>
      <tr>
        <td>Add a flow to the controller </td>
        <td>100</td>
        <td><Link to="https://github.com/openstack/os-ken/blob/dcd0d1a1eeb12fe7de64b3c3a7e1f8f64d86e37e/os_ken/ofproto/ofproto_v1_3.py#L361">OFPFC_ADD</Link></td>
        <td>0<sup>5</sup></td>
        <td>0<sup>5</sup> </td>
        <td>0</td>
        <td>default</td>
        <td>default</td>
        <td>match-all<sup>4</sup></td>
        <td>OFPP_CONTROLLER<sup>3,6</sup></td>
      </tr>
      <tr> </tr>
    </tbody>
  </Table>
);

export default StepByStepSDNHandshakeTable;
