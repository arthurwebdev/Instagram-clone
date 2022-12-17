import './ProfileStatus.css'
import { memo } from 'react';

function ProfileStatus({posts,followers,following}) {

  return (
    <div className="profile-stats">
        <ul>
            <li><span className="profile-stat-count">{posts.length}</span> posts</li>
            <li><span className="profile-stat-count">{followers}</span> followers</li>
            <li><span className="profile-stat-count">{following}</span> following</li>
        </ul>
    </div>
  )
}

export default memo(ProfileStatus)
