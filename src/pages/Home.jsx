import React from 'react';
import { Carousel, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container className="py-3">
    <h1 className="text-center py-3">WELCOME TO SCADA LAB</h1>
    <Row className="justify-content-center">
      <Col lg={7}>
        <Carousel id="ImageCarousel">
          <Carousel.Item>
            <img src="/images/Home/Carousel_1.jpeg" alt="Carousel 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Home/Carousel_2.jpeg" alt="Carousel 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Home/Carousel_3.jpeg" alt="Carousel 3" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/Home/Carousel_4.jpeg" alt="Carousel 4" />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
    <Row className="justify-content-center pt-5">
      <Col lg={10}>
        <h1 className="text-center">About the SCADA Lab</h1>
        <p>
          We are going to stand up a small, remote SCADA system. Students will familiarize themselves with the equipment, design & build the lab, then analyze and identify critical cyber terrain. Based on this analysis, students will deploy sensors on the remote network to flow data to a signature-based IDS (Intrusion Detection System). As a class, we will then use AI/ML techniques to automatically create both permissive and restrictive signatures on the remote SCADA network. A second goal of this lab is to explore tools, techniques and procedures for administering legacy SCADA equipment using Zero-Trust processes.
        </p>
      </Col>
    </Row>
    <Row className="justify-content-center pt-5">
      <Col lg={10}>
        <h1 className="text-center">Department Roles</h1>
        <h3>Operations</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/network">Network</Link></td>
              <td>Configure the network, maintain network equipment</td>
            </tr>
            <tr>
              <td><Link to="/systemAdmin">System Admin</Link></td>
              <td>Program and maintain Raspberry Pis</td>
            </tr>
            <tr>
              <td><Link to="/knowledgeManagement">Knowledge Management</Link></td>
              <td>Maintain the website, write procedures for lab members</td>
            </tr>
            <tr>
              <td><Link to="/snmp-noc">SNMP/NOC</Link></td>
              <td>Under Construction</td>
            </tr>
            <tr>
              <td><Link to="/sFlow-SDN">sFlow & SDN</Link></td>
              <td>Under Construction</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="pt-3">Research</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/mlCurriculum">ML Curriculum</Link></td>
              <td>Research and implement a machine learning algorithm to make risk-based decision for the SDN controller.</td>
            </tr>
            <tr>
              <td><Link to="/hci">HCI</Link></td>
              <td>Create and maintain multiple human computer interfaces to enable stronger control over and awareness of the SCADA lab status.</td>
            </tr>
            <tr>
              <td><Link to="/database">Database</Link></td>
              <td>Create and maintain an elaseticsearch database that stores and organizes monitoring data from the SCADA lab.</td>
            </tr>
            <tr>
              <td><Link to="/redTeam-SEL">Red Team/SEL</Link></td>
              <td>Research and operate SEL switching devices, connect and exchange communication within SEL devices</td>
            </tr>
            <tr>
              <td><Link to="/logStash">Logstash</Link></td>
              <td>Create pipline&#39;s from data sources (i.e. panic button) to the database.</td>
            </tr>
          </tbody>
        </Table>
        <h3 className="pt-3">Previous Departments</h3>
        <Table striped bordered>
          <thead>
            <tr>
              <th width="30%">Department</th>
              <th>Role Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/rf">Radio Frequency</Link></td>
              <td>Establish and maintain RF communication between buildings</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default Home;
