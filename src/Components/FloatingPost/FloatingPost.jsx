/* eslint-disable react/prop-types */
import './FloatingPost.css'

function FloatingPost({data,setShowFloating}) {
  return (
    <div className='container-floater'>
      <div className="floater">
        <div className="slider">
          {data.carrousel_media.map((element) => {
            return (element.type == "image") ? <img key={window.crypto.randomUUID} src={"https://cors-anywhere.herokuapp.com/" + element.url} alt={element.caption} title={element.caption} className='media-floater' crossOrigin='https://instagram.com'/> : <video key={window.crypto.randomUUID} src={'https://cors-anywhere.herokuapp.com/' + element.url} autoPlay controls muted className='media-floater' crossOrigin='https://instagram.com'></video>
          })}
        </div>
        <div className="information-post">
          <i className='bx bxs-x-circle close-button' title='Close window' onClick={() => setShowFloating(false)}></i>
          <a href={data.url} target='_blank' rel='noreferrer'>
            <i className='bx bxs-right-top-arrow-circle redirect-button' ></i>
          </a>
          
          <span className='text'>{data.text}</span>

          <span className="date">Published: {data.date}</span>
        </div>
      </div>
    </div>
  )
}

export default FloatingPost