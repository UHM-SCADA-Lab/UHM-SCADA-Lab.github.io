import React from 'react';
import { Link } from 'react-router-dom';

const EnvironmentSetup = () => (
  <span>
    <p><em><u>Note: You only need to do this process once!</u></em></p>
    <h3>Install Repo on Local Machine</h3>
    <ol>
      <h5><li>Open the SCADA Lab Repo</li></h5>
      <ul>
        <li><Link to="https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io">https://github.com/UHM-SCADA-Lab/UHM-SCADA-Lab.github.io</Link></li>
        <img className="pt-2" src="/images/KnowledgeManagement/Repo.png" alt="Repo" style={{ maxWidth: '600px' }} />
      </ul>
      <h5><li>Create a Fork of the Repo</li></h5>
      <ul>
        <li>Under the &quot;Fork&quot; button, select &quot;Create a new fork&quot;.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/Fork-1.png" alt="Fork 1" style={{ maxWidth: '600px' }} />
      </ul>
      <ul>
        <li className="pt-2">The repo name doesn&apos;t matter, but make sure to enable &quot;Copy the main branch only&quot;.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/Fork-2.png" alt="Fork 2" style={{ maxWidth: '600px' }} />
      </ul>
      <h5><li>Open Your Repo in GitHub Desktop</li></h5>
      <ul>
        <li>Under the &quot;Code&quot; button, select &quot;Open with GitHub Desktop&quot;.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/Clone-1.png" alt="Clone 1" style={{ maxWidth: '600px' }} />
      </ul>
      <ul>
        <li className="pt-2">In GitHub Desktop, click &quot;Clone&quot; to install the repo on your local machine.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/Clone-2.png" alt="Clone 2" style={{ maxWidth: '500px' }} />
      </ul>
      <ul>
        <li className="pt-2">Make sure &quot;To contribute to the parent project&quot; is selected and then click &quot;Continue&quot;.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/Clone-3.png" alt="Clone 3" style={{ maxWidth: '500px' }} />
      </ul>
      <h5><li>Open the Repo in IntelliJ IDEA</li></h5>
      <ul>
        <li>Click &quot;Open in IntelliJ&quot;</li>
        <img className="pt-2" src="/images/KnowledgeManagement/OpenRepo.png" alt="Open Repo" style={{ maxWidth: '500px' }} />
      </ul>
      <h5><li>Run &quot;npm install&quot;</li></h5>
      <ul>
        <li>Click &quot;run &apos;npm install&apos;&quot; in the bottom right.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/NPMInstall-1.png" alt="NPM Install 1" style={{ maxWidth: '600px' }} />
        <li className="pt-2">If you accidentally close the prompt, open &quot;Terminal&quot; in the bottom left and run <code>npm install</code>.</li>
        <img className="pt-2" src="/images/KnowledgeManagement/NPMInstall-2.png" alt="NPM Install 2" style={{ maxWidth: '600px' }} />
        <li className="pt-2">You should see similar results to the following image:</li>
        <img className="pt-2" src="/images/KnowledgeManagement/NPMInstall-3.png" alt="NPM Install 3" style={{ maxWidth: '600px' }} />
      </ul>
    </ol>
  </span>
);

export default EnvironmentSetup;
