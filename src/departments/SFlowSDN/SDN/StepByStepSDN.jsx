import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StepByStepSDN = () => (
  <Container className="py-3">
    <h2>Step By Step SDN Operation</h2>
    <p>This page details what is happening inside the switch during operation of the OpenFlow controlled software defined network. This content is based off the OS-Ken SDN framework.</p>
    <p>Once both OpenFlow and the Controller are enabled within the network switch&apos;s configuration, the SDN controller and the network switch will partake in an handshake. Steps prefaced with &quot;[os-ken]&quot; are handled by the os-ken SDN framework and not our controller. Steps prefaced with &quot;[Control]&quot; are handled by our controller program. Steps prefaced with &quot;[Switch]&quot; are handled by the HP 2920-24G network switch.</p>
    <h4>The Handshake</h4>
    <ol>
      <li>[os-ken] The network switch and the controller will exchange <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#hello">OFPHello</Link> messages which is the initial request for a session to start.<sup>1</sup></li>
      <li>[os-ken] For the remainder of the session, <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#echo-request">OFPEchoRequest</Link> and <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#echo-reply">OFPEchoReply</Link> messages will be exchanged between the network switch and the controller. These are used to ensure the session is healthy.</li>
      <li>[os-ken] Once the session is established, the controller will send the switch an <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#handshake">OFPFeaturesRequest</Link> message.</li>
      <li>[Switch] The switch will reply with an <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#handshake">OFPSwitchFeatures</Link> message.</li>
      <li>[Control] Our controller receives this event and will create and send two <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#modify-state-messages">OFPFlowMod</Link> messages to the switch. The first OFPFlowMod message will delete all flows inside the network switch&apos;s flow table Table 100, and the second will add a flow in Table 100 that will have a match-all match criteria and an action output of forwarding to the OpenFlow port <Link to="https://github.com/openstack/os-ken/blob/dcd0d1a1eeb12fe7de64b3c3a7e1f8f64d86e37e/os_ken/ofproto/ofproto_v1_3.py#L107">OFPP_Controller</Link>. Specifically the two flow requests will have the following fields:<sup>2</sup></li>
      <Table striped bordered responsive="xl">
        <thead>
          <tr>
            <th>Message Name </th>
            <th>table_id     </th>
            <th>command      </th>
            <th>idle_timeout </th>
            <th>hard_timeout </th>
            <th>priority     </th>
            <th>out_port     </th>
            <th>out_group    </th>
            <th>match        </th>
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
          </tr>
          <tr> </tr>
        </tbody>
      </Table>
    </ol>
    <p>
      <sup>1</sup> Both HP 2920-24G network switches have the OpenFlow configuration &quot;max-backoff-interval 1&quot;, which specifies that each switch will try to reconnect to the controller every 1 second. It is set this low for testing.<br />
      <sup>2</sup> All other possible fields in the <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#modify-state-messages">OFPFlowMod</Link> class are set to default by the os-ken framework.<br />
      <sup>3</sup> See the &quot;Lab Configuration&quot; tab&apos;s &quot;Possible OpenFlow Ports&quot; table.
    </p>
    <p>TODO: pictures of a flow in the switch/flow tables</p>
    <p>Want to use specific event names from within the OS-Ken source code.</p>
  </Container>
);

export default StepByStepSDN;
