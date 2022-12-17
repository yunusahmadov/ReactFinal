import React from 'react'
import SectionTwoLeft from './SectionTwoLeft'
import SectionTwoRight from './SectionTwoRight'

function SectionTwo() {
  return (
    <section className='section-two'>
        <div className="section-two-container">
            <SectionTwoLeft/>
            <SectionTwoRight
            customers={'We connect our customers with the best, and help them keep up-and stay open.'}   
            />
        </div>
    </section>
  )
}

export default SectionTwo