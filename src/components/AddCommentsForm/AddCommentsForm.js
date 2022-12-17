import { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { addComments } from '../../store/slices/posts/postsSlice'
import { addNotification, selectUsers } from '../../store/slices/users/usersSlice'
import './AddCommentsForm.css'

function AddCommentsForm({id,setIsShow}) {
	const {currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()
	const formRef = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const body = formRef.current[0].value
		dispatch(addComments({
			postId: id,
			body: body,
			userName: currentUser.userName
		}))
		dispatch(addNotification({
			text: body,
			id: id,
			userName: currentUser.userName,
			userImg: currentUser.avatar,
			currentId: currentUser.id
		}))
		formRef.current.reset()
	}

	

  return (
	<form ref={formRef} onSubmit={handleSubmit}>
		<div className="comment-wrapper">
			<img src={IMAGES.smile} className="icon" alt=""/>
			<input onFocus={() => setIsShow(true)} type="text" className="comment-box" placeholder="Add a comment" />
			<button className="comment-btn">post</button>
		</div>
	</form>
  )
}

export default memo(AddCommentsForm)
