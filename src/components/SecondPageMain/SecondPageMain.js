import React from 'react'
import Email from '../Main/EmailSection/Email'
import ProgressBar from '../ProgressBar/ProgressBar'
import Handshake from './Handshake/Handshake'
import LeaderShipSection from './LeaderShipSection/LeaderShipSection'
import NumberSection from './NumbersSection/NumberSection'
import ThingsSection from './ThingsSection/ThingsSection'


function SecondPageMain() {
  return (
    <main>
        <Handshake/>
        <NumberSection
        numbers={'Our numbers'}
        info={'Handshake infographic mass market crowdfunding iteration.'}
        />
        <LeaderShipSection/>
        <ThingsSection/>
        <Email/>
        <ProgressBar/>
        
    </main>
  )
}

export default SecondPageMain