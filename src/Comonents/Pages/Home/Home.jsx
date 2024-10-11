import React from 'react'
import Courses from '../Courses/Courses'
import './Home.css'
import one from '../../../assets/img/one.png'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'

function Home() {

  return (
    <>
    <section>
      <div className="container">

        <div className="home-container">
          <div className="home-content">
            <h2 className='section_title'>Learn Everything For Free!!</h2>
            <p>
              Unlock Cutting-Edge Skills with SmartRook - Your Time, Your Expertise
            </p>
            <div className="home-btns">
              <button className='register-btn' onClick={()=>window.open('https://www.instagram.com/smartrook.tech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==','blank')}>Get Started</button>
              <button className='register-btn'>Watch Now</button>
            </div>
          </div>

          <div className="home-img">
            <div className="home-img-wrapper">
              <div className="box-01">
                <div className="box-img">
                  <img src={one} alt="" />
                </div>

                <div className="whatspp-container">
                  <h5>500+ students</h5>
                  <AiOutlineWhatsApp color='green' />
                </div>

                <div className="support">
                  <h5>Active Support</h5>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>

     
  )
}

export default Home
