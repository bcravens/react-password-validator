import React, { Component } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confirm: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmChange = this.handleConfirmChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleConfirmChange(event) {
    this.setState({confirm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirm) {
      alert("Login successful");
    } else {
      alert("Login failed: Please make sure passwords match");
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Email: </label>
        <br />
        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        <br />
        <label> Password: </label>
        <br />
        <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
        <br />
        <label> Confirm Password: </label>
        <br />
        <input type="text" value={this.state.confirm} onChange={this.handleConfirmChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
