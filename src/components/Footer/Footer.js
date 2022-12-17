import React from 'react'
import FooterElems from './FooterElems'

function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-container-left">
                <img src="https://assets.website-files.com/61f3090502b5c6b41663e657/61f452035447597652e99025_Boldo-dark.png" alt="" />
                <h3>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</h3>
                <p>
                All rights reserved.
                </p>
            </div>
            <div className="footer-container-right">
                <FooterElems
                elemhead={'Landings'}
                first={'Home'}
                second={'Products'}
                third={'Services'}
                />
                <FooterElems
                elemhead={'Company'}
                first={'Home'}
                second={'Careers'}
                third={'Services'}
                hiring={'Hiring !'}
                />
                    <FooterElems
                elemhead={'Landings'}
                first={'Home'}
                second={'Products'}
                third={'Services'}
                />
            </div>
        </div>
    </footer>
  )
}

export default Footer