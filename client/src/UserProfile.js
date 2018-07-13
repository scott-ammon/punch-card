import React from 'react';

export const UserProfile = props => {
  return (
    <div>
      <p>Hello, {props.user.name}</p>
      <button onClick={props.logout}>Log Out</button>
    </div>
  )
}