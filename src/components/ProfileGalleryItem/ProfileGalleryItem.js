import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { deletePostFromAllPosts } from '../../store/slices/posts/postsSlice'
import { deletePost } from '../../store/slices/users/usersSlice'
import './ProfileGalleryItem.css'

function ProfileGalleryItem({img,id,likesCount,comentsCount}) {
  const dispatch = useDispatch()
  return (
    <div className="gallery-item">
        <img src={img} className="gallery-image" alt=""/>
        <div className="gallery-item-info">
            <span onClick={() => (dispatch(deletePost(id)), 
                                     dispatch(deletePostFromAllPosts(id)))}>
                <i className="fa">&#xf014;</i>
            </span>
            <ul>
                <li className="gallery-item-likes"><span >Likes</span> {likesCount}</li>
                <li className="gallery-item-comments"><span >Comments</span> {comentsCount}</li>
            </ul>
        </div>
    </div>
  )
}

export default memo(ProfileGalleryItem)
