import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//pages
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
