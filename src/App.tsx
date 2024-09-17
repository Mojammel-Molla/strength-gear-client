import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
};

export default App;
