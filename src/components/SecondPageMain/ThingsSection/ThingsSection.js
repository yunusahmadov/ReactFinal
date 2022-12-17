import React, { useEffect } from 'react'
import ThingsCard from './ThingsCard'
import { useDispatch, useSelector } from 'react-redux'
import { getThings } from '../../../actions/MainAction';
function ThingsSection() {
    const things=useSelector(state=>state.Data.things)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getThings())
    },[])
  return (
    <section className='things-section'>
            <div className="things-section-container">
                <div className="things-section-container-top">
                    <h3>Our Values</h3>
                    <h4>Things in we believe</h4>
                    <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>
                <div className="things-section-container-bottom">
                  <ThingsCard
                      things_img={things.thingsimg1}
                      things_text1={things.thingstext1}
                  />
                  <ThingsCard
                      things_img={things.thingsimg2}
                      things_text1={things.thingstext2}
                  />
                  <ThingsCard
                      things_img={things.thingsimg3}
                      things_text1={things.thingstext3}
                  />
                </div>
            </div>
    </section>
  )
}

export default ThingsSection