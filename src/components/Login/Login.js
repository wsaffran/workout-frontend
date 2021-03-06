import React from 'react'
import { connect } from 'react-redux'

import './Login.css'

class Login extends React.Component {

  state = {
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
  }

  render () {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} autoComplete="off">
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
            Login
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
