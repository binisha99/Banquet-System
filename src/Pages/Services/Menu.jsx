import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div>
        <menu className="menu_list mt-60 mb-60">
	 <div className="content">
		<div className="main">
		   <div className="col-xl-12">
			  <div className="menu-title text-center mb-60">
				 <p className="menu-title">Famous for good food</p>
				 <h4>our menu</h4>
			  </div>
		   </div>
		</div>
		<div className="main">
		   <div className="tab-content col-xl-12" id="myTabContent">
			  <div className="tab-pane">
				 <div className="main">
					<div className="col-md-6">
					   <div className="single_menu_list">
						  <img src="../images/menu7.jpg" />
						  <div className="menu_content">
							 <h4>Spaghetti<span>Rs.220</span></h4>
							 <p className="menuparaa">spaghetti with meat balls</p>
						  </div>
					   </div>
					   <div className="single_menu_list">
						  <img src="../images/menu2.jpg"/>
						  <div className="menu_content">
							 <h4>Cheese Pizza<span>Rs.425</span></h4>
							 <p className="menuparaa">Cheesy vegetable pizza with jalapenio toppings</p>
						  </div>
					   </div>
					   <div className="single_menu_list">
						  <img src="../images/menu9.jpg" />
						  <div className="menu_content">
							 <h4>Veg biryani <span>Rs.140</span></h4>
							 <p className="menuparaa">Vegeterian biryani with toasted peanuts and dates</p>
						  </div>
					   </div>
					</div>
					<div className="single_menu_list">
						  <img src="../images/menu4.jpg" />
						  <div className="menu_content">
						  <h4>Palak Paneer<span>Rs.145</span></h4>
							 <p className="menuparaa">Buttered palak paneer</p>
						  </div>
					   </div>
					   <div className="single_menu_list">
						  <img src="../images/menu5.jpg" />
						  <div className="menu_content">
							 <h4>Mushroom soup<span>Rs.80</span></h4>
							 <p className="menuparaa">Mushroom soup with other vegetables</p>
						  </div>
					   </div>
					   <div className="single_menu_list">
						  <img src="../images/menu6.jpg" />
						  <div className="menu_content">
							 <h4>Fried Fish<span>Rs.270</span></h4>
							 <p className="menuparaa">Fried spicy small fish</p>
						  </div>
					   </div>

    </div>
    </div>
    </div>
		</div>
	 </div>
  </menu>
         </div>
  )
}

export default Menu
