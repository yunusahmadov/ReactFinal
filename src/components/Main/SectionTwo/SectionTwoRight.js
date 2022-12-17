import React from 'react'
import CheckItem from './CheckItem'

function SectionTwoRight({customers}) {
  return (
    <div className='section-two-container-right'>
            <h3>{customers}</h3>
          <div className="check-container">
              <CheckItem
                  checktext={'We connect our customers with the best.'}
              />
              <CheckItem
                  checktext={'Advisor success customer launch party.'}
              />
              <CheckItem
                  checktext={'Business-to-consumer long tail.'}
              />
              <button>Start Now</button>
          </div>
    </div>
  )
}

export default SectionTwoRight