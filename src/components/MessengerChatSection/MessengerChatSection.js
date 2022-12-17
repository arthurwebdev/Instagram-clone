import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {
	const {currentUser} = useSelector(selectUsers)

  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<div className='UserSction-body'>
				<div className='UserSection-image'>
					<img src={currentUser.avatar} alt=''/>
				</div>
				<p>{currentUser.userName}</p>
			</div>
			<i className='fas'>&#xf12a;</i>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default memo(MessengerChatSection)
