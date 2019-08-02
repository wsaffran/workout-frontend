import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import User from './components/User/User'
import Log from './components/Log/Log'
import Workout from './components/Workout/Workout'

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

            <Route path='/users/:id/workout' render={ (routeProps) => {
                return <Workout {...routeProps} activeItem={routeProps.match.params.currentUser}/>
              }
            } />
            <Route path='/users/:id/log' render={ (routeProps) => {
                  return <Log {...routeProps} activeItem={routeProps.match.params.currentUser}/>
                }
              } />
            <Route path='/users/:id/:first_name_:last_name' render={ (routeProps) => {
                  return <User {...routeProps} activeItem={routeProps.match.params.currentUser}/>
                }
              } />
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
