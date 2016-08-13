import React from 'react'
import { ajax } from 'jquery'

const Swapi = React.createClass({
  getInitialState() {
    return {
      person: null
    }
  },
  componentDidMount() {

    let url = 'http://swapi.co/api/people/1';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('data:', data);
      })
      .catch(err => {
        console.log('err:', err);
      })

      .catch(err => {
        console.log('err:', err);
      })
    // ajax(`http://swapi.co/api/people/${this.props.params.id}`)
    // .done(person => {
    //   this.setState({ person })
    // })
    // .fail(err => {
    //   console.log('err:', err);
    // })
  },
  render: function() {
    if (this.state.person) {
      let {name, height, mass, birth_year, gender} = this.state.person;

      return (
        <div>
        <h1>I'm the Swapi Page!</h1>

        <h3>Name: {name}</h3>
        <h3>Height: {height}</h3>
        <h3>Mass: {mass}</h3>
        <h3>Birth_year: {birth_year}</h3>
        <h3>Gender: {gender}</h3>
        </div>
      );
    } else {
      return (
        <h4>Loading...</h4>
      )
    }

  }
})

export default Swapi;
