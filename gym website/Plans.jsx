import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
        <div className="programs-header">
        <span className='stroke-text'>ready for</span>
        <span style={{color: "white"}}>your journey</span>
        <span className='stroke-text'>with us</span>
        </div>
        {/* ---------------------- */}

        <div className="plans" id='plans'>
          {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>

              <div className="features">
                {plan.features.map((feature,i)=>(
                  <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
          ))}
              </div>
              <div>
                <span>see more benefits</span>
              </div>
              <button className='btn'>join now</button>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default Plans
