import React, { Component } from 'react'
import './EditProfile.css'

class EditProfile extends React.Component {

  state = {
    image: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
  }

  render() {
    return (
      <div className="editProfileForm">
        <form className="form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="image" placeholder="image url" value={this.state.image} />
        </form>
      </div>
    )
  }

}

export default EditProfile
