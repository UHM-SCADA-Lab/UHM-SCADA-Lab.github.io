import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Prerequisites from './Prerequisites';
import EnvironmentSetup from './EnvironmentSetup';
import Overview from './Overview';
import WhyReact from './React';
import Guides from './Guides';

const KnowledgeManagement = () => (
  <Container className="py-3">
    <h1>Knowledge Management</h1>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <Overview />
      </Tab>
      <Tab eventKey="prerequisites" title="Prerequisites" className="py-4">
        <Prerequisites />
      </Tab>
      <Tab eventKey="environmentSetup" title="Environment Setup" className="py-4">
        <EnvironmentSetup />
      </Tab>
      <Tab eventKey="guides" title="Guides" className="py-4">
        <Guides />
      </Tab>
      <Tab eventKey="whyReact" title="Website History" className="py-4">
        <WhyReact />
      </Tab>
    </Tabs>
  </Container>
);

export default KnowledgeManagement;
