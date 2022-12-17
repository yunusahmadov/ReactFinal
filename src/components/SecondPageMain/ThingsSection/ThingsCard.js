import React from 'react'


function ThingsCard({things_img,things_text1}) {

  return (
    <div className="things-card">
        <div className="things-card-left">
            <img src={things_img} alt="" />
        </div>
        <div className="things-card-right">
            <h5>{things_text1}</h5>
            <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. </p>
        </div>
    </div>
  )
}

export default ThingsCard