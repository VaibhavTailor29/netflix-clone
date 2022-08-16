import React from 'react'
import "./PlanScreen.css"

function PlanScreen() {

  return (
    <div>
    <div className='planScreen_plan'> 
        <div className='planScreen_info'>
            <h5>Premium Plan</h5>
            <h6>4K+HDR</h6>
        </div>
        <button>Subscribe</button>
    </div>
    <div className='planScreen_plan'> 
        <div className='planScreen_info'>
            <h5>Standard Plan</h5>
            <h6>1080p</h6>
        </div>
        <button
        >Subscribe</button>
    </div>
    <div className='planScreen_plan'> 
        <div className='planScreen_info'>
            <h5>Basic Plan</h5>
            <h6>720p</h6>
        </div>
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default PlanScreen