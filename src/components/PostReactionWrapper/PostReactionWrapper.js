import './PostReactionWrapper.css'
import IMAGES from '../../images'
import { memo} from 'react'

function PostReactionWrapper({setIsShow,isShow}) {

  return (
	<div className="reaction-wrapper">
		<img src={IMAGES.like} className="icon" alt=""/>
		<img onClick={() => setIsShow(!isShow)} src={IMAGES.comment} className="icon" alt=""/>
		<img src={IMAGES.send} className="icon" alt=""/>
		<img src={IMAGES.save} className="save icon" alt=""/>
	</div>
  )
}

export default memo(PostReactionWrapper)
