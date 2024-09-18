import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
