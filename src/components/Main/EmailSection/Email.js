import React from 'react'

function Email() {
  return (
   <section className='email-section'>
     <div className="email-section-container">
     <h3>An enterprise template to ramp up your company website</h3>
        <div className="check-input">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingPassword" placeholder="Enter Website URL" />
              <label for="floatingPassword">Your email adress</label>
            </div>
              <button>Start Now</button>
        </div>
     </div>
   </section>
  )
}

export default Email