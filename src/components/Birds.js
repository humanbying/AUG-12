
import React from 'react'

const Birds = React.createClass({
  getInitialState(){
    return {
      type: this.props.params.type
    }
  },
  render: function() {
    return (
      <div>
        <h1>I'm the Bird Page!</h1>
        <h2>Bird type: {this.state.type}</h2>
      </div>

    )
  }
})

export default Birds;
