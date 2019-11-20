import React from 'react';


class AnswerList extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        {this.props.list.map(answer => <div> {answer} <input name="question" type="radio" /></div>)}
      </div>
   )
  }
}

export default AnswerList
