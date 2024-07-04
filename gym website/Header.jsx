import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { useState } from 'react'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile= window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened]= useState(false);
  return (
    <div className='header' id='header'>
      <img src={Logo} alt="" className='logo'/>
      {mobile===true && menuOpened===false ? 
      (
      <div 
      style={{backgroundColor: 'var(--appColor)',
       borderRadius: '5px', 
       padding: '0.5rem',}}

       onClick={()=>setMenuOpened(true)}>

       <img src={Bars} alt=""
        style={{width: '1.5rem',
         height: '1.5rem' }}/>
        </div>
        ) : (
        <ul className='header-menu' id='h007'>
        <li >
          <Link
          onClick={()=>{setMenuOpened(false)}} 
          to ='header'
          spy= {true}
          smooth ={true}
          
          > Home</Link>
          
         </li>
        <li >
          <Link
          onClick={()=>{setMenuOpened(false)}}
          to ='programms'
          spy ={true}
          smooth ={true}
          
          >Programs</Link></li>
        <li >
          <Link 
          onClick={()=>{setMenuOpened(false)}}
          to ='reasons'
          spy ={true}
          smooth ={true}
          
          >Why Us</Link></li>
        <li >
          <Link
          onClick={()=>{setMenuOpened(false)}}
          to= 'plans'
          spy= {true}
          smooth= {true}
          
          >Plans</Link></li>
      </ul>
        )
      }
      
    </div>
  )
}

export default Header




