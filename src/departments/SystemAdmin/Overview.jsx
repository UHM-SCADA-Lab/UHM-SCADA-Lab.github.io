import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const Overview = () => (
  <span>
    <h3>Welcome</h3>
    <Row>
      <Col md={8}>
        <p>The System Administration department is responsible for managing and maintaining the overall health, stability, and security of the SCADA network. This includes system configuration and maintenance for all Raspberry Pis and the Windows server, user account management, backup and disaster recovery, regular system updates, performance tuning, troubleshooting and issue resolution, documentation and reporting, system planning, and system improvement.</p>
      </Col>
      <Col md={4}>
        <img src="/images/SystemAdmin/Overview_Server_Room.jpg" alt="Server Room" style={{ maxWidth: '80%' }} />
      </Col>
    </Row>
    <p>Our team is currently made up of two EE496 students and one EE396 student.</p>
    <hr />
    <h3>Our Goal for Spring 2023</h3>
    <p>Our goal for spring 2023 is to stand up a windows server that would optimize the configuration process for the Raspberry Pis and other devices in the lab. The services we will choose to implement are: Active Directory, DHCP, DNS, and NTP. If time permits, we will also implement single sign-on using a PAM module with LDAP.</p>
    <hr />
    <Row>
      <Col>
        <h3>Current Tasks (Spring 2023)</h3>
        <ul>
          <li>Work on the Windows Server</li>
          <ul>
            <li>Implement Single Sign-on (SSO) using a Pluggable authentication module (PAM) module and Lightweight Directory Access Protocol (LDAP)</li>
          </ul>
          <li>Assist the network department in rolling out SNMP related configuration</li>
          <li>Work on Deliverables</li>
          <ul>
            <li>Work on powerpoint slides</li>
            <li>Work on the website</li>
          </ul>
        </ul>
      </Col>
      <Col>
        <h3>Equipment</h3>
        <ul>
          <li>Mac Mini (2018) - 6-Core Intel Core i7, 32GB Memory, 2TB SSD Storage</li>
          <ul>
            <li>VMware Fusion</li>
            <ul>
              <li>ArchLinux</li>
              <li>Castle (Debian)</li>
              <li>Windows Server 2022</li>
              <li>Windows 11</li>
            </ul>
          </ul>
          <li>Raspberry Pi 3</li>
          <ul>
            <li>18 Active Pis</li>
            <li>4 Reserve Pis</li>
          </ul>
        </ul>
      </Col>
    </Row>
    <hr />
    <h3>Useful Commands and Resources</h3>
    <ul>
      <li>Note: Commands prefixed with # require root access, and commands prefixed with $ do not require root access.</li>
      <li>$ sudo bash: gets root access</li>
      <li># sudo bash: stacks a new instance of bash. When you # exit will jump back to previous instance</li>
      <li>$ sudo shutdown -r 0: shutdown then reboots.</li>
      <li>$ sudo shutdown -h 0: halts all processes and shuts down.</li>
      <li>$ cat /path/to/file: prints file contents to console.</li>
      <li>$ ifconfig : prints out network interfaces. (IPs assigned to PI, VLAN membership, MAC address, etc.)</li>
      <li>$ arp -a: prints out devices on network using ARP (Address resolution protocol).</li>
      <li>$ vim /path/to/file: edits file using Vim, a console-based text editor.</li>
      <ul>
        <li>$ vimtutor: program that teaches the basics of how to use Vim.</li>
      </ul>
      <li>$ function &gt; textfile.txt stores function&apos;s console output to a textfile textfile.txt</li>
      <li>
        <Link to="https://www.raspberrypi.com/">Raspberry Pi Homepage</Link>
      </li>
      <li>
        <Link to="https://www.raspberrypi.com/documentation/">Raspberry Pi Documentation</Link>
      </li>
    </ul>
  </span>
);

export default Overview;
