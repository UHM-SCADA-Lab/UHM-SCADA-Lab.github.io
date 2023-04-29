import React from 'react';

import { Container } from 'react-bootstrap';

const LocationAndAccess = () => (
  <Container className="py-3">
    <h1>Database</h1>
    <h4>Database Location</h4>
    <p>When selecting an operating system for the database a few different options were tested. The first was red hats CoreOs linux OS, the second was a fedora linux OS, ultimately a debian linux OS was chosen mainly due to the raspberry pis OS also being debian. Currently we are using a GUI version for ease of use and the option to utilize kibana. The database is currently running on a VM on meltdown and is named Castle.</p>
    <h4>Database Access</h4>
    <p>Access to database is done via ssh. The current ip address is:10.1.1.110 with the credentials: user-admin, password-Sc@d@21!. </p>
    <img src="/images/Database/puttyCastle.png" alt="Putty Castle Config" style={{ maxWidth: '400px' }} />
  </Container>
);
export default LocationAndAccess;
