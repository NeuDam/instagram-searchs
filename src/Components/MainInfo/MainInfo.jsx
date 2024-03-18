/* eslint-disable react/prop-types */

import HandlerPosts from '../HandlerPosts/HandlerPosts';
import './MainInfo.css'

function MainInfo({ data, postsShow }) {

  if (data.status != 'ok'){
    console.log(data)
    return <p className="message-warning">USER NOT FOUND</p>
  }

  return (
    <>
      <section className="section-info section-top">
        <section className="left-space">
          <img src={'https://cors-anywhere.herokuapp.com/' + data.profile_pic} alt={`Picture of ${data.username}`} crossOrigin="https://www.instagram.com" className="pic-username"/>
          <span className="name">{data.name}</span>
        </section>
        <section className="right-space">
          <span className="bio">{data.bio}</span>
          <div className="basic-data">
            <span className="child-basic-data">Followers <br /> {data.basicRating.followers}</span>
            <span className="child-basic-data">Following <br /> {data.basicRating.following}</span>
            <span className="child-basic-data">Posts <br /> {data.basicRating.posts}</span>
          </div>
        </section>
      </section>

      <section className="section-info section-bottom">
        <HandlerPosts data={data} postsShow={postsShow}/>
      </section>
    </>
  );
}

export default MainInfo;
