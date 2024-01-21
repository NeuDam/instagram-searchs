/* eslint-disable react/prop-types */

import Post from "../Post/Post"

function HandlerPosts( {data} ) {

  if (data.private){
    return <p className="message-warning">PRIVATE ACCOUNT</p>
  }

  if (data.posts.length == 0){
    return <p className="message-warning">NO POSTS</p>
  }

  return (
    data.posts.map((post) => {
      return <Post key={post.id} data={post}/>
    })
  )
}

export default HandlerPosts