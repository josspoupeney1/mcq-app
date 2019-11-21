import React from 'react';


class Score extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const styleScore = {
      color: 'white',
      marginLeft: 'auto',
      marginRight: '30px',
      lineHeight: '100px',
      textAlign: 'center',
      height: '100px',
      width: '100px',
      background: ((this.props.score/this.props.total)*100<75) ? '#f1141c' : '#04e204'
    }
    return(
      <div style={styleScore}>
        {(this.props.score/this.props.total)*100}%
      </div>
   )
 }
}

export default Score
