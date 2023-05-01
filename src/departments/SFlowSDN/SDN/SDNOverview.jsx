import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNOverview = () => (
  <Container className="py-3">
    <h2>SDN Overview</h2>
    <h4>What is SDN?</h4>
    <p>SDN, or Software Defined Networking, is simply a tool to manage networks. At it&apos;s core, all Software Defined Networking allows you to do is to create software that can control the forwarding happening inside a network switch. SDN has the capability for network administrators to create complex, software-based network management devices, such as routers, load balancers, and firewalls. The way that SDN is implemented on a network switch, is typically done through the use of OpenFlow, which is a communications protocol that enables interaction with the forwarding plane, the part of the switch which forwards packets to destinations.<sup>1</sup></p>
    <sup>1</sup> Information from <Link to="https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/">https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/</Link>.<br /><br />
    <h4>What is OpenFlow?</h4>
    <p>Without the enabling of OpenFlow, each time a network switch receives a packet, it will forward it to it&apos;s destination with little to no &quot;thinking&quot;. We want to interrupt this process. Through the use of OpenFlow, we can configure a network switch to use a &quot;flow table&quot;, which holds &quot;flows&quot;. A flow table is essentially a container of flows, with each flow containing criteria for a packet to &quot;match&quot; to and an action to do if the match is successful. See the &quot;Lab Configuration&quot; tab for more information about the flow tables in our HP 2920-24G network switches.</p>
    <h4>What is a Flow?</h4>
    <p>A flow is an entry in a flow table. It contains information about which fields of a network packet to &quot;match&quot; to and actions to take if a packet successfully matches to the flow. A flow can also have a priority that will determine the order a packet will try to match to flow table entries. A flow can have a match field of a MAC address and an action of where to forward the packet to (can be as simple as a port number on the switch). For example, if a flow table is as follows:<sup>2</sup></p>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th width="125">Flow Priority </th> <th width="500">Match Criteria </th> <th>Action Output </th> </tr>
      </thead>
      <tbody>
        <tr> <td>1             </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>Forward to the physical port number &quot;4&quot; </td> </tr>
        <tr> <td>0             </td> <td>Match all                                         </td> <td>Forward to the SDN Controller                     </td> </tr>
      </tbody>
    </Table>
    <p>As such, if a packet with a source MAC address of &quot;b8:27:eb:b5:37:bf&quot; is sent to this flow table, the following process will happen:<sup>3</sup></p>
    <Table striped bordered responsive="xl">
      <thead>
        <tr> <th width="125">Flow Priority </th> <th width="350">Match Criteria </th> <th width="150">Is matched to? </th> <th>Action Applied </th> </tr>
      </thead>
      <tbody>
        <tr> <td>1            </td> <td>Source MAC address: &quot;b8:27:eb:3c:2d:60&quot; </td> <td>No             </td> <td>None                                            </td> </tr>
        <tr> <td>0            </td> <td>Match all                                         </td> <td>Yes            </td> <td>Forwarded to the SDN Controller                 </td> </tr>
      </tbody>
    </Table>
    <p>That is, the packet will try to match to the flow with the highest priority (the priority &quot;1&quot; flow in the table), but since it has a different source MAC address than the match field of the flow, the flow&apos;s action will not be applied to the packet. Then the packet will try to match to the flow with the next highest priority (the priority &quot;0&quot; flow in the table), and since that flow is match-all, the packet will have the flow&apos;s action applied to it, forwarding the packet to the SDN controller.</p>
    <p>However, if a packet with a source MAC address of &quot;b8:27:eb:3c:2d:60&quot; is sent to this flow table, the following process will happen:<sup>3</sup></p>
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
    <sup>2</sup> Flow entries contain much more information than shown, however this is meant to highlight the main concept of a flow entry. See the &quot;Lab Configuration&quot; tab for more information about the flow entries in our HP 2920-24G network switches. <br />
    <sup>3</sup> This example is very general, see the &quot;Step By Step Process Inside the Switch&quot; tab for a more in-depth example. <br />
    <br />
    <h4>What is a Controller?</h4>
    <p>A Controller is simply a program that has methods to interact with an OpenFlow-enabled network switch through the use of the OpenFlow protocol.<sup>2</sup> A Controller can add flows to flow tables of the switch, it can delete flows in the flow tables of the switch, and much more, however we are mainly interested in being able to add and delete these flows. Here are the basic steps of how our controller interacts with a network switch:</p>
    <ol>
      <li>If OpenFlow and the Controller are both enabled in the switch<sup>2</sup>, the controller and switch will be able to complete a handshake, which will essentially create a session between the two devices.<sup>3</sup></li>
      <li>As part of this initial handshake, the Controller will add a flow into the switch&apos;s flow table 100, which will have match every single packet and will forward the packet to the controller.<sup>4</sup> If a packet is sent through this flow, the resulting message is known as a &quot;flow request&quot;.</li>
      <li>Once this connection is established, there will be echo messages sent for the remainder of the connection, between the controller and the switch to ensure the connection is healthy.</li>
      <li>Once the switch receives a network packet from a device, the packet will be sent to Table 0 of the switch&apos;s flow tables. From there, it will follow the following steps:</li>
      <ol>
        <li>In Table 0, it will match to the only flow in the table that will send the packet to Table 100.</li>
        <li>In Table 100, it will match to the only flow currently in the flow table, which will send the packet to the controller as a flow request.</li>
        <li>In the controller, the packet will be appear as a &quot;Packet In Event&quot;, and a method will be called to handle the event.</li>
        <li>In the &quot;Packet In Handler&quot;, this event will parse the packet associated with the flow request then use the parsed information to determine if a flow should be added. If the controller determines a flow shouldn&apos;t be added, then the packet is dropped.<sup>5</sup></li>
        <li>If a flow is determined to be added, the controller will send an &quot;OpenFlow Flow Mod&quot; to the network switch with instructions to add a flow. There will be additional information in this Flow Mod Request, such as:</li>
        <ul>
          <li>Match criteria, that the created flow will use to match packets to it.</li>
          <li>A priority, that determines which flows the packets will try and match to first. Newly added flows should have a higher priority than that of the match-all flow from the switch to the controller.</li>
          <li>The flow table to put the created flow into. See the &quot;Lab Configuration&quot; tab for more information.</li>
          <li>Timeouts for the flow, that determine when (or if) a flow should be auto-removed from the switch. There is a hard timeout, which will remove the flow no matter what after the specified time has passed, and there is a soft timeout, which will remove the flow if a packet hasn&apos;t used the flow within the specified time. A timeout of 0 seconds specifies no timeout for the flow.</li>
          <li>Actions, that tell the switch where a packet should be forwarded if the packet is matched to the flow.</li>
          <li>There are other possible parameters as well, however these are the only ones we have experimented with.</li>
        </ul>
        <li>The original packet that triggered the flow request will then be sent back out by the controller to it&apos;s destination.<sup>6</sup></li>
        <li>The next time a matching packet is encountered by the switch, it should match to the new flow in the flow table and be forwarded direct to it&apos;s destination, avoiding the process of going to the controller.</li>
      </ol>
      <li>The controller will then keep repeating this process of handling flow requests indefinitely, see the &quot;Step By Step Process Inside the Switch&quot; tab for a more detailed step by step guide of how our specific controller is configured.</li>
    </ol>
    <sup>2</sup> There is some configuration needed in the network switch to achieve this - see Network department.
    <br />
    <sup>3</sup> The config option &quot;max-backoff-interval 1&quot; in the switch modifies the delay at which this connection will happen. For testing purposes, it is currently set that every 1 second the switch will try to connect to the controller.
    <br />
    <sup>4</sup> We also send a message to the switch to delete all flows within Table 100 before adding the flow to the controller.
    <br />
    <sup>5</sup> Eventually, we would like to do more when a packet is to be dropped, like sending a message to a human network monitor or adding a flow in the switch to auto-drop that type of packet.
    <br />
    <sup>6</sup> This last step is true for our HP 2920-24G network switch, however, some switches will have a queue system and will only send a copy of the packet to the controller, which would require a different last step.
    <br /><br />
  </Container>
);

export default SDNOverview;
