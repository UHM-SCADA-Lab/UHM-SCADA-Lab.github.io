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
    <p>By default (our current configuration), there are three flow tables within each HP 2920-24G network switch. There is &quot;Table 0&quot;, which only contains a single, match-all flow that forwards packets to &quot;Table 100&quot;. Without a controller connected, Table 100 does not have any default flows in it. So when the controller isn&apos;t connected to the switch, any packet that tries to use the switch will first go to Table 0, then will be forwarded to Table 100, then it will be dropped as there are no flows within Table 100. Table 100 is known as the &quot;hardware table&quot; as the switching done within the table is handled in hardware. There is also &quot;Table 200&quot;, the &quot;software&quot; table, as the switching within the table is handled in software. The hardware table, Table 100, has much faster switching speeds, with pings being able to go through the hardware table in less than 1ms, as opposed to around 125ms in the software table. As such, using Table 100 is preferred. There is downside to using the hardware table, as not all possible match criteria is able to be used in hardware. See the &quot;Supported Matching Criteria&quot; section below. </p>
    <h4>Supported Matching Criteria</h4>
    <h4>TODO: add a table for actions we have tested that our switches don&apos;t support.</h4>
  </Container>
);

export default LabConfiguration;
