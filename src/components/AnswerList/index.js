import React from 'react';


class AnswerList extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        {this.props.list.map(answer => <div><input type="radio">{answer}</input></div>)}
      </div>
   )
  }
}

export default AnswerList
