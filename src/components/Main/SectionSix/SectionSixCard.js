import React, { useEffect } from 'react'


function SectionSixCard({cardimage,about,userPhoto,userName}) {

  return (

    <div className='section-six-card'>
        <img src={cardimage}  />
        <div className="section-six-card-info">
            <h4>Category</h4>
            <p>November 22, 2021</p>
        </div>
        <p className='about'>{about}</p>
        <div className="section-six-card-user">
            <img src={userPhoto}  />
            <h5>{userName}</h5>
        </div>
    </div>

  )
}

export default SectionSixCard