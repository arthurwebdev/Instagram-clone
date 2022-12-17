import { memo } from 'react'
import UniqGalleryItem from '../UniqGalleryItem/UniqGalleryItem'
import './UniqItemGallery.css'

function UniqItemGallery({posts}) {
  
  return (
    <div className="container">
      <div className="gallery">
          {
              posts?.map(el => (
                  <UniqGalleryItem key={el.id} img={el.img} likesCount={el.likesCount} comentsCount={el.comentsCount} />
              ))
          }
      </div>
    </div>
  )
}

export default memo(UniqItemGallery)
