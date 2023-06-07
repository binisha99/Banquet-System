import React from 'react'
import './Team.css'

const Team = () => {
  return (
    <div>
        <div className="team">
            <h1 className="teamheading">Our Team Members</h1>
  <div class="body-container">
    <input type="radio" name="dot" id="one"/>
    <input type="radio" name="dot" id="two"/>
    <div class="main-card">
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="../images/owner.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Aman Thapa</div>
             <div class="job">Owner</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="../images/chef.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Nabin Lama</div>
             <div class="job">Chef</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
            <img src="../images/chef2.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Rajat Bhattarai</div>
             <div class="job">Chef</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="../images/planner.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Aarav Lama</div>
             <div class="job">Manager</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             -<img src="../images/decorator.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Sneha Shakya</div>
             <div class="job">Event Decorator</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
        <div class="card">
         <div class="content">
           <div class="img">
             <img src="../images/manager.jpg" alt=""/>
           </div>
           <div class="details">
             <div class="name">Raunak Bhatta</div>
             <div class="job">Audio-Visual Technician</div>
           </div>
           <div class="media-icons">
             <a href="#"><i class="fab fa-facebook-f"></i></a>
             <a href="#"><i class="fab fa-twitter"></i></a>
             <a href="#"><i class="fab fa-instagram"></i></a>
             <a href="#"><i class="fab fa-youtube"></i></a>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div class="button">
      <label for="one" class=" active one"></label>
      <label for="two" class="two"></label>
    </div>
  </div>
  </div>
        </div>
  )
}

export default Team
