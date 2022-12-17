import { memo } from 'react'
import { Link } from 'react-router-dom'
import './SearchItem.css'

function SearchItem({img,username,id}) {
	
  return (
	 <div className="SearchItem">
		<div className='SearchItem-body'>
			<div className='profile-pic'>
				<img src={img} alt="" />
			</div>
			<h1>{username}</h1>
		</div>
		<Link to={`${id}/uniq`}>Follow</Link>
	 </div>
  )
}

export default memo(SearchItem)
