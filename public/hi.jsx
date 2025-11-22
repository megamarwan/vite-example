import React, { useState } from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
    const [action, setAction] = useState("login")
  return (
 <div className='container'>
    <div className='header'></div>
    <div className='text'>{action}</div>
    <div className='underline'></div>

    <div className='inputs'>
        {action === "login"? <div></div>: <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Name or Username"/>
        </div>}
       
        <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder="Password"/>
        </div>
    </div>
    {action === "Sign up" ? <div></div> :<div className="forgot-password">lost password? <span>CLICK HERE!</span></div>};
    <div className="submit-container">
        <div className= {action === "login" ? "submit gray": "submit"} onClick={()=> {setAction("Sign up")}}>sign up</div>
        <div className={action === "Sign up" ? "submit gray": "submit"}  onClick={() => {setAction("login")}}>login</div>
    </div>
</div>
  )
}

export default LoginSignup

