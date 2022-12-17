import React from 'react'
import HeaderNav from '../Header/HeaderNav'
import HeaderBottom from './HeaderBottom'

function SecondHeader() {
  return (
    <header>
        <HeaderNav/>
        <HeaderBottom
        about={'About'}
        great={'We love to make great things, things that matter.'}
        handshake={'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.'}
        />
    </header>
  )
}

export default SecondHeader