import React, { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { createPost } from '../../store/slices/posts/postsSlice';
import { addPostInUserData, selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const navigate = useNavigate()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        let url = formRef.current[0].value
        let desc = formRef.current[1].value
        let id = new Date().getTime() + "_" + currentUser.id
        if(url){
            dispatch(addPostInUserData({currentid: currentUser.id, id: id, url: url, desc: desc}))
            dispatch(createPost({userName: currentUser.userName,id: id,url: url,desc: desc}))
        }

        formRef.current.reset()
        navigate('/')
    }

    return (
        <div  className='container-create'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <p>Image URL</p>
                    <input type="text" placeholder='URL'/>
                </div>
                <div>
                    <p>Post Description</p>
                    <input type="text" placeholder='Description'/>
                </div>
                <button>Save</button>
            </form>
        </div>
    );
}

export default memo(CreatePost)
