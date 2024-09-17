import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold text-center ">Vite + React</h1>
      <Outlet></Outlet>
    </>
  );
};

export default App;
