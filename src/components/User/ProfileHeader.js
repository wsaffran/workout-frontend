import React, { Component } from 'react'
import './ProfileHeader.css'

function ProfileHeader(props) {
  console.log(props)
  return (
    <div className="profileHeader">
      <p>photo</p>
      <h1>{props.user.first_name} {props.user.last_name}</h1>
      <p>Followers | Following | Activities</p>
      <p>latest activity</p>
      <p>location</p>
    </div>
  )
}

export default ProfileHeader
