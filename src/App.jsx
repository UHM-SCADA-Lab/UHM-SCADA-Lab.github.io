import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Team from './pages/Team';
import Media from './pages/Media';
import Tasking from './pages/Tasking';
import ToDoList from './pages/ToDoList';
import EquipmentList from './pages/EquipmentList';
import Configuration from './pages/Configuration';
import Departments from './departments/Departments';
import Network from './departments/Network';
import SystemAdmin from './departments/SystemAdmin/SystemAdmin';
import KnowledgeManagement from './departments/KnowledgeManagement/KnowledgeManagement';
import SNMPNOC from './departments/SNMPNOC';
import SFlowSDN from './departments/SFlowSDN/SFlowSDN';
import MLCurriculum from './departments/MLCurriculum/MLCurriculum';
import HCI from './departments/HCI';
import Database from './departments/Database/Database';
import RedTeamSEL from './departments/RedTeamSEL/RedTeamSEL';
import LogStash from './departments/LogStash';
import Legacy from './pages/Legacy';
import RF from './departments/RF';
import Future from './pages/Future';

const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/media" element={<Media />} />
        <Route path="/tasking" element={<Tasking />} />
        <Route path="/toDoList" element={<ToDoList />} />
        <Route path="/equipmentList" element={<EquipmentList />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/future" element={<Future />} />

        {/* Department Pages */}
        <Route path="/departments" element={<Departments />} />
        <Route path="/network" element={<Network />} />
        <Route path="/systemAdmin" element={<SystemAdmin />} />
        <Route path="/knowledgeManagement" element={<KnowledgeManagement />} />
        <Route path="/snmp-noc" element={<SNMPNOC />} />
        <Route path="/sFlow-SDN" element={<SFlowSDN />} />
        <Route path="/mlCurriculum" element={<MLCurriculum />} />
        <Route path="/hci" element={<HCI />} />
        <Route path="/database" element={<Database />} />
        <Route path="/redTeam-SEL" element={<RedTeamSEL />} />
        <Route path="/logStash" element={<LogStash />} />

        {/* Legacy Pages */}
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/rf" element={<RF />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
