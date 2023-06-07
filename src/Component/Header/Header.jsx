import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
   
    <div>
      <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="line">
                <div className="col-lg-6" >
                    <div className="position-relative h-100">
                        <img className="position-absolute"
                        src="../images/Venue4.jpg"/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase">Trending</h6>
                        <h1 className="mb-3">
                        Banquet of Unparalleled Luxury</h1>
                        <p className="trend">Discover the latest buzz and excitement surrounding our extraordinary banquet. </p>
                        <div className="line mb-4">
                            <div className="col-6">
                                <img className="img-fluid" src="../images/Venue2.jpg" alt=""/>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src="../images/Venue1.jpg" alt=""/>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary mt-1">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
