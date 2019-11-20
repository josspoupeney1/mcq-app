import React from 'react';


class Score extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const styleScore = {
      color: 'Black',
      margin: '30px',
      paddingRight: '40px',
      textAlign: 'right'
    }
    return(
      <div style={styleScore}>
       20/20
      </div>
   )
 }
}

export default Score
