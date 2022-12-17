import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import SecondHeader from '../components/SecondPageHeader/SecondHeader'
import SecondPageMain from '../components/SecondPageMain/SecondPageMain'

function SecondPage() {
  
  const [load,setLoad]=useState('false')
  useEffect(()=>{
    setTimeout(() => {
      setLoad(true);
    }, 2000);
    setLoad(false);
  },[])
  return (
  <div>
    {
      load?
      <div>
    <SecondHeader/>
    <SecondPageMain/>
    <Footer/>
      </div>
      :<div className="loading">
      <img src="https://i.pinimg.com/originals/e9/29/1e/e9291eaddacd460280a34a151dcc5cc4.gif" alt="" />
     </div>
    }

  </div>
  )
}

export default SecondPage