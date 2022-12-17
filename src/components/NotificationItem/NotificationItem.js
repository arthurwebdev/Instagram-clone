import { memo } from 'react'
import './NotificationItem.css'

function NotificationItem({userImg,userName,img,text}) {
  return (
	 <div className='NotificationItem'>
		<div className='NotificationItem-body'>
			<div className="status-card">
				<div className="profile-pic"><img src={userImg} alt=""/></div>
			</div>
			<div>
				<span>{userName}</span><span> commented: {text}</span>
			</div>
		</div>
		<div className='Notification-image'>
			<img src={img} alt='' />
		</div>
	 </div>
  )
}

export default memo(NotificationItem)
