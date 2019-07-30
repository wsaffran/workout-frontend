import React, { Component } from 'react'

function ProfileHeader(props) {
  console.log(props)
  return (
    <div>
      <h1>Profile Header</h1>
      <p>photo</p>
      <p>{props.user.first_name} {props.user.last_name}</p>
      <p>location</p>
    </div>
  )
}

export default ProfileHeader
