import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, toggleSearch } from '../../store/slices/search/search'
import './SearchBox.css'

function SearchBox() {
  const dispatch = useDispatch()
  const search = useSelector(selectSearch)

  

  return (
	<input type="text" className="search-box" value={search} onChange={(e) => dispatch(toggleSearch(e.target.value))} placeholder="search" />
  )
}

export default SearchBox
