import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => (
  <Navbar style={{ zIndex: 10 }} className="fixed-top w-100" bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="/images/Logos/SCADA.png" alt="SCADA" style={{ height: '60px', width: 'auto' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav navbarScroll>
          <NavDropdown align="end" title="Getting Started">
            <NavDropdown.Item href="/pdfs/Inventory-Sheet.pdf" target="_blank" rel="noreferrer">Inventory Sheet</NavDropdown.Item>
            <NavDropdown.Item href="/#/toDoList">To-Do List</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown align="end" title="Team">
            <NavDropdown.Item href="/#/team">Work Teams</NavDropdown.Item>
            <NavDropdown.Item href="/#/media">Media</NavDropdown.Item>
            <NavDropdown.Item href="/#/tasking">Tasking</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown align="end" title="Equipment">
            <NavDropdown.Item href="/#/equipmentList">Equipment List</NavDropdown.Item>
            <NavDropdown.Item href="/#/configuration">Configuration</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown align="end" title="Departments">
            <NavDropdown.Header><strong>Operations</strong></NavDropdown.Header>
            <NavDropdown.Item href="/#/network">Network</NavDropdown.Item>
            <NavDropdown.Item href="/#/systemAdmin">System Admin</NavDropdown.Item>
            <NavDropdown.Item href="/#/knowledgeManagement">Knowledge Management</NavDropdown.Item>
            <NavDropdown.Item href="/#/snmp-noc">SNMP/NOC</NavDropdown.Item>
            <NavDropdown.Item href="/#/sFlow-SDN">sFlow/SDN</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Header><strong>Research</strong></NavDropdown.Header>
            <NavDropdown.Item href="/#/mlCurriculum">ML Curriculum</NavDropdown.Item>
            <NavDropdown.Item href="/#/hci">HCI</NavDropdown.Item>
            <NavDropdown.Item href="/#/database">Database</NavDropdown.Item>
            <NavDropdown.Item href="/#/redTeam-SEL">Red Team/SEL</NavDropdown.Item>
            <NavDropdown.Item href="/#/logStash">Logstash</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/#/departments">All Departments</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/#/legacy">Legacy</Nav.Link>
          <Nav.Link href="/#/future">Future</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
