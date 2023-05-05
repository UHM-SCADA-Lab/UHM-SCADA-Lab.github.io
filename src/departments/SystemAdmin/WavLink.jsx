import React from 'react';

const WavLink = () => (
  <span>
    <h3>WavLink(Router)</h3>
    <p>WavLink is the name of the router that we use to assign IP addresses to VLAN 1, it is how our lab gets its SCADA Wifi. To access WavLink you need to connect to the SCADA Wifi first then type 10.1.1.1 on the search bar. After doing so you will be brought to the WavLink router page and enter the password which is our SCADA password. After entering the password you will have access to all of the settings. If you navigate to the page where there is a list of devices connected to the wifi you will find a list of raspberry pi’s and their MAC addresses connected to VLAN1. You can add or remove any pi you want; however, you can only assign up to ten devices/pi’s.</p>
  </span>
);

export default WavLink;
