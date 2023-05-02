import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SDNResources = () => (
  <Container className="py-3">
    <h2>SDN Resources</h2>
    <p>TODO: extend list of resources, these should focus on SDN as a whole, see &quot;Current SDN Controller&quot; tab for resources specific to OS-Ken.</p>
    <h4 className="pt-4">Helpful Links</h4>
    <ul>
      <li><Link to="https://www.youtube.com/watch?v=Z5Gi2Bpd82M">Software Defined Network</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/OpenFlow">Openflow Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/Software-defined_networking">SDN Explanation</Link></li>
      <li><Link to="https://opennetworking.org/">Open Networking Explanation</Link></li>
      <li><Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">List of SDN Platforms</Link></li>
      <li><Link to="https://opennetworking.org/wp-content/uploads/2014/10/openflow-spec-v1.3.0.pdf">OpenFlow Specification</Link></li>
    </ul>
  </Container>
);

export default SDNResources;
