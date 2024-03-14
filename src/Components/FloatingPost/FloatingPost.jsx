/* eslint-disable react/prop-types */
import './FloatingPost.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper/modules';

function FloatingPost({data,setShowFloating, basicInfoProfile}) {

  const closePostAnimation = () => {
    const containerFloater = document.querySelector('.container-floater')
    const postFloater  = document.querySelector('.floater')

    postFloater.classList.add('animate__zoomOut')
    containerFloater.classList.add('animate__fadeOut')
    
    setTimeout(() => {
      setShowFloating(false)
    }, 500);
  }

  return (
    <div className='container-floater animate__animated animate__fadeIn'>
      <div className="floater animate__zoomIn animate__animated">
        <Swiper
         slidesPerView={1}
         pagination={{ clickable: true }}
         effect='cards'
         grabCursor={true}
         centeredSlides={true}
         modules={[Pagination, EffectCards]}
         >
          {data.carousel_media.map((element) => {
            return <SwiperSlide key={window.crypto.randomUUID}>{(element.type == "image") ? <img src={"https://cors-anywhere.herokuapp.com/" + element.url} alt={element.caption} title={element.caption} className='media-floater' crossOrigin='https://instagram.com'/> : <video key={window.crypto.randomUUID} src={'https://cors-anywhere.herokuapp.com/' + element.url} autoPlay loop className='media-floater' crossOrigin='https://instagram.com'></video>}</SwiperSlide>
          })}
        </Swiper>
        <section className="information-post">
          <div>
            <i className='bx bxs-x-circle close-button' title='Close window' onClick={() => closePostAnimation()}></i>
            <a href={data.url} target='_blank' rel='noreferrer'>
              <i className='bx bxs-right-top-arrow-circle redirect-button' ></i>
            </a>
          </div>

          <span className="basicpost-info">
            <img src={`https://cors-anywhere.herokuapp.com/${basicInfoProfile.picture}`} className="picture-min-post" crossOrigin='anonymous'/>
            <strong>{basicInfoProfile.username}</strong>
          </span>

          <span className="text">{data.text}</span>

          <span className="date">Published: {data.date}</span>
        </section>
      </div>
    </div>
  )
}

export default FloatingPost