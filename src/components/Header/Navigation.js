import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getNav } from '../../actions/MainAction';

function Navigation() {
    const navigation=useSelector(state=>state.Data.navigation)
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getNav()) 
    },[])
    if (navigation!='') {
    // console.log(navigation.nav.map((i)=>{
    //     console.log(i);
    // }
    // )
    // );
    }
    return (
      <div>
          <nav>
    <input type="checkbox" id="check"/>    
    <ul className='nav-ul'>
    <li>
      <Link to={'/second-page'}>{navigation.product}</Link>
      </li>
      <li>
      <Link to={'/'}>{navigation.services}</Link>
      </li>
    <li>{navigation.about}</li>
    <button>{navigation.login}</button>
    </ul>
  </nav>
        <label for="check" id="icon_check">
          <i class="fa-solid fa-bars"></i>
        </label>
      </div>

  )
}

export default Navigation