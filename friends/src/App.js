import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import FriendsList from './Components/FriendsList';
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
      
    
  );
}

export default App;
