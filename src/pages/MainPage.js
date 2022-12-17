import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
function MainPage() {

  const [loader,setLoader]=useState('false')
  useEffect(()=>{
    setTimeout(() => {
      setLoader(true);
    }, 2000);
    setLoader(false);
  },[])

  return (
    <div>
      {
          loader?
          <div>
          <Header/>
     <Main/>
     <Footer/>
     </div>
     :  <div className="loading">
      <img src="https://i.pinimg.com/originals/e9/29/1e/e9291eaddacd460280a34a151dcc5cc4.gif" alt="" />
     </div>
      }
    </div>
  )
}

export default MainPage