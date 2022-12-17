import React from 'react'
import LeadershipCard from './LeadershipCard'

function LeaderShipSection() {
  return (
   <section className='leadership-section'>
        <div className="leadership-section-container">
            <div className="leadership-section-container-top">
                <h3>Our Team</h3>
                <h4>The Leadership team</h4>
                <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.</p>
            </div>
            <div className="leadership-section-container-bottom">
               <LeadershipCard
               image={'../images/michael.png'}
               firstsecondname={'Michael Scott'}
               workedat={'General Manager'}
               />
                  <LeadershipCard
               image={'../images/dwight.png'}
               firstsecondname={'Michael Scott'}
               workedat={'General Manager'}
               />
                  <LeadershipCard
               image={'../images/pam.png'}
               firstsecondname={'Michael Scott'}
               workedat={'General Manager'}
               />
            </div>
        </div>
   </section>
  )
}

export default LeaderShipSection