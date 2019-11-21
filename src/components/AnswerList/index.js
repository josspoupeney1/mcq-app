import React from 'react';


class AnswerList extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChange(answer) {
    this.props.handleAnswer(answer)
  }
  render(){
    return(
      <div>
        {this.props.list.map(answer => <div> {answer} <input name="question" type="radio" value={answer} onChange={() => this.handleChange(answer)} /></div>)}
      </div>
   )
  }
}

export default AnswerList
