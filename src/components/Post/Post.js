import './Post.css'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import AddCommentsForm from '../AddCommentsForm/AddCommentsForm'
import PostReactionWrapper from '../PostReactionWrapper/PostReactionWrapper'
import { memo, useMemo } from 'react'
import Comments from '../Comments/Comments'
import { withLessMore } from '../../hoc/withLessMore'


function Post({isShow,setIsShow,id, img, name, likesCount, postText, timeAgo,comm}) {

  const comments = useMemo(() => {
    return comm
  },[comm])

  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={IMAGES.profilImage} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <PostReactionWrapper isShow={isShow} setIsShow={setIsShow} />
            <p className="likes">{likesCount}</p>
            {postText && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>
            <div>
              { 
                isShow ? <Comments comments={comments} />
                : <h2 style={{cursor: 'pointer'}} onClick={() => setIsShow(true)}>View all {comments.length} comments</h2>
              }
            </div>
        </div>
        <AddCommentsForm id={id} {...{setIsShow}} />
    </div>
  )
}

export default memo(withLessMore(Post))