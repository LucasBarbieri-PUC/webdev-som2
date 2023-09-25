// App.js
import React from 'react';
import Routes from './routes/index';
import Login from './components/login';
import { initializeApp } from 'firebase/app';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;