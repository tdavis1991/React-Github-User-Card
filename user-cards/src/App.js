import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import FollowerCard from './FollowerCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: [],
      show: false
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tdavis1991')
      .then(res => {
        this.setState({ users: res.data })
        console.log(this.state.users)
      }).catch(err => {
        console.log(err)
      })

    axios.get('https://api.github.com/users/tdavis1991/followers')
      .then(res => {
        this.setState({ followers: res.data })
        console.log(this.state.followers)
      }).catch(err => {
        console.log(err)
      })
  }

  display = e => {
    e.preventDefault();

    this.setState({ show: !this.state.show })
  }

 

  render() {
    
    return (
      <div className="App">
        <h1>Github Users</h1>
        <UserCard
          image={this.state.users.avatar_url}
          name={this.state.users.name}
          username={this.state.users.login}
          followers={this.display}
        />
        <div className='follower-container'>
          {this.state.followers.map((list, index) => (
            <FollowerCard 
              image={list.avatar_url}
              username={list.login}
              display={this.state.show}
            />
          ))}
        </div>
        {console.log(this.state.followers)}
      </div>
    );
  }
}

export default App;
