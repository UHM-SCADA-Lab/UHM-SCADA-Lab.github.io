import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNOverview = () => (
  <Container className="py-3">
    <h2>SDN Overview</h2>
    <h4>What is SDN?</h4>
    <p>SDN, or Software Defined Networking, is simply a tool to manage networks. At it&apos;s core, all Software Defined Networking allows you to do is to create software that can control the forwarding happening inside a network switch. SDN has the capability for network administrators to create complex, software-based network management devices, such as routers, load balancers, and firewalls. The way that SDN is implemented on a network switch, is typically done through the use of OpenFlow, which is a communications protocol that enables interaction with the forwarding plane, the part of the switch which forwards packets to destinations [1].</p>
    <h4>What is OpenFlow?</h4>
    <p>Without the enabling of OpenFlow, each time a network switch receives a packet, it will forward it to it&apos;s destination with little to no &quot;thinking&quot;. We want to interrupt this process. Through the use of OpenFlow, we can configure a network switch to use a &quot;flow table&quot;, which holds &quot;flows&quot;. A flow table is basically a container of flows, and flows contain criteria for a packet to &quot;match&quot; to and an action to do if the match is successful. Our HP 2920-24G network switches each contain three flow tables. &quot;Table 0&quot;, which is only capable of holding a single flow (a limitation set by the manufacturer) that matches every single packet then sends every packet to &quot;Table 100&quot;.<sup>1</sup> Table 100, by default, does not hold any flows, so every packet that is sent to Table 100, cannot be matched to any flows so the packet is dropped by the switch. Table 100 is known as the &quot;hardware table&quot; as it&apos;s switching is accomplished using the physical hardware of the switch itself. The other flow table is &quot;Table 200&quot;, which is known as the &quot;software table&quot; as it&apos;s switching is done through software running on the switch. See the &quot;Lab Configuration&quot; tab for more information about the differences between Tables 100 and 200.</p>
    <p><sup>1</sup> It is possible to have more than three flow tables, and have the flow in Table 0 send packets to a different flow table, but this configuration (which can be done through the configuration of the switch itself - see Network department) isn&apos;t needed for our purposes.</p>
    <h4>What is a Flow?</h4>
    <p>A flow is an entry in a flow table. It contains information about which fields of a network packet to &quot;match&quot; to and actions to take if a packet successfully matches to the flow. A flow can have a match field of a MAC address and an action of where to forward the packet to (can be as simple as a port number on the switch). For example, if a flow has a match field of source MAC address being &quot;b8:27:eb:3c:2d:60&quot; and an action of sending out of port number 4, then, if a packet is sent to the flow table that contains that flow, the switch will check the source MAC address of the packet to see if it matches the flow, so if the packet&apos;s source MAC address is &quot;b8:27:eb:3c:2d:60&quot;, then the packet is forwarded out of port number 4, and if it is something else, like &quot;b8:27:eb:b5:37:bf&quot;, then the packet will move on to check other flows in the flow table.</p>
    <p>TODO: pictures of a flow in the switch/flow tables</p>
    <h4>What is a Controller?</h4>
    <p>A Controller is simply a program that has methods to interact with an OpenFlow-enabled network switch through the use of the OpenFlow protocol.<sup>1</sup> A Controller can add flows to flow tables of the switch, it can delete flows in the flow tables of the switch, and much more, however we are mainly interested in being able to add and delete these flows. Here are the basic steps of how our controller interacts with a network switch:</p>
    <ol>
      <li>If OpenFlow and the Controller are both enabled in the switch<sup>1</sup>, the controller and switch will be able to complete a handshake, which will essentially create a session between the two devices.<sup>2</sup></li>
      <li>As part of this initial handshake, the Controller will add a flow into the switch&apos;s flow table 100, which will have match every single packet and will forward the packet to the controller.<sup>3</sup> If a packet is sent through this flow, the resulting message is known as a &quot;flow request&quot;.</li>
      <li>Once this connection is established, there will be echo messages sent for the remainder of the connection, between the controller and the switch to ensure the connection is healthy.</li>
      <li>Once the switch receives a network packet from a device, the packet will be sent to Table 0 of the switch&apos;s flow tables. From there, it will follow the following steps:</li>
      <ol>
        <li>In Table 0, it will match to the only flow in the table that will send the packet to Table 100.</li>
        <li>In Table 100, it will match to the only flow currently in the flow table, which will send the packet to the controller as a flow request.</li>
        <li>In the controller, the packet will be appear as a &quot;Packet In Event&quot;, and a method will be called to handle the event.</li>
        <li>In the &quot;Packet In Handler&quot;, this event will parse the packet associated with the flow request then use the parsed information to determine if a flow should be added. If the controller determines a flow shouldn&apos;t be added, then the packet is dropped.<sup>4</sup></li>
        <li>If a flow is determined to be added, the controller will send an &quot;OpenFlow Flow Mod&quot; to the network switch with instructions to add a flow. There will be additional information in this Flow Mod Request, such as:</li>
        <ul>
          <li>Match criteria, that the created flow will use to match packets to it.</li>
          <li>A priority, that determines which flows the packets will try and match to first. Newly added flows should have a higher priority than that of the match-all flow from the switch to the controller.</li>
          <li>The flow table to put the created flow into. See the &quot;Lab Configuration&quot; for more information.</li>
          <li>Timeouts for the flow, that determine when (or if) a flow should be auto-removed from the switch. There is a hard timeout, which will remove the flow no matter what after the specified time has passed, and there is a soft timeout, which will remove the flow if a packet hasn&apos;t used the flow within the specified time. A timeout of 0 seconds specifies no timeout for the flow.</li>
          <li>Actions, that tell the switch where a packet should be forwarded if the packet is matched to the flow.</li>
          <li>There are other possible parameters as well, however these are the only ones we have experimented with.</li>
        </ul>
        <li>The original packet that triggered the flow request will then be sent back out by the controller to it&apos;s destination.<sup>5</sup></li>
        <li>The next time a matching packet is encountered by the switch, it should match to the new flow in the flow table and be forwarded direct to it&apos;s destination, avoiding the process of going to the controller.</li>
      </ol>
      <li>The controller will then keep repeating this process of handling flow requests indefinitely, see the &quot;Lab Configuration&quot; tab for a more detailed step by step guide of how our specific controller is configured.</li>
    </ol>
    <sup>1</sup> There is some configuration needed in the network switch to achieve this - see Network department.
    <br />
    <sup>2</sup> The config option &quot;max-backoff-interval 1&quot; in the switch modifies the delay at which this connection will happen. For testing purposes, it is currently set that every 1 second the switch will try to connect to the controller.
    <br />
    <sup>3</sup> We also send a message to the switch to delete all flows within Table 100 before adding the flow to the controller.
    <br />
    <sup>4</sup> Eventually, we would like to do more when a packet is to be dropped, like sending a message to a human network monitor or adding a flow in the switch to auto-drop that type of packet.
    <br />
    <sup>5</sup> This last step is true for our HP 2920-24G network switch, however, some switches will have a queue system and will only send a copy of the packet to the controller, which would require a different last step.
    <br /><br />
    <h4>References</h4>
    <p>[1] C. Craven, “What Is OpenFlow? Definition and How it Relates to SDN,” sdxcentral, Aug. 25, 2013. <Link to="https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/">https://www.sdxcentral.com/networking/sdn/definitions/what-the-definition-of-software-defined-networking-sdn/what-is-openflow/</Link> (accessed Apr. 26, 2023).</p>
  </Container>
);

export default SDNOverview;
