import React from 'react'
import { connect } from 'react-redux'

import './Signup.css'

class Signup extends React.Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(response => {
      if (response.errors) {
        alert(response.errors)
      } else {
        this.props.setCurrentUser(response)
        localStorage.setItem("token", response.token)
        this.props.history.push('/')
      }
    })
  }

  render () {
    return (
      <div className="signup">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
          />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
          />
          <button
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({type: "SET_CURRENT_USER", payload: user})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
