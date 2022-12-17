import React, { useEffect, useState } from 'react'
import SectionSixCard from './SectionSixCard'
import { useDispatch, useSelector } from 'react-redux';
import { getCardImg, getUserImg } from '../../../actions/MainAction';
// import img1 from '../../../../public/images/Ellipse 10.png'
function SectionSixBottom() {
  const cardimg=useSelector(state=>state.Data.cardimg)
  const userImg=useSelector(state=>state.Data.userImg)
  const dispatch =useDispatch();

  useEffect(()=>{
      dispatch(getCardImg())
      dispatch(getUserImg())
  },[])

  const [loadMore,setLoadMore]=useState (false)

  function loadMoreFunc() {
    setLoadMore(!loadMore)
  }
  return (
    <div className="section-six-bottom">
         <div className='section-six-bottom-cards'>
      <SectionSixCard
      cardimage={cardimg.cardimg1}
      about={'Pitch termsheet backing validation focus release.'}
      userPhoto={userImg.userPhoto1}
      userName={'Chandler Bing'}
      />
      <SectionSixCard
      cardimage={cardimg.cardimg2}
      about={'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'}
      userPhoto={userImg.userPhoto1}
      userName={'Chandler Bing'}
     />
      <SectionSixCard
      cardimage={cardimg.cardimg3}
      about={'Beta prototype sales iPad gen-z marketing network effects value proposition.s'}
      />
      {
        loadMore?
      <>
      <SectionSixCard
      cardimage={cardimg.cardimg1}
      about={'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'}
      />
      <SectionSixCard
      cardimage={cardimg.cardimg1}
      about={'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'}
      />
      <SectionSixCard
      cardimage={cardimg.cardimg3}
      about={'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.'}

      />
      </>:null
      }
    </div>
    <button onClick={()=>loadMoreFunc()} className='loadMoreBtn'>
      {
        loadMore?
          <p>Show Less</p>:<p>Load More</p>
      }
    </button>
    </div>
 
  )
}

export default SectionSixBottom