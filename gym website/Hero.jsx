import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import heart from '../../assets/heart.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

const Hero = () => {
  const transition= {type: 'spring', duration: 3}
  const mobile= window.innerWidth<=768 ? true: false;
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
     <div className="left-h">
      <Header/>
      <div className="the-best-ad">
        <motion.div
        initial={{left: mobile? '165px': '238px'}}
        whileInView={{left:  '8px'}}
        transition={{...transition, type: 'tween'}}
        ></motion.div>
        <span>The best fitness club in the town</span>
      </div>
      {/* ------------------- */}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
        <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        {/* ------------------ */}
        <div>
          <span>In here we will help you to build and shape your ideal body 
            and live up your life to fullest</span>
        </div>
      </div>
      {/* ---------------------- */}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert coaches</span>
          </div>
        <div>
          <span>+978</span>
        <span>members joined</span>
        </div>
        <div>
          <span>+59</span>
        <span>fitness programme</span>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="hero-button">
        <button className='btn'>Get started</button>
        <button className='btn'>Learn more</button>
      </div>
     </div>
     {/* ----------------------------- */}
     <div className="right-h">
      <button className='btn'>join now</button>
      <motion.div
      initial= {{right: '-1rem'}}
      whileInView={{right: '4rem'}}
      transition={transition}
       className="heart-rate">
        <img src={heart} alt="" />
        <span>Heart rate</span><span>116 bpm</span>
      </motion.div>
      {/* ------------------------------- */}
      <img src={hero_image} alt="" className='hero_image'/>
      <img src={hero_image_back} alt="" className='hero_image_back'/>
      {/* ------------------- */}
      <motion.div
      initial={{x: -100}}
      whileInView={{x: 0}}
      transition={transition}
      className="calories">
        <img src={calories} alt=""  />
        <div>
          <span>Calorie burned</span>
        <span>220 kcl</span>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Hero
