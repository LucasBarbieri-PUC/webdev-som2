import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Routes from './routes/index';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Cadastro from './components/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;