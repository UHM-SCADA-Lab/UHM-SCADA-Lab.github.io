import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RuledOutFrameworks from './Tables/RuledOutFrameworks';
import PotentialFrameworks from './Tables/PotentialFrameworks';

const LegacyControllerResearch = () => (
  <Container className="py-3">
    <h2>Legacy Controller Research</h2>
    <p> At the start of the Spring 2022 semester, everyone in the lab was assigned an SDN controller framework from the list on <Link to="https://en.wikipedia.org/wiki/List_of_SDN_controller_software">this wikipedia article</Link>. There were some basic criteria to guide our decision, such as:</p>
    <ul>
      <li>Is written in Python, or a programming language that is easy to read, easy to use, and is already known by mostly everyone in the lab.</li>
      <li>Uses OpenFlow version 1.3, which is compatible with the HP 2920-24G network switches we use in the lab.</li>
      <li>Is lightweight such that it is able to run comfortably on a Raspberry PI, the main computing device in the lab.</li>
    </ul>
    <p>These frameworks are split into two categories, &quot;Potential Frameworks&quot;, which are frameworks that still have potential to be used in the lab, but haven&apos;t proved to be better than the currently used framework, and &quot;Ruled-Out Frameworks&quot;, which are frameworks that have been determined to have very little or no potential to be used in the lab.</p>
    <h4 className="pt-4">Potential Frameworks</h4>
    <PotentialFrameworks />
    <h4 className="pt-4">Ruled-Out Frameworks</h4>
    <RuledOutFrameworks />
    <p>Note: these tables were originally filled in by students new to both the SCADA lab and software defined networking. Please be aware that software defined networking is a difficult concept to understand so these tables may not have the most comprehensive or accurate information.</p>
  </Container>
);

export default LegacyControllerResearch;
