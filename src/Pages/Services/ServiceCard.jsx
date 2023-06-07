import React from 'react'
import './Services.css'

function ServiceCard() {
  return (
    <div>
      <section>
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div>
            <h3 className='service-name'>Catering</h3>
            <p className='details'>
            With our diverse menu selections, we can cater to a wide range of tastes and dietary preferences.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-brush"></i>
            </div>
            <h3
           className='service-name' >Event Decoration</h3>
            <p className='details'>
            Our skilled decorators meticulously craft exquisite centerpieces that serve as the focal point of each table.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-wrench"></i>
            </div>
            <h3 className='service-name'>Event Booking</h3>
            <p className='details'>
            Our user-friendly online banquet system allows you to browse through a wide selection of banquet venues.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3 className='service-name'>Music and customized playlists</h3>
            <p className='details'>
            Our DJs work closely with you to create a customized playlist that reflects your musical taste. 
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-broom"></i>
            </div>
            <h3 className='service-name'>Professional MC Services</h3>
            <p className='details'>
            Our professional MCs are charismatic and experienced in hosting and guiding various segments of your event,
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3 className='service-name'>Experienced Photographers</h3>
            <p className='details'>
            Our team consists of skilled and experienced photographers who specialize in event photography.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
   
  )
}

export default ServiceCard
