/* eslint-disable react/prop-types */
import './MorePosts.css'

// eslint-disable-next-line react/prop-types
function MorePosts({data, originalData, setPosts}) {

  const handlerMorePosts = () => {
    if (data + 12 > originalData.basicRating.posts || data + 12 > 38){
      setPosts(originalData.basicRating.posts)
      console.log('MAX POSTS')
      return 
    }
    setPosts(data + 12)
  }

  return (
    <button type='button' className='more-button' onClick={() => {handlerMorePosts()}}>MORE POSTS</button>
  )
}

export default MorePosts