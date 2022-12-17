import React from 'react'

function SliderCard({swiper_text,profile_img,user_name,user_work}) {
  return (
    <div className="slider-info">
    <div className="slider-info-top">
    <p>{swiper_text}</p>
    </div>
    <div className="slider-info-bottom">
        <img src={profile_img} alt="" />
        <div className="name-work">
            <h5>{user_name}</h5>
            <h6>{user_work}</h6>
        </div>
      </div>
</div>
  )
}

export default SliderCard