import './Login.css'
import IMAGES from '../../images'
import { Link, useNavigate } from 'react-router-dom'
import { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers, toggleCurrentUser } from '../../store/slices/users/usersSlice'
import { fetchUsers } from '../../store/slices/users/usersAPI'

function Login() {
	const formRef = useRef(null)
	const navigate = useNavigate()
	const {usersData,currentUser} = useSelector(selectUsers)
	const dispatch = useDispatch()

	useEffect(() => {
		if(!usersData.length){
			dispatch(fetchUsers())
		}
		
	},[])
	
	useEffect(() => {
		if(currentUser){
			navigate('/')
		}
	},[currentUser])

	const handleSubmit = (e) => {
		e.preventDefault()
		let login = formRef.current[0].value
		let password = formRef.current[1].value
		dispatch(toggleCurrentUser({login : login,password : password}))
		formRef.current.reset()
	}


  return (
	 <div className='Login'>
		<div className='Login-body'>
			<div className='Login-form'>
				<div >
					<img src={IMAGES.logo} className='brand-img-login'  alt="" />
				</div>
			<form ref={formRef} onSubmit={handleSubmit}>
					<div className='login-input'>
						<input defaultValue='bret' type='text' placeholder='Phon number,username or email'/>
					</div>
					<div className='login-input'>
						<input defaultValue='multi-layered' type='text' placeholder='Password'/>
					</div>
					<div className='login-btn'>
						<button>Log in</button>
					</div>
				</form>
					<div className='login-alt'>
						OR
					</div>
					<div className='login-social'>
						<img src={IMAGES.facebook} alt=''/>
						<p>Log in with Facebook</p>
					</div>
					<div>
						<Link style={{textDecoration: 'none',color: 'rgb(91, 159, 182)'}} to='restorepassword'>Forgot password?</Link>
					</div>
			</div>
			<div className='to-reg'>
				Don't have an account? <Link to='reg'> Sign up</Link>
			</div>
			<div className='login-footer'>
				<div>Get the app.</div>
				<div>
					<img src={IMAGES.googlePay} alt=''/>
					<img src={IMAGES.microsoft} alt=''/>
				</div>
			</div>
		</div>
	 </div>
  )
}

export default memo(Login)
