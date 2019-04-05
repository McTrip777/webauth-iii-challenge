import React, { Component } from 'react';
import axios from 'axios';

export class Login extends Component {
  state = {
    username: '',
    password: '',
    text: ''
  };
  
  handleSubmit = event => {
      event.preventDefault();
      axios
      .post(`/auth/register`, {
        username:this.state.username,
        password:this.state.password
      })
      .then(res => {
          this.setState({
            text: 'Registration Successful',
            username:'',
            password:''          
          });
          this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err)
      });
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
  }
  
render() {
    return (
    <>
        <h2>Sign Up!</h2>
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
                <button type='submit'>Submit</button>
            </div>
        </form>
    </>
    )
}
}

export default Login
