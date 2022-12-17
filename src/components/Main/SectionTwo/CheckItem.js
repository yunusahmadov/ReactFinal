import React from 'react'

function CheckItem({checktext}) {
  return (
    <div className='check-item'>
        <i class="fa-solid fa-circle-check"></i>
        <p>{checktext}</p>
    </div>
  )
}

export default CheckItem