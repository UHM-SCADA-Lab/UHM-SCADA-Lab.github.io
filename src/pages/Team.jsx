import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import parse from 'html-react-parser';

const Team = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/19uHAJYPDpXzMhz6kOr7Kw-wMmjW28H0rBErGegDYUY4/values/Work%20Teams!B3:N13?valueRenderOption=FORMATTED_VALUE&key=AIzaSyAtUB_NkoudBNBzr1Zyd967cQBtWXHnMuo')
      .then(res => res.json())
      .then(
        (result) => {
          const values = Object.values(result.values);
          values.forEach(row => row.push(...(new Array(values[0].length - row.length).fill(''))));
          setIsLoaded(true);
          setItems(values);
        },
        (e) => {
          setIsLoaded(true);
          setError(e);
        },
      );
  }, []);

  if (error) {
    return (
      <Container className="py-3">
        <h3>Error: {error.message}</h3>
      </Container>
    );
  }

  if (!isLoaded) {
    return (
      <Container className="py-3">
        <h3>Loading...</h3>
      </Container>
    );
  }

  return (
    <Container className="py-3">
      <h1>In-Class Work Teams</h1>
      <p style={{ fontSize: '18px' }}>
        This table displays the members and the jobs they are responsible for.
      </p>
      <Row className="align-items-end pt-3">
        <Col>
          <h3>Operations</h3>
        </Col>
        <Col>
          <h5 className="text-end">Operations Manager: John</h5>
        </Col>
      </Row>
      <Table striped bordered responsive="xl">
        <thead>
          <tr>
            {items[0].map(item => (
              <th style={{ minWidth: '84px' }}>{parse(item.replaceAll('\n', '<br />'))}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.slice(1, 6).map(row => (
            <tr>
              {row.map(item => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="align-items-end pt-3">
        <Col>
          <h3>Research</h3>
        </Col>
        <Col>
          <h5 className="text-end">Director of Research: Justin</h5>
        </Col>
      </Row>
      <Table striped bordered responsive="xl">
        <thead>
          <tr>
            {items[0].map(item => (
              <th style={{ minWidth: '84px' }}>{parse(item.replaceAll('\n', '<br />'))}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.slice(6).map(row => (
            <tr>
              {row.map(item => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Team;
