import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

import './App.css';

class App extends React.Component {

  logOut = () => {
    localStorage.removeItem("token")
    this.props.setCurrentUser({currentUser: null})
    this.props.history.push('/')
  }

  componentDidMount() {
    const token = localStorage.getItem("token")

    if (token) {
      fetch("http://localhost:3001/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then((response) => {
        this.props.setCurrentUser(response)
      })
    }
  }

  render () {
    return (
      <div className="App">
        <Toolbar />
        <main>
          <Switch>
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
          </Switch>
        </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
