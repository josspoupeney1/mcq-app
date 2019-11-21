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
      currentQuestion: 0,
      currentAnswer: '',
      score: 0
    }
  }
  handleClick() {
    if (this.state.currentAnswer == Questions[this.state.currentQuestion].correct) {
      this.setState({
        score: this.state.score + 1
      })
    }
    if (this.state.currentQuestion < (Questions.length-1)) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1
      })
    }
  }
  handleAnswer = (answer) => {
    this.setState({
      currentAnswer: answer
    })
  }
  render() {
    const styleTitle = {
      color: "#42a4f5"
    }
    const styleButton = {
      marginTop: "30px",
      width: "120px",
      height: '30px',
      background: "#42a4f5",
      border: '0px',
      borderRadius: '16px',
      outline: '0'
    }
    const styleDiv = {
      textAlign: "center"
    }
    return (
    <div className="App">
      <header className="App-header">
        <div className="App-title" style={styleTitle}>Symphony Test</div>
        <Identity/>
        <Score score={this.state.score} total={Questions.length}/>
        <Question label={Questions[this.state.currentQuestion].label} number={this.state.currentQuestion+1} total={Questions.length} />
        <AnswerList handleAnswer={this.handleAnswer} list={Questions[this.state.currentQuestion].list}/>
        <div style={styleDiv}>
          <button type="button" style={styleButton} onClick={() => this.handleClick()}>Submit</button>
        </div>
      </header>
    </div>
    );
  }
}

export default App;
