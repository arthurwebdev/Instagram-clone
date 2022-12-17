import { memo } from 'react'
import ProfileGalleryItem from '../ProfileGalleryItem/ProfileGalleryItem'
import './ProfileGallery.css'

function ProfileGallery({gallery}) {  

  return (
    <div className="container">
        <div className="gallery">
            {
                gallery.map(post => (
                    <ProfileGalleryItem 
                      key={post.id} 
                      img={post.img} 
                      id={post.id} 
                      likesCount={post.likesCount}
                      comentsCount={post.comentsCount}
                    />
                    ))
            }
        </div>
        </div>
  )
}

export default memo(ProfileGallery)
