import React from 'react'
import './Register.css'
const Register = () => {
  return ( 
    <div className="signupWrapper">
    <div className="main-signup">
    <input type="checkbox" id="chk" aria-hidden="true" />

    <div className="signup">
      <form>
        <label htmlFor="chk" aria-hidden="true">Sign up</label>
        <input type="text" name="txt" placeholder="User name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button className='signupbutton'>Sign up</button>
      </form>
    </div>

    <div className="login">
      <form>
        <label htmlFor="chk" aria-hidden="true">Login</label>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="pswd" placeholder="Password" required />
        <button className='signupbutton'>Login</button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Register
