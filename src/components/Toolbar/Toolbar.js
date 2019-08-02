import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './Toolbar.css'

class Toolbar extends React.Component {
  render () {
    return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_logo"><Link to="/">WORKOUT APP</Link></div>
          <div className="spacer"></div>
          {this.props.currentUser ?
            <div className="toolbar_navigation-items">
              {this.props.currentUser.errors ?
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
                :
                <ul>
                  <li><a href="/">Training Plans</a></li>
                  <li><a href="/">Exercises</a></li>
                  <li><a href={`/users/${this.props.currentUser.id}/log`}>History</a></li>
                  <li><a href={`/users/${this.props.currentUser.id}/workouts`}>Workout</a></li>
                  {/*
                    <li><a href={`/users/${this.props.currentUser.id}/${this.props.currentUser.first_name}_${this.props.currentUser.last_name}`}>{this.props.currentUser.first_name}</a></li>
                    */}

                  {/*might want to do a link to button instead of an href*/}
                  <li>
                    <div class="dropdown">
                      <a href={`/users/${this.props.currentUser.id}/${this.props.currentUser.first_name}_${this.props.currentUser.last_name}`}>{this.props.currentUser.first_name}
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>
                  </li>

                </ul>
              }
            </div>
            :
            null
          }
        </nav>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Toolbar)
