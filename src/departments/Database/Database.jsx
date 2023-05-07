import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import Overview from './Overview';
import LocationAndAccess from './LocationAndAccess';
import Installation from './Installation';

const Database = () => (
  <Container className="py-3">
    <h1>Database</h1>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <Overview />
      </Tab>
      <Tab eventKey="LocationAndAccess" title="Location and Access" className="py-4">
        <LocationAndAccess />
      </Tab>
      <Tab eventKey="Installation" title="Installation" className="py-4">
        <Installation />
      </Tab>
    </Tabs>
  </Container>
);

export default Database;
