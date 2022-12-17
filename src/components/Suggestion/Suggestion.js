import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import './Suggestion.css'

function Suggestion({id, name, avatar}) {

  return (
    <div className='Suggestion'>
      <NavLink to={`${id}/uniq`} style={{textDecoration:'none'}} className="profile-card">
        <div className="profile-pic">
            <img src={avatar} alt=""/>
        </div>
        <div>
            <p className="username">{name}</p>
            <p className="sub-text">followed by user</p>
        </div>
        <button className="action-btn">follow</button>
        </NavLink>
    </div>
  )
}

export default memo(Suggestion)