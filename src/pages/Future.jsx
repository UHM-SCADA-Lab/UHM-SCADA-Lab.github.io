import React from 'react';
import { Container } from 'react-bootstrap';

const Future = () => (
  <Container id="future" className="py-3">
    <h1>Future Work</h1>
    <p>The SCADA lab is ever evolving, this page lays out the general direction of the SCADA lab and the three major components that will allow the transition. </p>
    <h4>SDN</h4>
    <h4>Machine Learning</h4>
    <h4>Database</h4>
    <p>&emsp;The data base will lay at the center of the transition into a risk based access model that utilizes a neural network to grant or deny access. The database is responsible for storing and organizing all of the monitoring data. Examples of data are system logs, panic status ,ip addresses, motion/light sensor, and SDN information parsed from the S-Flow headers.  This future section will primarily focus on the database usage in respects to machine learning and SDN, but since it can store data from a multitude of inputs there is a good chance future teams like system admin and networking may discover ways of utilizing it. Since the database will store everything it will most like be a prime target for future red teams.</p>
    <p>&emsp;The first key step that needs to be completed is creating a pipe line from data sources like the panic button and S-flow parser to the database.  Logstash is the program that will be responsible for this.  The initial pipeline will be something simple like storing text from the standard input(stdio) into an index in the database. This can be done locally meaning the input , logstash and database are on the same rig. To conform to the final desired layout the stdio will move to a remote pi and logstash moved to a different virtual machine than the database.  The final step is to change the input from standard input to data that we actually want to store. Using a python library (link in logstash resources section) programs on the pi will send over any relevant data. Now this model can be expanded parallelly using the same database with different remote pi and logstash configurations.</p>
    <p>&emsp;With a working data base the future machine learning team will be able to specify what types of data is required to create a training  data set. The training data set needs to be known good data in order to properly train the neural network.  Because of this there are a couple options on creating a training set.  The first would be to spin up a new database server and monitor inputs as the database grows to ensure the contents are desirable.  The second would be to fabricate the training set. </p>
  </Container>
);

export default Future;
