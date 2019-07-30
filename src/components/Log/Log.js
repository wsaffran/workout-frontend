import React from 'react'
import { connect } from 'react-redux'

import './Log.css'

class Log extends React.Component {

  render () {
    return (
      <div>
        <p>Log</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Log)
