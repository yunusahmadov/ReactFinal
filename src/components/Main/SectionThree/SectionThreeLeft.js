import React from 'react'
import SectionThreeCard from './SectionThreeCard'

function SectionThreeLeft() {
  return (
    <div className='section-three-container-left'>
        <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
        <div className="section-three-cards-container">
          <SectionThreeCard
          textThree={'We connect our customers with the best.'}
          iconThree={'fa-solid fa-feather'}
          />
          <SectionThreeCard
          textThree={'Advisor success customer launch party.'}
          iconThree={'fa-solid fa-eye'}

          />
          <SectionThreeCard
          textThree={'Business-to-consumer long tail.'}
          iconThree={'fa-solid fa-sun'}
          />
        </div>
    </div>
  )
}

export default SectionThreeLeft