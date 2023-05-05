import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Overview from './Overview';
import Inventory from './Inventory';
import PiBringUp from './PiBringUp';
import VLAN from './VLAN';
import Miscellaneous from './Miscellaneous';
import WindowsServer from './WindowsServer';
import Debian from './Debian';
import WavLink from './WavLink';
import GitHubTutorial from './GitHubTutorial';
import Legacy from './Legacy';

const SystemAdmin = () => (
  <Container className="py-3">
    <h1>System Admin</h1>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <Overview />
      </Tab>
      <Tab eventKey="inventory" title="Raspberry Pi Inventory" className="py-4">
        <Inventory />
      </Tab>
      <Tab eventKey="bringUp" title="Pi Bring Up" className="py-4">
        <PiBringUp />
      </Tab>
      <Tab eventKey="VLAN" title="VLAN" className="py-4">
        <VLAN />
      </Tab>
      <Tab eventKey="WindowsServer" title="Windows Server" className="py-4">
        <WindowsServer />
      </Tab>
      <Tab eventKey="WavLink" title="WavLink" className="py-4">
        <WavLink />
      </Tab>
      <Tab eventKey="Debian" title="Debian" className="py-4">
        <Debian />
      </Tab>
      <Tab eventKey="GitHubTutorial" title="GitHub Tutorial" className="py-4">
        <GitHubTutorial />
      </Tab>
      <Tab eventKey="Miscellaneous" title="Miscellaneous" className="py-4">
        <Miscellaneous />
      </Tab>
      <Tab eventKey="Legacy" title="Legacy" className="py-4">
        <Legacy />
      </Tab>
    </Tabs>
  </Container>
);

export default SystemAdmin;
