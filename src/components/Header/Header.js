import React from 'react'
import HeaderBody from './HeaderBody'
import HeaderNav from './HeaderNav'
import HeaderSlider from './HeaderSlider'

function Header() {

  return (
    <header>
        <HeaderNav/>
        <HeaderBody
        save={'Save time by building  fast with Boldo Template '}
        funding={'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.'}
        button_buy={'Buy template'}
        explore={'Explore'}
        />
      <HeaderSlider/>
    </header>
  )
}

export default Header