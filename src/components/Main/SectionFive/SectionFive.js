import React from 'react'
import SectionFiveLeft from './SectionFiveLeft'
import SectionFiveRight from './SectionFiveRight'

function SectionFive() {
  return (
   <section className='section-five'>
        <div className="section-five-container">
            <img src="https://assets.website-files.com/61f3090502b5c6b41663e657/61f4382d4303c8487b16dd52_Boldo-image-3.jpg" alt="" />
            <div className="section-five-bottom">
                <SectionFiveLeft/>
                <SectionFiveRight/>
            </div>
        </div>
   </section>
  )
}

export default SectionFive