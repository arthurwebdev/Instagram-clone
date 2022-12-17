import { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChatMessage from '../MessengerChatMessage/MessengerChatMessage'
import './MessengerChat.css'

function MessengerChat() {
	const {currentUser} = useSelector(selectUsers)
	const divRef = useRef(null)

	useEffect(() => {
		divRef.current.scrollTop = divRef.current.scrollHeight - divRef.current.clientHeight;
	},[currentUser?.messenger])
	
	

  return (
	 <div ref={divRef} className='MessengerChat'>
			{
				currentUser?.messenger.map(message => 
						<MessengerChatMessage 
							key={message.id} 
							message={message.message} 
							me={message.me === 'user'}
							reaction={message.reaction}
						/>
				)
			}
	 </div>
  )
}

export default memo(MessengerChat)
