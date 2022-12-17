import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { memo } from 'react'

function MessengerPeoplesMessages() {

	const message ={
			 id: '1',
			 img: IMAGES.profilImage,
			 name: 'Bot',
			 active: 'Active'
	}
		
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		
			<MessengerPeoplesMessage key={message.id} img={message.img} name={message.name} active={message.active}/>
		
	 </div>
  )
}

export default memo(MessengerPeoplesMessages)
