import React from 'react';
import logo from './logo.svg';
import './App.css';
import Identity from './components/Identity'
import Question from './components/Question'
import Score from './components/Score'
import AnswerList from './components/AnswerList'
import Questions from './Questions.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: 0
    }
  }
  handleClick() {
    if (this.state.currentQuestion < (Questions.length-1)) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }
  render() {
    const styleButton = {
      width: "120px",
    }
    const styleDiv = {
      textAlign: "center"
    }
    return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Symphony Test</div>
        <Identity/>
        <Score/>
        <Question label={Questions[this.state.currentQuestion].label} number={this.state.currentQuestion+1} total={Questions.length} />
        <AnswerList list={Questions[this.state.currentQuestion].list}/>
        <div style={styleDiv}>
          <button type="button" style={styleButton} onClick={() => this.handleClick()}>Submit</button>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
