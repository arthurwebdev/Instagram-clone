import {  memo } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import ProfileGallery from '../ProfileGallery/ProfileGallery';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import './Profile.css'

const Profile = () => {
    const {currentUser} = useSelector(selectUsers)
    const {posts,followers,following,avatar,userName,description} = currentUser

    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{userName}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <ProfileStatus posts={posts} followers={followers} following={following} />
                    <div className="profile-bio">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <ProfileGallery gallery={posts} />
    
        </>
    );
}

export default memo(Profile)
