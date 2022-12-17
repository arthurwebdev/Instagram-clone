import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import Post from '../Post/Post'

function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(selectPosts)

    useEffect(() => {
        if(!posts.length){
          dispatch(fetchPosts())
        }
    }, [])

  return (
    <>
        {
            posts.map(el => <Post 
                                key={el.id} 
                                id={el.id} 
                                img={el.img} 
                                name={el.userName} 
                                likesCount={el.likesCount} 
                                postText={el.description} 
                                timeAgo={el.timeAgo}  
                                comm={el.comments}
                                />)
        }
    </>
  )
}

export default Posts