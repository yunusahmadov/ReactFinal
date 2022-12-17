import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Email from './EmailSection/Email'
import SectionFive from './SectionFive/SectionFive'
import SectionFour from './SectionFour/SectionFour'
import SectionOne from './SectionOne/SectionOne'
import SectionSix from './SectionSix/SectionSix'
import SectionThree from './SectionThree/SectionThree'
import SectionTwo from './SectionTwo/SectionTwo'

function Main() {
  return (
    <main>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <ProgressBar/>
        <Email/>
    </main>
  )
}

export default Main