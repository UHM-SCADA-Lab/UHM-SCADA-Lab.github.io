import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = () => (
  <Container className="py-3">
    <h4>Three parts of an elasticsearch database</h4>
    <p>Below is a brief description of the components of an elasticsearch database, they work together to create a functional and feature rich database (ELK Stack)</p>
    <p><b>Elasticsearch</b>: A java-based application that stores, organizes and searches unstructured data.</p>
    <p><b>Logstash</b>: Transforms and filters data, then sends it to Elasticsearch for storage</p>
    <p><b>Kibana</b>: An analytical engine that visualizes the data stored in elastic search. It can also be used as a GUI for monitoring and managing the database.</p>
    <h4>Purpose of the database</h4>
    <p>The main purpose of the database is to transition the SCADA lab into risk based access. The Diagrams below illustrate the transition. </p>
    <img src="/images/Database/PhaseZero.png" alt="Phase Zero" style={{ maxWidth: '400px' }} />
    <b>&#x2192;</b>
    <img src="/images/Database/PhaseTwo.png" alt="Phase Two" style={{ maxWidth: '400px' }} />
    <h4>ElasticSearch Helpful Links</h4>
    <Row>
      <Col>
        <ul>
          <li><Link to="https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html">Installing Elasticsearch</Link></li>
          <li><Link to="https://www.elastic.co/guide/en/elasticsearch/reference/current/settings.html">Elasticsearch Configurations</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=wisXOgaTEU8">Real Time Python Log ingestion with Logstash & ELK | Demo (Video)</Link></li>
          <li><Link to="https://pypi.org/project/python-logstash/">Python logging handler for Logstash</Link></li>
          <li><Link to="https://www.youtube.com/watch?v=G2TUmPZ1slw&list=PLVx1qovxj-amb-8M_3Ccdl1eczvbJzkwT&index=10">Creating a basic pipeline (video)</Link></li>
        </ul>
      </Col>
    </Row>

  </Container>
);

export default Overview;
