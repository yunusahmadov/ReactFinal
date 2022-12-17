import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiveImg } from '../../../actions/MainAction';

function Handshake() {
const fiveimgs=useSelector(state=>state.Data.fiveimgs)
const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getFiveImg())
},[])
  return (
<section className='handshake-section'>
    <div className="handshake-section-container">
              <div className="handshake-section-container-images">
                  <div className="handshake-section-container-images-left">
                      <img src={fiveimgs.manphone} alt="" />
                      <img src={fiveimgs.blueback} alt="" />
                  </div>
                  <div className="handshake-section-container-images-center">
                      <img src={fiveimgs.womanphone} alt="" />
                  </div>
                  <div className="handshake-section-container-images-right">
                      <img src={fiveimgs.greenback} alt="" />
                      <img src={fiveimgs.threemans} alt="" />
                  </div>
              </div>
    </div>
    <div className="handshake-text-container">
        <h3>Our History</h3>
        <h4>Handshake infographic mass market crowdfunding iteration.</h4>
        <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
    </div>
</section>
  )
}

export default Handshake