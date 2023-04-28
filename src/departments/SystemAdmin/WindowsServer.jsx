import React from 'react';
import { Col, Row, Container, Tab, Tabs } from 'react-bootstrap';
import WindowsServerDHCP from './WindowsServerDHCP';
import WindowsServerDNS from './WindowsServerDNS';
import WindowsServerW32Time from './WindowsServerW32Time';

const WindowsServer = () => (
  <span>
    <h3>Windows Server</h3>
    <Row>
      <Col md={9}>
        <p>Windows Server 2022 is an Operating System we use to provide a number of services to our client devices. We decided to use this operating system as a way to centralize the configuration of the many Raspberry Pis we use in the lab. Some other advantages includes being able to create and use shared folders, easily create and manage users and groups, allow remote access to the network, and allow backups of client and server files.</p>
        <p>The services that we have currently implemented (as of May 2023) includes DHCP, DNS, and Windows Time. Other services we plan to implement are Active Directory Services and Single Sign-On</p>
      </Col>
      <Col md={3}>
        <img src="/images/SystemAdmin/WindowsServer_SCADAWindowsServer.jpg" alt="Windows Server 2022" style={{ maxWidth: '100%' }} />
      </Col>
    </Row>
    <hr />
    <h3>Current Network Map (Updated May 2023)</h3>
    <img src="/images/SystemAdmin/WindowsServer_NetworkMap.png" alt="Windows Server Network Map" style={{ maxWidth: '50%' }} />
    <p>The image above shows the network map of the services that the Windows server provides to its clients.</p>
    <ul>
      <li>DHCP</li>
      <ul>
        <li>VLAN 1 (Disabled) - The router is responsible for providing DHCP services to this VLAN. Do not disable DHCP on the WavLink router as we&apos;ve found that there will be complications in our network if done so.</li>
        <li>VLAN 2 (Disabled) - DHCP is not enabled for this VLAN.</li>
        <li>VLAN 3 (Enabled)</li>
        <li>VLAN 4 (Enabled)</li>
      </ul>
      <li>DNS</li>
      <ul>
        <li>VLAN 1 (Disabled)</li>
        <li>VLAN 2 (Disabled)</li>
        <li>VLAN 3 (Enabled) - DHCP should automatically make a DNS entry.</li>
        <li>VLAN 4 (Enabled) - DHCP should automatically make a DNS entry.</li>
      </ul>
      <li>Time</li>
      <ul>
        <li>VLAN 1 (Disabled)</li>
        <li>VLAN 2 (Disabled)</li>
        <li>VLAN 3 (Enabled) - Clients are manually configured to synchronize time to the server.</li>
        <li>VLAN 4 (Enabled) - Clients are manually configured to synchronize time to the server.</li>
      </ul>
    </ul>
    <hr />
    <h3>Windows Server 2022 Services</h3>
    <Container className="py-3">
      <Tabs defaultActiveKey="DHCP">
        <Tab eventKey="DHCP" title="DHCP" className="py-4">
          <WindowsServerDHCP />
        </Tab>
        <Tab eventKey="DNS" title="DNS" className="py-4">
          <WindowsServerDNS />
        </Tab>
        <Tab eventKey="W32Time" title="W32Time" className="py-4">
          <WindowsServerW32Time />
        </Tab>
      </Tabs>
    </Container>
  </span>
);

export default WindowsServer;
