import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const VLAN = () => (
  <span>
    <h3>What are VLANS</h3>
    <p>VLANS are important to our lab. It gives us the ability to control and restrict which devices can communicate with each other. The reason the Pi’s are grouped to a specific VLAN is because we want the Pi we are working with to be in the same network as the devices that it needs to communicate with. By separating the Pi&apos;s into their own VLAN, we can ensure that their traffic is isolated from other devices on the network.</p>
    <p>VLANs are Virtual Local Area Networks which are subnets (Independent Broadcast Domains). In this lab, we have four VLAN. Eventually the ports will communicate with each other by tagging traffic.  The first VLAN is the general VLAN which is where most of our Pi&apos;s are connected to, the second is the SDN controller, the third is the SEL[3] (Schweitzer Engineering Laboratories), and the fourth is the security VLAN.</p>
    <Container>
      <h3>Prerequisites</h3>
      <ul>
        <li>Switch must be configured to allow multiple VLANs on the ethernet port the RPi is using</li>
        <li>When making changes to the files make sure to sudo vi</li>
      </ul>
      <h3>MultiHoming Steps</h3>
      <ol>
        <li>Create file &apos;vlans&apos; in dir /etc/network/interfaces.d/vlans to make virtual NICs for each VLAN</li>
        <ul>
          <img src="/images/SystemAdmin/MultiHoming_vlans.png" alt="VLANs" style={{ maxWidth: '375px' }} />
          <p>note: the standard format is &lt;physicalNIC&gt;.&lt;PVID&gt; where physicalNIC is the physical NIC name and PVID (port VLAN ID) is the ID for the VLAN the NIC is for</p>
        </ul>
        <li>If a static IP address is being used, the &apos;dhcpcd.conf&apos; file must be updated</li>
        <ul>
          <img src="/images/SystemAdmin/MultiHoming_dhcpcd.png" alt="dhcpcd" style={{ maxWidth: '375px' }} />
        </ul>
        <li>Restart the networking service using &apos;sudo systemctl restart networking&apos;</li>
        <li>
          <Link to="https://engineerworkshop.com/blog/raspberry-pi-vlan-how-to-connect-your-rpi-to-multiple-networks/">Tutorial to Connect Pi to Multiple Networks</Link>
        </li>
      </ol>
    </Container>
  </span>
);

export default VLAN;
