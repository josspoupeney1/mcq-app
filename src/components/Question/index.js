import React from 'react';


class Question extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const styleQuestion = {
      color: 'black',
      margin: '10px',
      paddingLeft: '20px',
      border: '1px solid white',
    }
    return(
    <div style={styleQuestion}>
       {this.props.label}
    </div>
  )
}
 }

export default Question
