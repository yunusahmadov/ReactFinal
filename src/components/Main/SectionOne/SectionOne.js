import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSectionOneImg } from '../../../actions/MainAction';
import SectionOneCard from './SectionOneCard'
import SectionOneText from './SectionOneText';

function SectionOne() {
    const sectionOneCards=useSelector(state=>state.Data.sectionOneCards)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getSectionOneImg())
    },[])
  return (
    
   <section className='section-one'>
                <SectionOneText/>
            <div className="section-one-cards-container">
                <SectionOneCard
                sectionOneCardImg={sectionOneCards.img1}
                sectionOneCardTitle={sectionOneCards.title1}
                />
                <SectionOneCard
                sectionOneCardImg={sectionOneCards.img2}
                sectionOneCardTitle={sectionOneCards.title2}
                />
                <SectionOneCard
                sectionOneCardImg={sectionOneCards.img3}
                sectionOneCardTitle={sectionOneCards.title3}
                />
            </div>

   </section>
  )
}

export default SectionOne