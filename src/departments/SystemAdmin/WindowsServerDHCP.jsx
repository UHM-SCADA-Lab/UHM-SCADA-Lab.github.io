import React from 'react';
import { Link } from 'react-router-dom';

const WindowsServerDHCP = () => (
  <span>
    <h3><u>Dynamic Host Configuration Protocol (DHCP) Service</u></h3>
    <p>DHCP is a network management protocol used to automatically assign an IP address to clients in a given network. The main advantage of the DHCP service is that it offers a way to centrally manage the IP addresses in the network. This makes configuring new devices easier and makes IP address allocation more flexible. We are also able to statically assign IP addresses to devices with the use of their MAC address. This is ideal in the case where we would want reliable access to a device. For example, it would be ideal to statically assign an IP address to a database Raspberry Pi, such that another device (i.e. the Machine Learning Pi) would have a consistent and reliable stream of data. In the case of a power outage and restoration, the DHCP server is able to assign the same IP addresses to the devices and quickly restore the flow of data without much intervention. Additionally, we are able to edit the DHCP service configuration for each VLAN to choose which Windows services (i.e. DNS, W32Time, etc.) we would like to implement for a given VLAN.</p>
    <hr />
    <h4>How to add DHCP credentials to VLAN 4</h4>
    <h5>Note: This step is crucial as DHCP won&apos;t work unless you add in the proper credentials.</h5>
    <ol>
      <li>Open Server Manager. </li>
      <li>On the top right under &quot;Tools&quot;, click on DHCP.</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Static_1.png" alt="Adding Credentials step 1-2" style={{ maxWidth: '75%' }} />
      <li>On the left window, navigate to: win-surf.scada.lab &gt; IPv4</li>
      <li>Right click IPv4 and select properties</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Credentials_2.png" alt="Adding Credentials step 3-4" style={{ maxWidth: '25%' }} />
      <li>Click on the advanced tab and click on the &quot;Credentials...&quot; button</li>
      <li>Enter the administrator credentials in the form & the proper domain (win-surf.scada.lab). You may have to refer to the Active Directory Users and Computers window to verify if the user exists.</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Credentials_3.png" alt="Adding Credentials step 5-6" style={{ maxWidth: '25%' }} />
      <li>Click on ok and apply</li>
      <li>DHCP should now be able to work properly. If it doesn&apos;t work, check event viewer&apos;s Windows Log &gt; System and look for an error with the event ID 1059. If it shows up, you may have put in the wrong credentials. Otherwise, further troubleshooting may be needed.</li>
    </ol>
    <hr />
    <h4>How to reserve an IP address (Static IP)</h4>
    <h5>Note: DHCP is currently enabled for only VLAN 3 and VLAN 4 (as of Apr 2023). Refer to the network map for more information.</h5>
    <ol>
      <li>Open Server Manager. </li>
      <li>On the top right under &quot;Tools&quot;, click on DHCP.</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Static_1.png" alt="Setting Static IP step 1-2" style={{ maxWidth: '75%' }} />
      <li>On the left window, navigate to: win-surf.scada.lab &gt; IPv4</li>
      <li>Double click the scope you wish to set up static IP address (i.e. 10.1.44.0).</li>
      <li>Double click on &quot;Reservations&quot;.</li>
      <li>On the rightmost window, click on &quot;More Actions&quot; and select &quot;New Reservation&quot;.</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Static_2.png" alt="Setting Static IP step 3-6" style={{ maxWidth: '75%' }} />
      <li>Enter the hostname of the device under the &quot;Reservation name&quot; field.</li>
      <li>Enter the desired static ip address of the device you wish to add.</li>
      <li>Enter the MAC address of the device to be added (i.e. 00-B0-D0-63-C2-26).</li>
      <li>Add appropriate description of the device (If applicable).</li>
      <li>Choose &quot;DHCP&quot; under &quot;supported types&quot;.</li>
      <li>When finished, click on the &quot;Add&quot; button.</li>
      <img src="/images/SystemAdmin/WindowsServer_DHCP_Static_3.png" alt="Setting Static IP step 7-12" style={{ maxWidth: '25%' }} />
      <li><Link to="https://docs.google.com/spreadsheets/d/1fkD1ihLW496p8tQhlRT4OwzG7a3ZOo4inUt4FP8itMg/edit#gid=1142814304"><p>Make sure to update the &quot;SCADA_Switch Ports,IPs,VLANs&quot; spreadsheet.</p></Link></li>
    </ol>
    <hr />
    <h4>DHCP Service Resources</h4>
    <ul>
      <li><Link to="https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/install-configure-dhcp-server-workgroup"><h6>Installing and Configuring DHCP</h6></Link></li>
      <li><Link to="https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/event-1056-install-dhcp-server-service"><h6>Event ID 1056 is logged after installing DHCP (Event Viewer)</h6></Link></li>
    </ul>
  </span>
);

export default WindowsServerDHCP;
