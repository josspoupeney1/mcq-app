import React from 'react';


class Identity extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    const styleIdentity = {
      color: 'black',
      margin: '10px',
      paddingLeft: '20px',
      textAlign: 'left'
    }
    return (
      <div style={styleIdentity}>
      LeBron
      James
      </div>
   )
  }
}

export default Identity
