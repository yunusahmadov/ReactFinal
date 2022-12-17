import React from 'react'

function FooterElems({elemhead,first,second,third,hiring}) {
  return (

      <div className="footer-card">
          <p className='footer-card-header'>{elemhead}</p>
          <div className="footer-card-elems">
              <ul>
                  <li>{first}</li>
                  <li className='hiring-parent'>
                    {second}
                    <p className='hiring'>{hiring}</p>
                   </li>
                  <li>{third}</li>
              </ul>
          </div>
      </div>

  )
}

export default FooterElems