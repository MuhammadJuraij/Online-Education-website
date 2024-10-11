import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='container'>

            <div className="contactus_container">

                <div className="form-head">
                <h1>Contact Us</h1>
                <p>
                    We had love to hear from you . please fill out the form below or reach out to us using the contact details provided.
                </p>
                </div>
               
                <div className='form-main'>
                    <div className="form-card">
                        <form action="">
                            <label htmlFor="">Full Name</label>
                            <input type="text" />
                            <label htmlFor="">Email</label>
                            <input type="text" name="" id="" />
                            <label htmlFor="">Message</label>
                            <textarea name="" id=""></textarea>
                            <button  type ='submit' className='sub-btn'>Submit</button>
                        </form>
                       
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Contact
