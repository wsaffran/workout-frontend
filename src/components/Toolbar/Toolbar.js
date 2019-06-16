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
                  </li>
                </ul>
                :
                <ul>
                  <li><a href="/">Training Plans</a></li>
                  <li><a href="/">Exercises</a></li>
                  <li><a href="/">History</a></li>
                  <li><a href="/">Workout</a></li>
                  <li><a href="/">Login</a></li>
                  <li><a href="/">{this.props.currentUser.first_name}</a></li>
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
