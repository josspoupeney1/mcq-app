import React from 'react';
import logo from './logo.svg';
import './App.css';
import Identity from './components/Identity'
import Question from './components/Question'
import Score from './components/Score'
import AnswerList from './components/AnswerList'
import Questions from './Questions.js'

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <div className="App-title">Test Symphony</div>
      <Identity/>
      <Score/>
      <Question label={Questions[0].label} />
      <AnswerList list={Questions[0].list}/>
    </header>
  </div>
  );
}

export default App;
