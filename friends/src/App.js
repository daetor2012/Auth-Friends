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
        <div className="App-header">
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
        </div>
        <h1>Welcome to the Friends App!</h1>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
      
    
  );
}

export default App;
