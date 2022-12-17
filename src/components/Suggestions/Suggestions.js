import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Suggestion from '../Suggestion/Suggestion'

function Suggestions() {
    const {usersData, currentUser} = useSelector(selectUsers)

    const suggestions = useMemo(() => {
      return usersData.filter(user => user.id !== currentUser.id && user.id < 6)
                      .map(user => ({id: user.id, avatar: user.avatar, name: user.userName}))
    },[usersData])
  return (
    <div>
    {
        suggestions.map(el => <Suggestion key={el.id} id={el.id} name={el.name} avatar={el.avatar} />)
    }
    </div>
  )
}

export default Suggestions