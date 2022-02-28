import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Riddles from './Riddles';
import Riddle from './Riddle';
import RiddleForm from './RiddleForm';
import NavBar from './NavBar';
import Challenge from './Challenge';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/riddles' component={Riddles} />
          <Route exact path='/riddles/new' component={RiddleForm} />
          <Route path='/riddles/:id' component={Riddle} />
          <Route path='/challenge' component={Challenge} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
