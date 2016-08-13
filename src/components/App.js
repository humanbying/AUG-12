
import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({
  componentDidMount() {
    console.log('this.props', this.props)
  },
  render: function() {
    return (
      <div>
        <h1>I'm the App!</h1>

        <Link to= '/'>
        <button>Home</button>
        </Link>
        <Link to= '/about'>
        <button>About</button>
        </Link>
        <Link to= '/birds/heron'>
        <button>Birds</button>
        </Link>
        <Link to= '/swapi/1'>
        <button>SWAPI</button>
        </Link>
        <input onChange= "" type="number" ref = "inputted" placeholder="enter id num" />

        {this.props.children}

      </div>
    )
  }
})

export default App;
