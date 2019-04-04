import React, { Component } from 'react';
import axios from 'axios';
import requiresAuth from './requiresAuth';

export class Users extends Component {
    state = {
        users: []
    }

componentDidMount(){
axios
    .get('/user')
    .then(res =>{
        this.setState({users: res.data})
    })
    .catch(err => {
        console.log('User Componentdidmount ', err)
    })
}

  render() {
    return (
      <div>
          <h2>List of Users</h2>
        <ul>
            {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default requiresAuth(Users)
