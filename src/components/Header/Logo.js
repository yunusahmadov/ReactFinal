import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getText } from '../../actions/MainAction';

function Logo() {
    const logo=useSelector(state=>state.Data.logo)
    const dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(getText())        
      },[])
      if (logo!='') {
        console.log(logo.text);
      }

  return (
    <div className='logo'>
        <img src={logo.img} alt="" />
        <p>{logo.text}</p>
    </div>
  )
}

export default Logo