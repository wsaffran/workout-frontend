import React from 'react'
import { connect } from 'react-redux'

import './User.css'

import ProfileHeader from '../User/ProfileHeader'
import EditProfile from '../User/EditProfile'

class User extends React.Component {

  // renderFullName = () => {
  //   const { first_name, last_name } = this.props.currentUser
  //   return first_name + " " + last_name
  // }

  render () {
    return (
      <div className="wrapper">
        {this.props.currentUser ?
          <>
            <ProfileHeader user={this.props.currentUser} />
            <EditProfile user={this.props.currentUser}/>
          </>
          :
          null
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(User)
