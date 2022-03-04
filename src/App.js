import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Riddles from './Riddles';
import RiddleAnswer from './RiddleAnswer';
import RiddleForm from './RiddleForm';
import NavBar from './NavBar';
import Challenge from './Challenge';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/riddles' element={<Riddles />} />
          <Route exact path='/riddles/new' element={<RiddleForm />} />
          <Route exact path='/riddles/:id' element={<RiddleAnswer />} />
          <Route path='/challenge' element={<Challenge />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
