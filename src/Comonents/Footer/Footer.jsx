import React from 'react'
import logo from '../../assets/img/file.png'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">

                <div className="footer-wrapper">
                    <div className="footerbox">
                        <div className='logo'>
                        <div className='logo-img'> 
                    <img src={logo} alt="" />
                </div>
                           
                             <h1 className='headd'> SmartRook</h1>
                           

                        </div>
                        <p>Embrace the future of innovation and technology with our cutting edge tech bussiness solution</p>
                    </div>

                    <div className="footerbox">
                       
                            <h4 className='footer-title'>Compony</h4>
                        
                        
                            <ul className='footer-item'>
                                <li><a href="/courses">Our programs</a></li>
                                <li> <a href="/services">Our plan</a></li>
                                <li> <a href="/">Become a member</a></li>
                            </ul>
                            
                           
                          
                        
                    </div>
                    <div className="footerbox">
                       
                            <h4 className='footer-title'>Quick Links</h4>
                        
                      
                            <ul className='footer-item'>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/support">Support Us</a></li>
                            </ul>
                           
                        
                    </div>
                </div>
            </div>




        </footer>
    )
}

export default Footer
