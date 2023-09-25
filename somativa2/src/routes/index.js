// routes/index.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cadastro from '../components/cadastro';
import Login from '../components/login';
import Dashboard from '../components/dashboard';

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/login">Dashboard</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
