import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import SDN from './SDN/SDN';
import SFlow from './SFlow/SFlow';

const SFlowSDN = () => (
  <Container className="py-3">
    <h1>sFlow & SDN</h1>
    <Tabs defaultActiveKey="sFlow">
      <Tab eventKey="sFlow" title="sFlow" className="py-4">
        <SFlow />
      </Tab>
      <Tab eventKey="SDN" title="SDN" className="py-4">
        <SDN />
      </Tab>
    </Tabs>
  </Container>
);

export default SFlowSDN;
