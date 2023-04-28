import React from 'react';
import { Container } from 'react-bootstrap';

const LabConfiguration = () => (
  <Container className="py-3">
    <h2>Lab Configuration</h2>
    <h3>Step By Step Decision Making Inside the Switch</h3>
    <p>TODO: Should go into the steps our switch does more in depth than the steps in SDN Overview</p>
    <p>Want to use specific event names from within the OS-Ken source code.</p>
    <h3>Configuration Relating to the HP 2920-24G network switch</h3>
    <p>TODO: this should be updated after explaining what Openflow/SDN does.</p>
    <h4>Flow Tables</h4>
    <p>By default (our current configuration), there are three flow tables within each HP 2920-24G network switch.</p>
    <p>The three tables are as follows:</p>
    <h5>Table 0</h5>
    <ul>
      <li>Contains a single, match-all flow that forwards packets to &quot;Table 100&quot;.</li>
      <li>The table that Table 0 forwards to is configurable within the switch&apos;s configuration.</li>
      <li>The HP 2920-24G network switch does not allow other flows to be added to Table 0. (It took me a literal month to figure this one out...)</li>
    </ul>
    <h5>Table 100</h5>
    <ul>
      <li>This is known as the &quot;hardware table&quot; as the switching within the table is handled in hardware.</li>
      <li>As such, network traffic is able to be switched at ping latency of less than 1 ms.</li>
      <li>However, the downside of using this flow table is that not all possible match criteria is able to be used in hardware. See the &quot;Supported Matching Criteria&quot; section below.</li>
      <li>By default, contains no flows, as such, if any packet is forwarded to a table without any flows, the packet will be dropped</li>
      <li>This will be the flow table that our controller will add flows to.</li>
    </ul>
    <h5>Table 200</h5>
    <ul>
      <li>This is known as the &quot;software table&quot; as the switching within the table is handled in software inside the switch.</li>
      <li>As such, network traffic is switched slower than the hardware table, at ping latency of around 125 ms.</li>
      <li>Although this speed is extremely slow, the upside of using the software table as there are more possible match criteria than in the hardware table. However, the vastly decreased speeds negate this benefit.</li>
      <li>By default, contains no flows, as such, if any packet is forwarded to a table without any flows, the packet will be dropped.</li>
    </ul>
    <h4>Supported Matching Criteria</h4>
    <h4>TODO: add a table for actions we have tested that our switches don&apos;t support.</h4>
  </Container>
);

export default LabConfiguration;
