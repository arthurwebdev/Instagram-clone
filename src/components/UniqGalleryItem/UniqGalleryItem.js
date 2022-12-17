import { memo } from 'react'
import './UniqGalleryItem.css'

function UniqGalleryItem({img,comentsCount,likesCount}) {
  return (
    <div className="gallery-item">
		<img src={img} className="gallery-image" alt=""/>
		<div className="gallery-item-info">
			<ul>
				<li className="gallery-item-likes"><span >Likes</span> {likesCount}</li>
				<li className="gallery-item-comments"><span >Comments</span> {comentsCount}</li>
			</ul>
		</div>
	</div>
  )
}

export default memo(UniqGalleryItem)
