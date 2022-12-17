import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlice'
import UniqItemGallery from '../UniqItemGallery/UniqItemGallery'
import './UniqItem.css'

function UniqItem() {
    const {id} = useParams()
    const {usersData} = useSelector(selectUsers)
    const [user,setUser] = useState(null)

    useEffect(() => {
        setUser({...usersData.find(user => user.id === id)})
    },[id])
    
  return (
    <>
    <header>
        <div className="container">
            <div className="profile">
                <div className="profile-image">
                    <img src={user?.avatar} alt=""/>
                </div>
                <div className="profile-user-settings">
                    <h1 className="profile-user-name">{user?.userName}</h1>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li><span className="profile-stat-count">{user?.posts.length}</span> Posts</li>
                        <li><span className="profile-stat-count">{user?.followers}</span> Followers</li>
                        <li><span className="profile-stat-count">{user?.following}</span> Following</li>
                    </ul>
                </div>
                <div className="profile-bio">
                    <p>{user?.name}</p>
                    <p>{user?.description}</p>
                    <button className='followBtn'>Follow</button>
                </div>
            </div>
        </div>
    </header>

    <UniqItemGallery posts={user?.posts} />

    </>
  )
}

export default memo(UniqItem)