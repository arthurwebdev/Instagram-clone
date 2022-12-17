import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'


function Explore() {

	const {currentUser,usersData} = useSelector(selectUsers)

	const exploreTop = useMemo(() => {
		return usersData.filter(user => user.id !== currentUser.id)
							 .map(user =>  user.posts)
							 .flatMap(post => post)
	},[usersData])
	

  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				exploreTop.map(post => <ExploreItem 
													key={post.id} 
													img={post.img} 
													likes={post.likesCount} 
													commentsCount={post.comentsCount} 
												/>)
			}
		</div>
	 </div>
  )
}

export default memo(Explore)
