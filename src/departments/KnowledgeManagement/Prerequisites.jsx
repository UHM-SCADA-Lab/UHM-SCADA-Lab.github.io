import React from 'react';
import { Link } from 'react-router-dom';

const Prerequisites = () => (
  <span>
    <h3>Install IntelliJ IDEA</h3>
    <ol>
      <h5><li>Sign up for free JetBrains Educational License</li></h5>
      <ul>
        <li>Go to <Link to="https://www.jetbrains.com/student">https://www.jetbrains.com/student</Link> and click the &quot;Apply Now&quot; button to obtain a free student license for IntelliJ IDEA.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/JetBrainsLicense.png" alt="Jet Brains License" style={{ maxWidth: '600px' }} />
      </ul>
      <h5><li>Download IntelliJ IDEA Ultimate</li></h5>
      <ul>
        <li>Download the latest release of IntelliJ IDEA Ultimate from <Link to="https://www.jetbrains.com/idea/download/">https://www.jetbrains.com/idea/download/</Link>.</li>
        <li>Upon startup, it will ask for your JetBrains login credentials in order to verify your license.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/IntelliJIDEAUltimate.png" alt="IntelliJ IDEA Ultimate" style={{ maxWidth: '600px' }} />
      </ul>
      <h5><li>General Configuration</li></h5>
      <ol type="a">
        <h5><li>Projects Tab</li></h5>
        <ul>
          <li>This is the first screen that will appear when you start up IntelliJ IDEA for the first time.</li>
          <img className="pt-2" src="/images/KnowledgeManagement/ProjectsTab.png" alt="Projects Tab" style={{ maxWidth: '500px' }} />
        </ul>
        <h5><li>Customize Tab</li></h5>
        <ul>
          <li>Change the appearance of IntelliJ IDEA to your liking.</li>
          <img className="pt-2" src="/images/KnowledgeManagement/CustomizeTab.png" alt="Customize Tab" style={{ maxWidth: '500px' }} />
        </ul>
        <h5><li>Plugins Tab</li></h5>
        <ul>
          <li>Click on the &quot;Installed&quot; tab to see the list of installed plugins.</li>
          <li>It is up to you to choose which of the plugins to have enabled; however, many of them are not necessary for the class and can increase IntelliJ&apos;s startup time.</li>
          <li>Our personal preference is to disable all plugins except for the following:</li>
          <ul>
            <li>HTML Tools</li>
            <li>JavaScript and TypeScript</li>
            <li>JavaScript Debugger</li>
            <li>CSS</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Terminal</li>
          </ul>
          <img className="pt-2" src="/images/KnowledgeManagement/PluginsTab.png" alt="Plugins Tab" style={{ maxWidth: '500px' }} />
        </ul>
      </ol>
      <h5><li>Code Styling</li></h5>
      <ul>
        <li>To keep the code formatting consistent for the whole class, we use a code style preferences file, which you can download <a href="/Code-Style.xml" download>here</a>.</li>
        <li>Under Preferences &gt; Editor &gt; Code Style, click the &quot;Settings&quot; icon, then &quot;Import Scheme&quot;, and select the downloaded Code-Style.xml to import it.</li>
        <li>Click &quot;Apply&quot; to save these changes.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/CodeStyling.png" alt="Code Styling" style={{ maxWidth: '500px' }} />
      </ul>
      <h5><li>Enable Soft Wrap</li></h5>
      <ul>
        <li>Soft wrap allows you to resize your screen and still see all text, and eliminates the need for horizontal scrolling.</li>
        <li>Under Preferences &gt; Editor &gt; General, configure the &quot;Soft Wraps&quot; section:</li>
        <ul>
          <li>Enable the &quot;Soft-wrap these files&quot; option and add a single asterisk * to soft wrap all files.</li>
          <li>Enable the &quot;Only show soft-wrap indicators for the current line&quot; option.</li>
        </ul>
        <li>Click &quot;Apply&quot; to save these changes.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/SoftWrap.png" alt="Soft Wrap" style={{ maxWidth: '500px' }} />
      </ul>
    </ol>
    <h3>Install GitHub Desktop</h3>
    <ul>
      <li>Download GitHub Desktop from <Link to="https://desktop.github.com/">https://desktop.github.com/</Link>.</li>
      <img className="pt-2" src="/images/KnowledgeManagement/GitHubDesktop-1.png" alt="GitHub Desktop 1" style={{ maxWidth: '600px' }} />
    </ul>
    <ul>
      <li>Make sure to set External Editor to IntelliJ IDEA.</li>
      <img className="pt-2" src="/images/KnowledgeManagement/GitHubDesktop-2.png" alt="GitHub Desktop 2" style={{ maxWidth: '500px' }} />
    </ul>
    <h3>Install Node.js</h3>
    <ul>
      <li>Download the latest LTS version of Node.js from <Link to="https://nodejs.org/en/download">https://nodejs.org/en/download</Link>.</li>
      <img className="pt-2" src="/images/KnowledgeManagement/NodeJS.png" alt="Node.js" style={{ maxWidth: '600px' }} />
    </ul>
  </span>
);

export default Prerequisites;
