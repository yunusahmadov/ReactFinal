import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getBlogText} from '../../../actions/MainAction';

function SectionSixTop() {
    const blog=useSelector(state=>state.Data.blog)
    const dispatch =useDispatch();
    
    useEffect(()=>{
        dispatch(getBlogText())
    },[])
    console.log(blog);
  return (
    <div className='section-six-top'>
        <h3>{blog.blog}</h3>
        <p>{blog.management}</p>
    </div>
  )
}

export default SectionSixTop

