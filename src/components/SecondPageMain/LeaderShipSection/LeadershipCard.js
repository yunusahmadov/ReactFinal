import React from 'react'

function LeadershipCard({firstsecondname,workedat,image}) {
  return (
    <div className="leadership-card">
        <img src={image} alt="" />
        <h5>{firstsecondname}</h5>
        <p>{workedat}</p>
    </div>
  )
}

export default LeadershipCard