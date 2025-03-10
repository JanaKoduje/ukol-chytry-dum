import React from 'react';
import Lights from './lights';
import Climate from './climate';
import Blinds from './blinds';
import Energy from './energy';
import './dashboard.css';

const Dashboard = ({ data }) => {


  return <main className="dashboard">
    <Lights lights={data.lights} />
    <Climate climate={data.climate} />
    <Blinds state={data.blinds} />
    <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
  </main>;
};

export default Dashboard;
