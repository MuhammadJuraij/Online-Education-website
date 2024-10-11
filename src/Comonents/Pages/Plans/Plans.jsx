import React from 'react'
import './Plans.css'

function Plans() {

    const plansarray = [
        {
            title: 'Regular Member',
            price: '$0',
            duration: '/month',
            color: '#fff',
            features: [
                'Access to a limited selection of courses',
                'Standard customer support',
                'No personal mentor',
                'Basic options and features',
                '5 classes per week',
                'Access to community forums'
            ]

        },
        {
            title: 'Standard Member',
            price: '$9.99',
            duration: '/month',
            color: '#fff',
            features: [
                'Unlimited access to the courses',
                'Customer support',
                'Access to a personal mentor',
                'Enhanced options and features',
                '10 classes per week',
                'Access to selected webinars',
                'Course completion badges',
            ]

        },
        {
            title: 'Premium Member',
            price: '$29.99',
            duration: '/month',
            color: '#6f55f2',
            features: [
                'Unlimited access to the courses',
                'Priority customer support',
                'Dedicated personal mentor',
                'Advanced options and features',
                'Unlimited classes per week',
                'Access to exclusive content and webinars',
                'Early access to new courses',
                'Certification upon course completion'
            ]

        },
        
    ]


    return (
        <div className='container'>
            <div className="placing-top">
                <h2 className='section_title'>Premium Pricing Plan</h2>
                <p>Unlock elite tech services with our premium pricing plan and soar ahead of the competition</p>
            </div>

            <div className="pricing_wrapper">

                {
                    plansarray.map((item, index) => (
                        <div className="pricing_item" key={index}>
                            <div className="pricing_card_top">
                                <h2>{item.title}</h2>
                                <h2>{item.price} <span>{item.duration}</span></h2>
                            </div>
                            <div className="services">
                                <ul>
                                    {item.features.map((features,index)=>(
                                        <li key={index}>{features}</li>
                                    ))}

                                </ul>
                                
                            </div>
                            <button className='register-btn'>join</button>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default Plans
