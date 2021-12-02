import './App.css';
import Title from './Title.js';
import React from 'react';
import { Outlet } from 'react-router';

function App() {
return (
    <div>
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
