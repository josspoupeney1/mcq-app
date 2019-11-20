import React from 'react';


class Question extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const styleQuestion = {
      color: 'black',
      margin: '10px',
      paddingLeft: '20px'
    }
    return(
    <div style={styleQuestion}>
       {this.props.label} ({this.props.number}/{this.props.total})
    </div>
  )
}
 }

export default Question
