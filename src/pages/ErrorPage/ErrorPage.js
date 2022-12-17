import { memo } from 'react'
import IMAGES from '../../images'
import './ErrorPage.css'


function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <div className='ErrorPage-body'>
        <div className='ErrorPage-text'>
            <h1>Sorry</h1>
            <p>we coldn't find that page</p>
        </div>
        <div className='ErrorPage-image'>
            <img src={IMAGES.errorImage[Math.floor(Math.random() * 3)]} alt='' />
        </div>
      </div>
    </div>
  )
}

export default memo(ErrorPage)
