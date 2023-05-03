import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrentControllerTable from './Tables/CurrentControllerTable';

const CurrentController = () => (
  <Container className="py-3">
    <h2>Current SDN Controller</h2>
    <p>We are currently using the OS-Ken SDN framework, which is a maintained fork of our previously used RYU (pronounced &quot;ree-yooh&quot;) SDN framework. The two frameworks haven&apos;t diverged much, so much so that programs using either frameworks work nearly interchangeably, save for some need to replace &quot;RYU&quot; with &quot;OS-Ken&quot;.</p>
    <h4 className="pt-4">Currently Using</h4>
    <CurrentControllerTable />
    <p>RYU has some example programs located on <Link to="https://github.com/faucetsdn/ryu/tree/master/ryu/app">GitHub</Link>, which are great stubs for building a custom controller of our own. We initially based our programs on <Link to="https://github.com/faucetsdn/ryu/blob/master/ryu/app/simple_switch_13.py">simple_switch_13.py</Link>, which needs some slight modification to work with our physical switches in the lab. These RYU programs can work with os-ken, you will just need to rename imported methods from &quot;RYU&quot; to &quot;OS-Ken&quot;. See the &quot;Lab Configuration&quot; tab for controller configuration changes that are needed to interact with the HP 2920-24G network switches we use in the lab.</p>
    <h4>Launching OS-Ken</h4>
    <p>TODO: copy from RYUNotes.jsx</p>
    <h4>Programming OS-Ken</h4>
    <p>TODO: copy from RYUNotes.jsx</p>
    <p>TODO: determine how in depth I want this to be</p>
    <h4 className="pt-4">Resources</h4>
    <p>OS-Ken has a fair amount of documentation, with links to the home page and frequently visited pages below:</p>
    <ul>
      <li><Link to="https://github.com/openstack/os-ken">OS-Ken&apos;s GitHub</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/#top">OS-Ken&apos;s Documentation</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/archive.html">Archived Contents (RYU&apos;s documentation)</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/ofproto_v1_3_ref.html">OpenFlow v1.3 Messages and Structures</Link></li>
      <li><Link to="https://docs.openstack.org/os-ken/latest/library_packet_ref.html">Packet library API Reference</Link></li>
    </ul>
  </Container>
);

export default CurrentController;
