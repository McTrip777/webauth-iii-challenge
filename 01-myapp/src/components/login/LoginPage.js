import React, { Component } from 'react';
import axios from 'axios';

export class LoginPage extends Component {
  state = {
    username:'',
    password:''
  };
  
  handleSubmit = event => {
      event.preventDefault();
      axios
      .post('/auth/login', this.state)
      .then(res => {
          console.log('login response', res);
          localStorage.setItem('token', res.data.token);
          this.props.history.push('/');
      })
      .catch(error => {
          console.log('error', error)
      })
  }

  signOut = event => {
    event.preventDefault();
    window.localStorage.clear();
    this.props.history.push('/login');
}

  handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value })
  }
  
render() {
    return (
    <>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username"/>
                <input 
                value={this.state.username} 
                onChange={this.handleInputChange} 
                name='username' 
                type='text'
                placeholder='Username'
                />
            </div>
            <div>
                <label htmlFor="password"/>
                <input 
                value={this.state.password} 
                onChange={this.handleInputChange} 
                name='password' 
                type='password'
                placeholder='Password'
                />

            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
        <div>
            <button onClick={this.signOut}>Logout</button>
        </div>
    </>
    )
}
}

export default LoginPage