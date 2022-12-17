import React from 'react'
import SectionThreeLeft from './SectionThreeLeft'
import SectionThreeRight from './SectionThreeRight'

function SectionThree() {
  return (
    <section className='section-three'>
                <div className="section-three-container">
                    <SectionThreeLeft/>
                    <SectionThreeRight/>
                </div>
    </section>
  )
}

export default SectionThree