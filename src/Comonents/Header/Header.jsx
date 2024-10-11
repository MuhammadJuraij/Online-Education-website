import React from 'react'
import logo from '../../assets/img/file.png'
import './Header.css'
import { Link } from 'react-router-dom'



const menuitems=[
    {   
        path:'/',
        display:'Home'
    },
    {
        path:'/services',
        display:'Service'
    },
    {
        path:'/courses',
        display:'Courses'
    },
    {
        path:'/about',
        display:'About Us'
    },
]

function Header() {

  return (
    <div>
      
    <header className='header'>
        <div className="container">
            <div className="nav-container">

          
            <div className="logo">
                <div className='logo-img'> 
                    <img src={logo} alt="" />
                </div>
                <div className='logoname'>
                <h1> SmartRook</h1>
                </div>
                
            </div>

            <div className="navigation">
                <ul className='menu'>
                {menuitems.map(item=>(
                    
                     <li className='nav-item'>
                        <Link to={item.path}>
                        {item.display}
                        </Link>
                        
                        </li>
                   
                   
                ))}
                </ul>
              

            </div>
            </div>
        </div>
    </header>



    </div>
  )
}

export default Header
