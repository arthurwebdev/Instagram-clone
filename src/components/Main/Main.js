import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logOut, selectUsers } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    
  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <div className='profileSectionCard'>
                    <NavLink to='/profile' className="profile-card">
                        <div className="profile-pic">
                            <img src={currentUser?.avatar} alt=""/>
                        </div>
                        <div>
                            <p className="username">{currentUser?.userName}</p>
                            <p className="sub-text">{currentUser?.name}</p>
                        </div>
                    </NavLink>
                    <button onClick={() => (navigate('/login'), dispatch(logOut()))} className="action-btn">Log out</button>
                </div>
                <p className="suggestion-text">Suggestions for you</p>
                <Suggestions />
            </div>
        </div>
    </section>
  )
}

export default memo(Main)