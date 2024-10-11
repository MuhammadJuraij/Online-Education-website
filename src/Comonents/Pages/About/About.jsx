import React from 'react'
import './About.css'

function About() {

    const team = [
        {
            img: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
            name: 'Jibun Hassan',
            post:'Fouder'
        },
        {
            img: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
            name: 'Muhammad Thanzeel',
            post:'Fouder'

        },
        {
            img: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
            name: 'Salih ',
            post:'Fouder'
        },

    ]



    return (
        <div>


            <div className="container">
                <div className="main">

                    <h2 className='heading'>Our Team</h2>
                    <div className="team-wrapper">

                        {
                            team.map((item, index) => (
                                <div className="item">
                                    <div className="item-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h3 className='names'>{item.name}</h3>
                                    <p className='post'>{item.post}</p>
                                </div>
                            ))
                        }
                    </div>

                    
                        
                    <div className="para">
                            <h2>About Us</h2>
                            <p>With a passion for empowering learners of all ages, our mission is to make education accessible, engaging, and personalized through our cutting-edge educational technology platform.</p>
                        </div>
                   
                    

                </div>
            </div>

        </div>
    )
}

export default About
