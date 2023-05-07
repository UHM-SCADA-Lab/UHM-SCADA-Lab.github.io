import React from 'react';
import { Container } from 'react-bootstrap';

const Installation = () => (

  <Container className="py-3">
    <h4>Installing Elasticsearch with Debian packages</h4>
    <ul>
      <p>Run the following commands to install Elastic Search (Full documentation from elastic is in the helpful links section)</p>
      <h6>Download and install the Public Signing Key</h6>
      <li>wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg</li>
      <p> </p>
      <h6>Install the apt-transport-https package on Debian</h6>
      <li>sudo apt-get install apt-transport-https</li>
      <p> </p>
      <h6>Save the repository definition to /etc/apt/sources.list.d/elastic-8.x.list</h6>
      <li>echo &quot;deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main&quot; | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
      </li>
      <p> </p>
      <h6>Install Elasticsearch Debian package</h6>
      <li>sudo apt-get update && sudo apt-get install elasticsearch
      </li>
    </ul>
    <h4>Important info printed to screen after install</h4>
    <p>Immediately after successful installation some important information will print to the screen. This will be the only time you&#39;ll be able to access some of this information so make sure to make a copy. Most crucially the password for the superuser(defaults to elastic) will be printed. Commands for creating enrollment tokens and instructions on how to start an elasticsearch server will also printout.Below is an example of the printout.</p>
    <p>
      <p>--------------------------- Security autoconfiguration information ------------------------------</p>
      <p>Authentication and authorization are enabled.</p>
      <p>TLS for the transport and HTTP layers is enabled and configured.</p>

      <p>The generated password for the elastic built-in superuser is : afNCpfu0vuG=Qs6r-kWS</p>

      If this node should join an existing cluster, you can reconfigure this with
      <p>/usr/share/elasticsearch/bin/elasticsearch-reconfigure-node --enrollment-token &lt;token-here&gt;</p>
      After creating an enrollment token on your existing cluster.
      You can complete the following actions at any time:
      <p>Reset the password of the elastic built-in superuser with</p>

      <p>/usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic.</p>
      <p>Generate an enrollment token for Kibana instances with</p>

      <p>/usr/share/elasticseach/bin/elasticsearch-create-enrollment-token -s kibana.</p>

      <p>Generate an enrollment token for Elasticsearch nodes with</p>

      <p>/usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s node.</p>

      <p>-------------------------------------------------------------------------------------------------</p>

      <p>### NOT starting on installation, please execute the following statements to configure elasticsearch service to start automatically using systemd</p>

      <p>sudo systemctl daemon-reload</p>
      <p>sudo systemctl enable elasticsearch.service</p>
      <p>### You can start elasticsearch service by executing</p>

      <p>sudo systemctl start elasticsearch.service</p>
    </p>
    <h4>Troubleshooting</h4>
    <p>If logstash was installed first apt get will break. This will also happen to the logstash install if elasticsearch was installed first.</p>
    <p>Error:</p>
    <p>E: Conflicting values set for option Signed-By regarding source https://artifacts.elastic.co/packages/8.x/apt/ stable: /usr/share/keyrings/elasticsearch-keyring.gpg != /usr/share/keyrings/elastic-keyring.gpg  E: The list of sources could not be read.</p>
    <p>Solution:</p>
    <p>Navigated to /etc/apt/sources.list.d/ and deleted both keyrings then restarted installation</p>
  </Container>

);
export default Installation;
