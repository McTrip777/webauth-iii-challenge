import React, { Component } from 'react';
import axios from 'axios';

const newUser = {
  username: '',
  password: '',
};

export class Login extends Component {
  state = {
  user: { ...newUser },
    text: ''
  };
  
  handleSubmit = event => {
      event.preventDefault();
      axios
      .post(`/auth/register`, this.state.user)
      .then(res => {
        if (res.status === 201) {
          this.setState({
            text: 'Registration Successful',
            user: { ...newUser }
          });
          this.props.history.push('/login');
        }
      })
      .catch(err => {
        this.setState({
          text: err.response.data.message,
          user: { ...newUser }
        });
      });
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({ user: { ...this.state.user, [name]: value }})
  }
  
render() {
    return (
    <>
        <h2>Sign Up!</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username"/>
                <input 
                value={this.state.user.username} 
                onChange={this.handleInputChange} 
                name='username' 
                type='text'
                placeholder='Username'
                />
            </div>
            <div>
                <label htmlFor="password"/>
                <input 
                value={this.state.user.password} 
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
