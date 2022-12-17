import './Notifications.css'
import NotificationItem from '../NotificationItem/NotificationItem'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { memo } from 'react'

function Notifications() {
	const {currentUser} = useSelector(selectUsers)

  return (
	 <div className='Notification'>
		<div className='Notification-body'>
			<h1>Notification</h1>
			<div className='Notic-this'>
				<h2>This Week</h2>
				{
					currentUser?.notifications.length ? 
					currentUser?.notifications.map(el => <NotificationItem 
																		key={el.id} 
																		img={el.img}
																		userImg={el.userImg} 
																		userName={el.userName} 
																		text={el.text}
																	/>)
					: <p>No Notification</p>
				}
			</div>
			<div className='Notic-this'>
				<h2>This Month</h2>
				{
					currentUser?.notifications.length ? 
					currentUser?.notifications.map(el => <NotificationItem 
																		key={el.id} 
																		img={el.img}
																		userImg={el.userImg} 
																		userName={el.userName} 
																		text={el.text}
																	/>)
					: <p>No Notification</p>
				}
			</div>
			<div className='Notic-this'>
				<h2>Earlier</h2>
				{
					currentUser?.notifications.length ? 
					currentUser?.notifications.map(el => <NotificationItem 
																		key={el.id} 
																		img={el.img}
																		userImg={el.userImg} 
																		userName={el.userName} 
																		text={el.text}
																	/>)
					: <p>No Notification</p>
				}
			</div>
		</div>
	 </div>
  )
}

export default memo(Notifications)
