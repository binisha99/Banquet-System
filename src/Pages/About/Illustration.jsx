import React from 'react'

export default function Illustration(){
    return(
        <>
         <div className="content">
          <div className="about_container">
            <div className="info">
              <h1 className='about_title'>About Us</h1>
              <p className='about_paragraph'>"We are passionate about creating unforgettable experiences and helping you celebrate life's special moments in style "</p>
              <button className='button-about'>Button name</button>
            </div>
            <div className="image">
              <img src="../images/Celebrate.jpg"
              className='illustration'/>
            </div>
          </div>
        </div>
        </>
    )
}