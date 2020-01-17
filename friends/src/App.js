import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import FriendsList from './Components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
          <ProtectedRoute exact path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
      
    
  );
}

export default App;
