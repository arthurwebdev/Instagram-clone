import { memo } from 'react'
import Comment from '../Comment/Comment'

function Comments({comments}) {
  
  return (
    <>
      {
        comments.map(comment =>
          <Comment key={comment.id} body={comment.body} userName={comment.userName} timeAgo={comment.timeAgo}/>  
      ) 
      }
    </>
  )
}

export default memo(Comments)
