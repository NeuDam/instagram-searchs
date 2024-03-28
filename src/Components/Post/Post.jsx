/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from 'react'
import './Post.css'
import FloatingPost from '../FloatingPost/FloatingPost'

function Post({ data, basicInfoProfile }) {

  const [showFloating, setShowFloating] = useState(false)
  const MAIN_URL_PROXY = 'https://cors-anywhere.herokuapp.com/'

  let mediaType
  if (data.carousel_media[0].type == "video"){
    mediaType = <img src={MAIN_URL_PROXY + data.carousel_media[0].preview_video} crossOrigin="instagram.com" className='media-post'/>
  }
  else{
    mediaType = <img src={MAIN_URL_PROXY + data.carousel_media[0].url} alt="" crossOrigin="instagram.com" className='media-post'/>
  }

  return (
  <>
    {showFloating && <FloatingPost data={data} setShowFloating={setShowFloating} basicInfoProfile={basicInfoProfile} />}
    <article className="post" onClick={() => {
      setShowFloating(true)
    }}>
      {mediaType}
      {data.carousel_media[0].type === "video" && <i className='bx bxs-video-recording' ></i>}
      <div className="black-effect"></div>
      <div className="basic-post-info">
        <span className="child-b-post-info"><i className='bx bxs-heart'></i><br />{data.ratingInfo.likes}</span>
        <span className="child-b-post-info"><i className='bx bxs-message' ></i><br />{data.ratingInfo.comments}</span>
      </div>
    </article>
  </>)
}

export default Post;
