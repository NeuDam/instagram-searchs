/* eslint-disable react/prop-types */

import Post from "../Post/Post";

function HandlerPosts({ data, postsShow }) {
  if (data.private) {
    return <p className="message-warning">PRIVATE ACCOUNT</p>;
  }

  if (data.posts.length === 0) {
    return <p className="message-warning">NO POSTS</p>;
  }

  const limitedPosts = data.posts.slice(0, postsShow);

  return (
    limitedPosts.map((post) => {
      return <Post key={post.id} data={post} basicInfoProfile={{ username: data.username, picture: data.profile_pic }} />;
    })
  );
}

export default HandlerPosts;
