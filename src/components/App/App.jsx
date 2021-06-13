import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>

        </header>

        <Route path='/' exact>
          <Feeling />
        </Route>

        <Route path='/understanding'>
          <Understanding />
        </Route>

        <Route path='/supported'>
          <Supported />
        </Route>

        <Route path='/comment'>
          <Comments />  
        </Route>

        <Route path='/review'>
          <Review />
        </Route>

        <Route path='/success'>
          <Success />
        </Route>

      </div>
    </Router>
  );
}

export default App;
