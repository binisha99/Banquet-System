import React from 'react'
import './CardComponent.css'

const CardComponent = () => {
  return (
    <div>
      <div class="main-container">
  <div class="grid-container">
    <div class="card card--2x">
      <div class="card__content big-script padding-large">
        <p classname="caption">Where Celebrations Come to Life</p>
      </div>
    </div>
    <div class="card">
      <div class="card__image">
        <img src="../images/icon1.jpg" />
      </div>
    </div>
    <div class="card">
      <div class="card__image">
        <img src="../images/Venue4.jpg"/>
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <p><em>Celebrate in Style</em></p>
        
      </div>
    </div>
    <div class="card card--horizontal">
      <div class="card__image">
        <img src="../images/icon2.jpg" />
      </div>
    </div>
    <div class="card card--featured">
      <div class="card__side-by-side--m">
        <div class="card__image">
          <img src="../images/icon3.jpg" />
        </div>
        <div class="card__content padding-large--l">
          <h2 className='company-name'>VennueVista</h2>
          <p>we believe that every love story deserves to be celebrated in grand style. </p>
          <p>Allow us to be a part of your extraordinary day, where love, joy, and cherished moments come together in perfect harmony.</p>
          <div class="card__button">More...</div>
        </div>
      </div>
    </div>
    <div class="card card--vertical">
      <div class="card__image">
        <img src="../images/icon4.jpg" />
      </div>
    </div>
    <div class="card">
      <div class="card__image">
        <img src="../images/birthday.jpg" />
      </div>
    </div>
    <div class="card card--horizontal">
      <div class="card__side-by-side">
        <div class="card__image">
          <img src="../images/Venue3.jpg"/>
        </div>
        <div class="card__content">
          <p>Immerse yourself in the soothing ambiance</p>
        </div>
      </div>
    </div>
    <div class="card card--vertical">
      <div class="card__image">
        <img src="../images/buffet.jpg" />
      </div>
    </div>
    <div class="card">
      <div class="card__image">
        <img src="../images/babyshower.jpg" />
      </div>
    </div>
    <div class="card">
      <div class="card__content">
        <p><em>VenueVista</em></p>
        <p>Where Celebrations Come to Life</p>
      </div>
    </div>
   </div>
   </div>
    </div>
  )
}

export default CardComponent
