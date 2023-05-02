import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNOverview = () => (
  <Container className="py-3">
    <h2>SDN Overview</h2>
    <h4>What is SDN?</h4>
    <p>SDN, or Software Defined Networking, is simply a tool to manage networks. At it&apos;s core, all Software Defined Networking allows you to do is to create software that can control the forwarding happening inside a network switch. Network administrators, through the use of SDN, are able to create complex, software-based network management devices, such as routers, load balancers, and firewalls. SDN is usually implemented on a network through the use of OpenFlow.</p>
    <h4>What is OpenFlow?</h4>
    <p>OpenFlow is a communications protocol that enables interaction with the forwarding plane, the part of a network switch that forwards packets to destinations.<sup>1</sup> Through the use of OpenFlow, you can, among other things, configure a network switch to use a &quot;flow table&quot;, which holds &quot;flows&quot;. A flow table is essentially a container of flows, with each flow containing criteria for a packet to &quot;match&quot; to and an action to do if the match is successful.</p>
    <p><sup>1</sup> Information from <Link to="https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/">https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/</Link>.</p>
    <h4>What is a Flow?</h4>
    <p>A flow is an entry in a flow table. It contains information about which fields of a network packet to &quot;match&quot; to and actions to take if a packet successfully matches to the flow. A flow can also have a priority that will determine the order a packet will try to match to flow table entries. A flow can have a match field of a MAC address and an action of where to forward the packet to. For example, if a flow table is as follows:</p>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th width="125">Flow Priority </th> <th width="500">Match Criteria </th> <th>Action Output </th> </tr>
      </thead>
      <tbody>
        <tr> <td>1             </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>Forward to the physical port number &quot;4&quot; </td> </tr>
        <tr> <td>0             </td> <td>Match all                                         </td> <td>Forward to the SDN Controller                     </td> </tr>
      </tbody>
    </Table>
    <p>As such, if a packet with a source MAC address of &quot;b8:27:eb:b5:37:bf&quot; is sent to this flow table, the following process will happen:</p>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th width="125">Flow Priority </th> <th width="350">Match Criteria </th> <th width="150">Is matched to? </th> <th>Action Applied </th> </tr>
      </thead>
      <tbody>
        <tr> <td>1            </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>No             </td> <td>N/A                                             </td> </tr>
        <tr> <td>0            </td> <td>Match all                                         </td> <td>Yes            </td> <td>Forwarded to the SDN Controller                 </td> </tr>
      </tbody>
    </Table>
    <p>That is, the packet will try to match to the flow with the highest priority (the priority &quot;1&quot; flow in the table), but since it has a different source MAC address than the match field of the flow, the flow&apos;s action will not be applied to the packet. Then the packet will try to match to the flow with the next highest priority (the priority &quot;0&quot; flow in the table), and since that flow is match-all, the packet will have the flow&apos;s action applied to it, forwarding the packet to the SDN controller.</p>
    <p>However, if a packet with a source MAC address of &quot;b8:27:eb:3c:2d:60&quot; is sent to this flow table, the following process will happen:</p>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th width="125">Flow Priority </th> <th width="350">Match Criteria </th> <th width="150">Is matched to? </th> <th>Action Applied </th> </tr>
      </thead>
      <tbody>
        <tr> <td>1            </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>Yes          </td> <td>Forwarded to the physical port number &quot;4&quot; </td> </tr>
        <tr> <td>0            </td> <td>Match all                                         </td> <td>N/A          </td> <td>N/A                                                 </td> </tr>
      </tbody>
    </Table>
    <p>That is, the packet will try to match to the flow with the highest priority (the priority &quot;1&quot; flow in the table), and since it has the same source MAC address than the match field of the flow, the packet will have the flow&apos;s action applied to it, forwarding the packet to the physical port number &quot;4&quot;. Since the packet has already been forwarded out of the flow table, the other flows in the flow table will not be attempted to match to.</p>
    <h4>What is a Controller?</h4>
    <p>A Controller is simply a program that has methods to interact with an OpenFlow-enabled network switch through the use of the OpenFlow protocol. A Controller, through the use of the OpenFlow protocol, has many methods that interact with a network switch. However, we are mainly interested in being able to add and delete flows to the network switch&apos;s flow table. Here are the basic steps of how a controller interacts with a network switch:</p>
    <ol>
      <li>If OpenFlow and the Controller are both enabled in the network switch, the controller and switch will be able to complete an OpenFlow handshake, which will create a session between the two devices.</li>
      <li>As part of this initial handshake, the Controller will add a flow into the switch&apos;s flow table, which will have a match-all match criteria and will have an action output of forwarding to the Controller. If a packet is sent through this flow to the Controller, the resulting message is known as a &quot;flow request&quot;.</li>
      <li>Once this connection is established, there will be echo messages sent between the controller and the switch for the remainder of the session to ensure the connection is healthy.</li>
      <li>Once the network switch receives a packet from a device, the packet will be sent to the network switch&apos;s flow table. From there, it will follow the following steps:</li>
      <ol>
        <li>The packet will attempt to match to any added flows in the flow table, starting with the flow of the highest priority.</li>
        <li>If the packet is successfully matched to an added flow, the packet will apply the action specified in the flow&apos;s action output.</li>
        <li>If the packet doesn&apos;t match to any added flows, it will match to the low-priority, match-all flow to the SDN controller. This resulting message is known as a &quot;flow request&quot;. </li>
        <li>Once the SDN controller receives the flow request, the controller will parse the packet associated with the flow request then use the parsed information to determine if a flow should be added.</li>
        <li>If a flow is determined to be added, the controller will send a request to the network switch with instructions to add a flow. There will be additional information in this request, such as:</li>
        <ul>
          <li>Match criteria, that packets will be able to use to determine to match to the flow.</li>
          <li>A priority, that determines which flows the packets will try and match to first. Newly added flows should have a higher priority than that of the match-all flow from the switch to the controller.</li>
          <li>Output actions, that tell the switch where a packet should be forwarded if the packet is matched to the flow.</li>
        </ul>
        <li>The original packet that triggered the flow request will then be forwarded to it&apos;s destination.</li>
        <li>The next time a matching packet is encountered by the switch, it should match to the new flow in the flow table and be forwarded direct to it&apos;s destination, avoiding the process of going to the controller.</li>
      </ol>
      <li>When a new flow request is encountered, this process will repeat.</li>
    </ol>
    <h4>The Specifics</h4>
    <ul>
      <li>This SDN Overview page is meant to be extremely general. For specific information on how SDN and OpenFlow are used in our physical in-lab setup, see the &quot;Lab Configuration&quot; and &quot;Step By Step SDN Operation&quot; tabs.</li>
      <li>See the &quot;Current SDN Controller&quot; tab for information about the SDN framework we are using with information on how to program and run a controller using the framework.</li>
      <li>See the &quot;Legacy Controller Research&quot; tab for information about our research into which SDN framework to use.</li>
      <li>See the &quot;SDN Resources&quot; tab for additional resources relating to OpenFlow and SDN.</li>
      <li>Also, the <Link to="/network">Network department</Link> has information relating to configuration within the switch that is needed for SDN to be possible.</li>
    </ul>
  </Container>
);

export default SDNOverview;
