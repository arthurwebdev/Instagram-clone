import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useRef } from 'react'
import { addMessage, addReaction, selectUsers } from '../../store/slices/users/usersSlice'
import { withSendOrLike } from '../../hoc/withSendOrLike'

function MessengerChatForm({isShow,setIsShow}) {
	const formRef = useRef(null)
	const {currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const text = formRef.current[0].value
		
		
		if(text){
			dispatch(addMessage({currentId: currentUser.id,text: text}))
		}
		
		formRef.current.reset()
		setIsShow(false)
	}

  return (
	<div style={{height: "70px"}}>
	 <div className='Chat-input'>
		<form ref={formRef} onSubmit={handleSubmit}>
			<input type='text' onChange={({target}) => setIsShow(!!target.value.length)} placeholder='Message...'/>
			{
				isShow ? <button>Send</button>
						:<img onClick={() => 
							dispatch(
								addReaction({
										currentId: currentUser.id,
										reaction: "https://img.icons8.com/fluency/48/null/filled-like.png"
									})
							)
						} 
						src={IMAGES.like} alt=''
						/>
			}
		</form>
	 </div>
	 </div>
  )
}

export default memo(withSendOrLike(MessengerChatForm))
