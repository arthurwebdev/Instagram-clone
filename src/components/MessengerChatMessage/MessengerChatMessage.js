import React, { memo } from 'react'
import './MessengerChatMessage.css'

const messageStyle = {
	userStyle:{
		backgroundColor: '#dfdfdf'
	},
	botStyle:{
		backgroundColor: '#fff',
		border: '1px solid #dfdfdf'
	}
}

function MessengerChatMessage({message, me,reaction}) {
  return (
	<div style={{display: 'flex',justifyContent: me ? 'end' : 'start'}}>
	 <div className='One-message' style={me ? messageStyle.userStyle : messageStyle.botStyle}>
		<p>
			{
				reaction ? <img src={message} alt=''/>
							: message
			}
		</p>
	 </div>
	</div>
  )
}

export default memo(MessengerChatMessage)
