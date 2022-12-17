import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHeaderBodyImg } from '../../actions/MainAction';

function HeaderBody({save,funding,button_buy,explore}) {
  const headerbody=useSelector(state=>state.Data.headerbody)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getHeaderBodyImg())
  },[])
  return (
    <div className='header-body-container'>
      <div className="header-body-left">
        <h2>
          {save}
        </h2>
        <p>
          {funding}
        </p>
        <div className="header-body-left-buttons">
            <button className='buy-button'>{button_buy}</button>
            <button className='explore'>{explore}</button>
        </div>
      </div>
      <div className="header-body-right">
            <img src={headerbody.img} alt="" />
      </div>
    </div>
    
  )
}

export default HeaderBody