import React, { useEffect, useMemo } from 'react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Story from '../Story/Story'
import './Stories.css'

function Stories() {
    const {usersData} = useSelector(selectUsers)

    const stories = useMemo(() => {
        return usersData.map(user => ({id: user.id, img: user.avatar, name: user.userName}))
    },[usersData])


  return (
    <div className="status-wrapper">
        {
            stories.map(user => <Story key={user.id} img={user.img} name={user.name} />)
        }
    </div>
  )
}

export default Stories