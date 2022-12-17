import './SearchAnswer.css'
import { useSelector } from 'react-redux'
import { selectSearch } from '../../store/slices/search/search'
import { selectUsers } from '../../store/slices/users/usersSlice';
import { memo, useMemo } from 'react'
import SearchItem from '../SearchItem/SearchItem'

function SearchAnswer() {
	const search = useSelector(selectSearch)
	const {usersData,currentUser} = useSelector(selectUsers)

	const searchanswer = useMemo(() => {
		 return usersData.filter(user => user.userName.includes(search) && user.id !== currentUser.id)
	},[search])

	
  return (
	 <div className='SearchAnswer' style={{display: !!search.length ? 'block' : 'none'}}>
		{
			searchanswer.length ? 
			searchanswer.map(user => 
				<SearchItem key={user.id} id={user.id} img={user.img} username={user.userName}/>
				)
			: <p className='no-answer'>No results found for '{search}'</p>
		}
	 </div>
  )
}

export default memo(SearchAnswer)
