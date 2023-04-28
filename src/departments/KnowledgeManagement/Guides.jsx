import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Guides = () => (
  <span>
    <h2>User Guides</h2>
    <h3 className="pt-3">Updating a Fork</h3>
    <p>To ensure that your fork is up to date, click <em>Sync fork</em> on your fork&apos;s Github page to retrieve any changes from the main repo to your fork.</p>
    <img src="/images/KnowledgeManagement/syncfork.png" alt="Sync Fork" style={{ maxWidth: '800px' }} />
    <p className="pt-2">On Github Desktop, open your forked repository and make sure to click <em>Fetch origin</em> (or <em>Fetch upstream</em>, depending on your setup). This will update your local copy of the repository with all the latest changes.</p>
    <img src="/images/KnowledgeManagement/fetchUpstream.png" alt="Fetch Upstream" style={{ maxWidth: '600px' }} />
    <h3 className="pt-4">Creating a New Page</h3>
    <p><u>BEFORE ADDING ANY CHANGES, PLEASE MAKE SURE YOUR FORK IS UP TO DATE WITH THE MAIN REPOSITORY AS DETAILED IN THE SECTION ABOVE.</u> This ensures that there will be minimal merge conflicts when the webmaster approves your updates.</p>
    <p>Once you have verified that your fork and local copy are up to date, you can begin making edits. To add a new page to the website, create a new file <code>FILENAME.jsx</code> and store it in the appropriate directory. For example,
      this page is found in the <code>KnowledgeManagement.jsx</code> file in the <code>src/departments/</code> directory.
    </p>
    <p>To ensure consistent formatting across the entire website, each page should have the following template:</p>
    <Row className="justify-content-center pb-3">
      <Col lg={4} className="border border-secondary">
        <pre>
          {`
import React from 'react';

const FILENAME = () => (
  <Container className="py-3">
    <h1>Page Title</h1>
    
    // Other content...
    
  </Container>
);

export default [FILENAME];`}
        </pre>
      </Col>
    </Row>
    <p>To create a link to this page, navigate to the <code>src/App.jsx</code> file and create a new route.</p>
    <Row className="justify-content-center pb-3">
      <Col lg={6} className="border border-secondary">
        <pre>
          {`
import...
import FILENAME from 'FILEPATH'

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        ...
        
        <Route path="/PATH" element={<FILENAME />} />
        
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
`}
        </pre>
      </Col>
    </Row>
    <p>
      You can then direct users to this page through a link:
    </p>
    <pre>{'   <Link to="/PATH">Link to Page</Link>'}</pre>
    <p>which will appear as <Link to="/PATH">Link to Page</Link>.</p>
    <h3 className="pt-2">Previewing a Page in React</h3>
    <p><em>Before you proceed, you will need to make sure that you follow the steps listed in the <strong>Environment Setup</strong> tab.</em></p>
    <p>At this point, <code>npm install</code> should have already been run, meaning that all the necessary files for the website&apos;s React application should be installed on your local machine. To compile and start up the application, run <code>npm start</code>. It should look similar to the image below.</p>
    <img src="/images/KnowledgeManagement/npm_start.png" alt="npm start" style={{ maxWidth: '800px' }} />
    <p className="pt-2">You should now see a live preview of your website! You should either see a new tab open in your browser that displays the application, or you can visit the URL listed in the console (In the case of the example screenshot above, the URL is <code>http://localhost:3000</code>).</p>
    <h3 className="pt-2">React Bootstrap Tips</h3>
    <p><em><strong>Important note:</strong> Borders and titles are added for visualization purposes.</em></p>
    <h4>Grid Layout</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Container>                     // Container
  <Row>                         // Row 1
    <Col>Column 1 of 3</Col>
    <Col>Column 2 of 3</Col>
    <Col>Column 3 of 3</Col>
  </Row>
  <Row>                         // Row 2
    <Col>Column 1 of 3</Col>
    <Col>Column 2 of 3</Col>
    <Col>Column 3 of 3</Col>
  </Row>
</Container>
`}
        </pre>
      </Col>
      <Col className="example">
        <Container>
          <p className="mb-0">Container</p>
          <Row>
            <p className="mb-0">Row 1</p>
            <Col>Column 1 of 3</Col>
            <Col>Column 2 of 3</Col>
            <Col>Column 3 of 3</Col>
          </Row>
          <Row>
            <p className="mb-0">Row 2</p>
            <Col>Column 1 of 3</Col>
            <Col>Column 2 of 3</Col>
            <Col>Column 3 of 3</Col>
          </Row>
        </Container>
      </Col>
    </Row>
    <h4>Horizontal Alignment</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Container>
  <Row className="justify-content-start">
    <Col>Box 1</Col>
  </Row>
  <Row className="justify-content-center">
    <Col>Box 2</Col>
  </Row>
  <Row className="justify-content-end">
    <Col>Box 3</Col>
  </Row>
</Container>
          `}
        </pre>
      </Col>
      <Col className="example">
        <Container>
          <Row className="justify-content-start">
            <Col xs={2}>Box 1</Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={2}>Box 2</Col>
          </Row>
          <Row className="justify-content-end">
            <Col xs={2}>Box 3</Col>
          </Row>
        </Container>
      </Col>
    </Row>
    <h4>Vertical Alignment</h4>
    <Row className="justify-content-center pb-3">
      <Col lg={5}>
        <pre>
          {`<Row className="align-items-start">
  <Col>Box 1</Col>
</Row>
<Row className="align-items-center">
  <Col>Box 2</Col>
</Row>
<Row className="align-items-end">
  <Col>Box 3</Col>
</Row>
      `}
        </pre>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-start">
          <Col style={{ height: 'auto' }}>Box 1</Col>
        </Row>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-center">
          <Col style={{ height: 'auto' }}>Box 2</Col>
        </Row>
      </Col>
      <Col className="example">
        <Row style={{ height: '150px' }} className="align-items-end">
          <Col style={{ height: 'auto' }}>Box 3</Col>
        </Row>
      </Col>
    </Row>
    <hr />
    <h2>Administrator Guides</h2>
    <h3 className="pt-3">Publishing New Changes</h3>
    <p>After any updates have been pushed to the repository, GitHub Pages also needs to be updated by the administrator so that the changes are visible on the website. To do this, run <code>npm run deploy</code> in the terminal. <em>Don&apos;t forget that Node.js should be installed on your device and that </em><code>npm install</code> <em>should have already been run!</em></p>
    <img style={{ width: '100%', maxWidth: '600px' }} src="/images/KnowledgeManagement/npm_deploy.PNG" alt="Output when deploying website" />
  </span>
);

export default Guides;
