import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNumbers } from '../../../actions/MainAction'
import NumCards from './NumCards'

function NumberSection({numbers,info}) {
    const countNums=useSelector(state=>state.Data.countNums)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getNumbers())
    },[])
  return (
    <section className='number-section'>
     <div className="numbers-section-container">
        <div className="numbers-section-container-top">
            <h3>{numbers}</h3>
            <p>{info}</p>
        </div>
        <div className="numbers-section-container-bottom">
           <NumCards
           countnum={`${countNums.firstNum}m`}
           />
            <NumCards
           countnum={countNums.secondNum}
           />
            <NumCards
           countnum={countNums.thirdNum}
           />
            </div>
     </div>
    </section>
  )
}

export default NumberSection