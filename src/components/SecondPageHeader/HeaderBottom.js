import React from 'react'

function HeaderBottom({about,great,handshake}) {
  return (
    <div className='header-bottom'>
        <h3>{about}</h3>
        <h4>{great}</h4>
        <p>{handshake}</p>
    </div>
  )
}

export default HeaderBottom