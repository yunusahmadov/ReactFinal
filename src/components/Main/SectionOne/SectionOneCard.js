import React from 'react'

function SectionOneCard({sectionOneCardImg,sectionOneCardTitle,sectionOneCardInfo}) {
  return (
    <div className='section-one-card'>
        <img src={sectionOneCardImg} alt="" />
        <h3>{sectionOneCardTitle}</h3>
        <h4>{sectionOneCardInfo}</h4>
        <p>Learning curve network effects return on investment.</p>
        <a href='#'>Explore Page<i class="fa-solid fa-arrow-right"></i></a>
    </div>
  )
}

export default SectionOneCard