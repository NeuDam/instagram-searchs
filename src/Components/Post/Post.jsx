/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useState } from 'react'
import './Post.css'
import FloatingPost from '../FloatingPost/FloatingPost'

function Post({ data }) {

  const [showFloating, setShowFloating] = useState(false)

  let mediaType

  if (data.carrousel_media[0].type == "video"){
    mediaType = <video src={'https://cors-anywhere.herokuapp.com/' + data.carrousel_media[0].url} crossOrigin="instagram.com" muted loop autoPlay className='media-post'></video>
  }
  else{
    mediaType = <img src={'https://cors-anywhere.herokuapp.com/' + data.carrousel_media[0].url} alt="" crossOrigin="instagram.com" className='media-post'/>
  }

  return (
  <>
    {showFloating && <FloatingPost data={data} setShowFloating={setShowFloating} />}
    <article className="post" onClick={() => {
      setShowFloating(true)
    }}>
      {mediaType}
      <div className="black-effect"></div>
      <div className="basic-post-info">
        <span className="child-b-post-info"><i className='bx bxs-heart'></i><br />{data.ratingInfo.likes}</span>
        <span className="child-b-post-info"><i className='bx bxs-message' ></i><br />{data.ratingInfo.comments}</span>
      </div>
    </article>
  </>)
}

export default Post;
