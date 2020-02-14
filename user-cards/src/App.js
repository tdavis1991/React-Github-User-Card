import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tdavis1991')
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
      </div>
    );
  }
}

export default App;
