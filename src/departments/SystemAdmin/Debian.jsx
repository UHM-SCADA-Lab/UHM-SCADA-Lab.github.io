import React from 'react';

const Debian = () => (
  <span>
    <h3>Debian Server (Castle)</h3>
    <p>This semester the database team requested a database called Castle to be set up. The database uses a Debian OS. The reason this OS was chosen was because the Raspberry Pi&apos;s also uses a Debian OS so we wanted to select an OS that we were already familiar with. We chose to use a terminal rather than a GUI due to the fact that it was a database which does not require GUI but also adds more security due to the fact that terminals are harder to navigate compared to a GUI. It is connected to VLAN 1 and its initial size is 64 GB for the OS ,100GB mounted on opt/u00 for logs, 400GB mounted on /opt/u0. The purpose of this server is to operate as a database server that pulls data from many of the Raspberry Pis. The stored data can then be used by the machine learning team for training their AI in the future</p>
    <p>To use Castle you are going to have to go to VMware Fusion and you should see Castle under a list of services. Boot it up and you should be prompted to enter a user. Currently there are two users for Castle, the first user is admin and the second is bodie. Do not use bodie as that was a sample user that we chose to use when we created this database. Use admin. When debian OS was set up we didn&apos;t include all the packages that it asked us to include so chances are you may need to install a package if it does not already include it. We added ssh, sudo, ifconfig, and others which weren&apos;t previously included.</p>
    <h5>WARNING: Currently Castle has a network problem where if you are on default network port you will be able to access internet and download packages but not be able to ssh or ping to other devices. Vice versa if you are on Ethernet you will be able to ping and ssh but not be able to use the internet or download packages.</h5>
    <h3>How to access Castle</h3>
    <ol>
      <li>You want to be sure you are on the MacOS not on any other VM</li>
      <li>Navigate to VMWare Fusion and boot up Castle</li>
      <li>Enter the username which is admin and enter our Scada password</li>
      <li>Remember to choose which network adapter you would like to use(SEE WARNING) </li>
    </ol>
    <h3>How to ssh into Castle</h3>
    <ol>
      <li>Make sure network adapter is set to Ethernet</li>
      <li>Make sure your device is connected to SCADA Wifi</li>
      <li>Depending on your Operating System ssh might differ </li>
      <li>For MacOS and Linux use terminal for Windows use PUTTY</li>
      <li>The ip address of Castle is 10.1.1.110</li>
      <li>So ssh 10.1.1.110</li>
      <li>Password is our Scada password</li>
      <li>It might take a while</li>
    </ol>
  </span>
);

export default Debian;
