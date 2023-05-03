import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SupportedMatchingCriteria from './Tables/SupportedMatchingCriteria';
import PossibleOpenFlowPorts from './Tables/PossibleOpenFlowPorts';

const LabConfiguration = () => (
  <Container className="py-3">
    <h2>Lab Configuration</h2>
    <h3>Concise Changes</h3>
    <ul>
      <li>The SDN controller needs to push flows to the hardware flow table, Table 100.</li>
      <li>The SDN controller will create flows that forward packets to the network switch&apos;s normal forwarding plane. This avoids the need of the SDN controller to create a MAC address table.</li>
    </ul>
    <h3>Flow Tables</h3>
    <p>By default (our current configuration), there are three flow tables within each HP 2920-24G network switch.</p>
    <p>The three tables are as follows:</p>
    <h5>Table 0</h5>
    <ul>
      <li>Contains a single, match-all flow that forwards packets to &quot;Table 100&quot;.</li>
      <li>The table that Table 0 forwards to is configurable within the switch&apos;s configuration.</li>
      <li>The HP 2920-24G network switch does not allow other flows to be added to Table 0, as such flows will be added to either Table 100 or Table 200. (It took me a literal month to figure this one out...)</li>
    </ul>
    <h5>Table 100</h5>
    <ul>
      <li>This is known as the &quot;hardware table&quot; as the switching within the table is handled in hardware.</li>
      <li>As such, network traffic is able to be switched at ping latency of less than 1 ms.</li>
      <li>However, the downside of using this flow table is that not all possible match criteria is able to be used in hardware. See the &quot;Supported Matching Criteria&quot; section below.</li>
      <li>Contains no flows by default.</li>
      <li>This will be the flow table that our controller will add flows to.</li>
    </ul>
    <h5>Table 200</h5>
    <ul>
      <li>This is known as the &quot;software table&quot; as the switching within the table is handled in software inside the switch.</li>
      <li>As such, network traffic is switched slower than the hardware table, at ping latency of around 125 ms.</li>
      <li>Although this speed is extremely slow, the upside of using the software table as there are more possible match criteria than in the hardware table. However, the vastly decreased speeds negate this benefit.</li>
      <li>Contains no flows by default.</li>
    </ul>
    <h5>Supported Matching Criteria<sup>1</sup></h5>
    <SupportedMatchingCriteria />
    <p>
      <br /><sup>1</sup> Table adapted from <Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html#flow-match-structure">OS-Ken&apos;s documentation</Link>.
      <br /><sup>2</sup> Confirmed through experimentation.
      <br /><sup>3</sup> Found from <Link to="https://community.hpe.com/t5/software-defined-networking/using-hardware-flows-table-with-hp-2920-24g/td-p/6931454#.ZExGNi-B3BU">HP community post detailing acceptable match criteria in hardware</Link>.
    </p>
    <h3>Forwarding Actions</h3>
    <p>Our initial implementation of SDN was based off an example program, <Link to="https://github.com/faucetsdn/ryu/blob/master/ryu/app/simple_switch_13.py">simple_switch_13.py</Link>, provided by the RYU SDN framework. This program creates flows that forward packets straight to their physical destination port on the network switch. However, this requires the controller to build a MAC address table of where every device on the network. That is, the controller needs to know which port each device is connected to. Luckily, the HP 2920-24G network switch happens to build it&apos;s MAC address table regardless if OpenFlow is enabled or disabled. As such, we can use the OpenFlow port &quot;OFPP_NORMAL&quot; to forward packets to be processed by the switch&apos;s normal switching. </p>
    <p>See the following &quot;Possible OpenFlow Ports&quot; table for explanations of OpenFlow ports, whether or not the port is a valid destination to forward packets to, and whether or not the port is supported by the HP 2920-24G switch.</p>
    <h5>Possible OpenFlow Ports<sup>4</sup></h5>
    <PossibleOpenFlowPorts />
    <sup>4</sup> Table adapted from <Link to="https://github.com/openstack/os-ken/blob/dcd0d1a1eeb12fe7de64b3c3a7e1f8f64d86e37e/os_ken/ofproto/ofproto_v1_3.py">OS-Ken&apos;s source code</Link> and <Link to="https://osrg.github.io/ryu-book/en/html/openflow_protocol.html">RYU&apos;s documentation</Link>. The &quot;Supported by the Switch&quot; column was determined experimentally.<br />
  </Container>
);

export default LabConfiguration;
