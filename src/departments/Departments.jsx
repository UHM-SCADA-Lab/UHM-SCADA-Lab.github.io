import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Departments = () => (
  <Container id="departments" className="py-3">
    <h1 className="text-center">Operations Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <Link to="/network">
          <img src="/images/Departments/Network.png" alt="Network Department" />
          <h1><Badge bg="secondary">Network</Badge></h1>
        </Link>
      </Col>
      <Col className="text-center py-4">
        <Link to="/systemAdmin">
          <img src="/images/Departments/SystemAdmin.jpg" alt="System Admin Department" />
          <h1><Badge bg="secondary">System Admin</Badge></h1>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <Link to="/knowledgeManagement">
          <img src="/images/Departments/KnowledgeManagement.jpg" alt="Knowledge Management Department" />
          <h1><Badge bg="secondary">Knowledge Management</Badge></h1>
        </Link>
      </Col>
      <Col className="text-center py-4">
        <Link to="/snmp-noc">
          <img src="/images/Departments/snmp-noc.jpg" alt="SNMP/NOC Department" />
          <h1><Badge bg="secondary">SNMP/NOC</Badge></h1>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <Link to="/sFlow-SDN">
          <img src="/images/Departments/SFlow-SDN.jpg" alt="sFlow & SDN Department" />
          <h1><Badge bg="secondary">sFlow & SDN</Badge></h1>
        </Link>
      </Col>
    </Row>
    <h1 className="text-center pt-5">Research Departments</h1>
    <Row>
      <Col className="text-center py-4">
        <Link to="/mlCurriculum">
          <img src="/images/Departments/MachineLearning.png" alt="ML Curriculum Department" />
          <h1><Badge bg="secondary">ML Curriculum</Badge></h1>
        </Link>
      </Col>
      <Col className="text-center py-4">
        <Link to="/hci">
          <img src="/images/Departments/HCI.jpg" alt="HCI Department" />
          <h1><Badge bg="secondary">HCI</Badge></h1>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <Link to="/database">
          <img src="/images/Departments/Database.png" alt="Database Department" />
          <h1><Badge bg="secondary">Database</Badge></h1>
        </Link>
      </Col>
      <Col className="text-center py-4">
        <Link to="/redTeam-SEL">
          <img src="/images/Departments/RedTeam-SEL.png" alt="Red Team/SEL Department" />
          <h1><Badge bg="secondary">Red Team/SEL</Badge></h1>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col className="text-center py-4">
        <Link to="/logStash">
          <img src="/images/Departments/Logstash.png" alt="Logstash Department" />
          <h1><Badge bg="secondary">Logstash</Badge></h1>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Departments;
