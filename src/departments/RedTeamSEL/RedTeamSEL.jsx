import React from 'react';
import { Col, Container, Row, Tab, Table, Tabs } from 'react-bootstrap';
import Overview from './Overview';
import SEL451Config from './SEL451Config';
import SEL311BConfig from './SEL311BConfig';
import SELSetup from './SELSetup';
import WiringDiagram from './WiringDiagram';
import OutputTesting from './OutputTesting';
import NmapScan from './NmapScan';

const RedTeamSEL = () => (
  <Container className="py-3">
    <h1>Red Team/SEL</h1>
    <Row className="justify-content-center">
      <Col lg={8}>
        <h3>Relevant Devices</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Device</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RTAC SEL-3505</td>
              <td><a href="/pdfs/SEL3505-Manual.pdf" target="_blank" rel="noreferrer">Manual</a></td>
            </tr>
            <tr>
              <td>SEL-451</td>
              <td><a href="/pdfs/SEL451-Manual.pdf" target="_blank" rel="noreferrer">Manual</a></td>
            </tr>
            <tr>
              <td>SEL 311B</td>
              <td><td><a href="/pdfs/SEL311B-Manual.pdf" target="_blank" rel="noreferrer">Manual</a></td></td>
            </tr>
            <tr>
              <td>DL 205</td>
              <td><td><a href="/pdfs/DL205-Manual.pdf" target="_blank" rel="noreferrer">Manual</a></td></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Tabs defaultActiveKey="overview">
      <Tab eventKey="overview" title="Overview" className="py-4">
        <Overview />
      </Tab>
      <Tab eventKey="factoryReset" title="Factory Reset" className="py-4">
        <img src="/images/RedTeamSEL/factoryReset.png" alt="Factory Reset" style={{ maxWidth: '750px' }} />
      </Tab>
      <Tab eventKey="SEL451Config" title="SEL-451 Configuration" className="py-4">
        <SEL451Config />
      </Tab>
      <Tab eventKey="SEL311BConfig" title="SEL-311B Configuration" className="py-4">
        <SEL311BConfig />
      </Tab>
      <Tab eventKey="SELDemo" title="SEL Demo" className="py-4">
        <iframe
          style={{ maxWidth: '900px' }}
          src="https://www.youtube.com/embed/LlS2wIQo9GY?rel=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Tab>
      <Tab eventKey="SELSetup" title="SEL Setup" className="py-4">
        <SELSetup />
      </Tab>
      <Tab eventKey="wiringDiagram" title="Wiring Diagram" className="py-4">
        <WiringDiagram />
      </Tab>
      <Tab eventKey="outputTesting" title="Output Testing" className="py-4">
        <OutputTesting />
      </Tab>
      <Tab eventKey="nmapScan" title="Nmap Scan" className="py-4">
        <NmapScan />
      </Tab>
    </Tabs>
  </Container>
);

export default RedTeamSEL;
