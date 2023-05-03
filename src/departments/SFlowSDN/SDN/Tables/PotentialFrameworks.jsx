import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RYUNotes from '../RYUNotes';

const PotentialFrameworks = () => (
  <Table striped bordered responsive="xl">
    <thead>
      <tr>
        <th>Controller Name</th>
        <th>Status</th>
        <th>OS/Platform</th>
        <th>Derived From</th>
        <th>License</th>
        <th>Developed In</th>
        <th>Download</th>
        <th>Pros</th>
        <th>Cons</th>
        <th>Legacy Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><Link to="https://ryu-sdn.org/sdn_sflow.html">RYU Controller</Link></td>
        <td>Active - Release 4.34</td>
        <td>Ubuntu (16.04 LTS or later)</td>
        <td>N/A</td>
        <td>Apache 2.0</td>
        <td>Python</td>
        <td><Link to="https://github.com/faucetsdn/ryu">Download</Link></td>
        <td>Previously used SDN Controller, the current OS-Ken framework is a fork of RYU that hasn&apos;t diverged too much</td>
        <td>Not being maintained</td>
        <td><RYUNotes /></td>
      </tr>
      <tr>
        <td><Link to="https://githubhelp.com/superkkt/cherry">Cherry</Link></td>
        <td>Active 0.14.2</td>
        <td>Windows/OS/Linux</td>
        <td>N/A</td>
        <td>GPL-2.0</td>
        <td>Go</td>
        <td><Link to="https://docs.docker.com/installation/">Docker</Link><Link to="https://golang.org/doc/install">Go Language</Link></td>
        <td>-</td>
        <td>Not well documented, requires a MySQL database, written in Go</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Link to="https://floodlight.atlassian.net/wiki/spaces/floodlightcontroller/overview">Floodlight</Link></td>
        <td>Active-1.2</td>
        <td>Linux, Mac OS X 10.6 or higher, Windows</td>
        <td>OpenFlow</td>
        <td>Apache 2.0</td>
        <td>Java</td>
        <td><Link to="https://github.com/floodlight/floodlight">Download</Link></td>
        <td>Has a Web GUI that can write to the controller, Well documented</td>
        <td>Written in Java</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Link to="https://lighty.io/">Lighty-Core (lighty.io)</Link></td>
        <td>Active - 15.2.0</td>
        <td>Can run on Linux</td>
        <td>OpenDaylight</td>
        <td>EPL 1.0</td>
        <td>Java</td>
        <td><Link to="https://github.com/PANTHEONtech/lighty">Download</Link></td>
        <td>-</td>
        <td>Written in Java, okay documentation (does not seem entry level)</td>
        <td>-</td>
      </tr>
      <tr>
        <td><Link to="https://wiki.onosproject.org/display/ONOS/">ONOS</Link></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>Java</td>
        <td>-</td>
        <td>Has CLI (ssh capability), has a Web GUI, very well documented</td>
        <td>Written in Java, may not work on a raspberry PI</td>
        <td>-</td>
      </tr>
    </tbody>
  </Table>
);

export default PotentialFrameworks;
