import React from 'react'

function SectionThreeCard({textThree,iconThree}) {
  return (
    <div className='section-three-card' tabIndex={0}>
        <i class={iconThree}></i>
        <p>{textThree}</p>
    </div>
  )
}

export default SectionThreeCard