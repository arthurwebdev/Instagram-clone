import React, { memo } from 'react'
import './Comment.css'

function Comment({userName,body,timeAgo}) {
	return (
	  <>
			<p className="description">
				 <span>{userName} </span> {body} <br />
				 <span className="post-time">{timeAgo}</span>
			</p>
	  </>
	)
 }

export default memo(Comment)
