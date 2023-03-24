import React, { useState } from 'react';
import { Col, Offcanvas, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LaunchingCommands = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <Link to="" onClick={handleShow}>Launching Commands on Start</Link>

      <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: '800px', width: '100%' }}>
        <Offcanvas.Header closeButton>
          <h1>Launching Commands on Start</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Using systemd</h3>
          <ul>
            <li>Followed this <Link to="https://www.golinuxcloud.com/run-script-at-startup-boot-without-cron-linux/">tutorial</Link> and this <Link to="https://stackoverflow.com/questions/35641414/python-import-of-local-module-failing-when-run-as-systemd-systemctl-service">stack overflow question.</Link></li>
            <li>Instructions:</li>
            <li>Create a .sh script. Example shown below is located at ~/startup_script.sh and launches two python programs:</li>
          </ul>
          <Row className="justify-content-center">
            <Col lg={6} className="border border-secondary">
              <pre>
                {`
#!/bin/bash
python3 /home/pi/gpio/LightSensor.py &
python3 /home/pi/rest_api/rest927.py &`}
              </pre>
            </Col>
          </Row>
          <ul>
            <li>Provide executable permission to the script: $ sudo chmod u+x /path/to/startup_script.sh</li>
            <li>Create a new systemd service file. Example shown below is a created service named Photo.service:</li>
          </ul>
          <Row className="justify-content-center">
            <Col lg={9} className="border border-secondary">
              <pre>
                {`
[Unit]
Description=Run script at startup after network becomes reachable
After=network-online.target

[Service]
Type=idle
User=pi
RemainAfterExit=yes
ExecStart=/home/pi/startup_script.sh
TimeoutStartSec=0

[Install]
WantedBy=default.target`}
              </pre>
            </Col>
          </Row>
          <ul>
            <li>Execute the following commands to make sure the service is called on startup</li>
            <ul>
              <li>$ sudo systemctl daemon-reload</li>
              <li>$ sudo systemctl enable Photo.service</li>
            </ul>
            <li>To check status of script</li>
            <ul>
              <li>$ systemctl status Photo.service</li>
            </ul>
          </ul>
          <h3>Using rc.local - Don&apos;t Use, Only for Documentation</h3>
          <ul>
            <li>This kinda works, but isn&apos;t as applicable as using systemd as shown above. This is an outdated method.</li>
            <li>Fails as you cannot control when the program runs, (runs before dependencies)</li>
            <li>Followed <Link to="https://learn.sparkfun.com/tutorials/how-to-run-a-raspberry-pi-program-on-startup#method-1-rclocal">this tutorial, method 1 (rc.local)</Link></li>
            <li>Instructions:</li>
            <ol>
              <li>Edit the file rc.local: $ sudo vim /etc/rc.local</li>
              <li>Enter the (command line) command you would like to run on start just before the last line (the exit 0 line). Example from the Photocell light sensor Pi shown below.</li>
              <li>WARNING: Make sure you add the &apos;&&apos; character at the end of the command. This makes it so the command runs in the background. If you do not do this, you might soft lock the Pi.</li>
              <li>If you then restart the Pi and the program has apparently ran without soft locking the Pi, you are finished. If not, follow the instructions written after the example to fix the Pi.</li>
            </ol>
          </ul>
          <Row className="justify-content-center">
            <Col lg={6} className="border border-secondary">
              <pre>
                {`
# Print the IP address
_IP=$(hostname -I) || true
if [ "$_IP" ]; then
 printf "My IP address is %sn" "$_IP"
fi

python3 /home/pi/gpio/LightSensor.py &

exit 0`}
              </pre>
            </Col>
          </Row>
          <h3>Fixing rc.local Softlock</h3>
          <ul>
            <li>If this happens to you, don&apos;t worry!</li>
            <li>Instructions:</li>
            <ol>
              <li>You will need to shutdown the Pi, then take out the SD card from the Pi.</li>
              <li>Put the SD card into the SD card writer used for burning OS images.</li>
              <li>Plug the SD card writer into another computer (any Raspberry Pi works!)</li>
              <li>On the another computer, open the file in vim text editor: sudo vim /media/pi/rootfs/etc/rc.local</li>
              <li>Fix what you messed up earlier.</li>
              <li>Once done, properly eject the SD card and it should be good to be plugged into the original Pi.</li>
            </ol>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
  );
};

export default LaunchingCommands;
