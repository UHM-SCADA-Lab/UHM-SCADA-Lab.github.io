import React from 'react';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap';

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
    <h3 className="pt-3">Tasking</h3>
    <p>SCADA Lab is currently utilizing GitHub&apos;s organization projects feature to organize tasking for each department. This allows us to easily add tasks and categorize them based on its current status (Todo, In Progress, or Done), which is an improvement over our previous methodology of maintaining a page on the class website. Visit the <Link to="/tasking">Tasking</Link> page for links to all of our current project pages.</p>
    <Figure>
      <Figure.Image style={{ maxWidth: '800px' }} src="/images/KnowledgeManagement/tasking.PNG" alt="Tasking page" />
      <Figure.Caption className="text-center">SCADA Lab&apos;s organization project listing</Figure.Caption>
    </Figure>
    <Figure>
      <Figure.Image style={{ maxWidth: '800px', borderStyle: 'solid' }} src="/images/KnowledgeManagement/project_example.PNG" alt="Example of project page" />
      <Figure.Caption className="text-center">Example of a team project page</Figure.Caption>
    </Figure>
  </span>
);

export default Overview;
