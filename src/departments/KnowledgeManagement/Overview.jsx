import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => (
  <span>
    <p>We will primarily be using the React Bootstrap Framework to build and maintain the SCADA Lab website.</p>
    <h3>Development Tools</h3>
    <p>These are the standard development tools utilized by our team to develop the website.</p>
    <ul>
      <li><Link to="https://www.jetbrains.com/idea/download/">IntelliJ IDEA</Link>: Integrated Development Environment (IDE)</li>
      <li><Link to="https://desktop.github.com/">Github Desktop</Link>: Simplifies Git development workflow</li>
    </ul>
    <h3>Additional Resources</h3>
    <ul>
      <li><Link to="https://react-bootstrap.netlify.app">React Bootstrap Documentation</Link></li>
      <li><Link to="https://nodejs.org/en">Node.js Website</Link></li>
      <li><Link to="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5">freeCodeCamp HTML/CSS Tutorials</Link></li>
      <li><Link to="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript">freeCodeCamp JavaScript Tutorials</Link></li>
    </ul>
    <h3>Team Workflow</h3>
    <img src="/images/KnowledgeManagement/workflow.png" alt="Workflow diagram" style={{ maxWidth: '800px' }} />
  </span>
);

export default Overview;
