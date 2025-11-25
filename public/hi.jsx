import React, { useState } from 'react';
import './LoginSignup.css';  // Ensure your CSS file exists

const LoginSignup = () => {
    const [action, setAction] = useState("login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const VALID_EMAIL = "test@example.com";
    const VALID_PASSWORD = "password123";

    const handleLogin = () => {
        console.log("Attempting Login:");
        console.log(`Email entered: '${email}'`);
        console.log(`Password entered: '${password}'`);

        // Check the entered credentials
        if (email.trim() === VALID_EMAIL && password.trim() === VALID_PASSWORD) {
            console.log("SUCCESS: Credentials match. Redirecting.");
            // Force reload to the dashboard page
            window.location.href = '/dashboard.html';  // Change to your actual dashboard route
        } else {
            alert("Invalid Email or Password. Try 'test@example.com' and 'password123'.");
        }
    };

    return (
        <div className='container'>
            <div className='header'></div>
            <div className='text'>{action}</div>
            <div className='underline'></div>

            <div className='inputs'>
                {action === "login" ? null : (
                    <div className="input">
                        <input type="text" placeholder="Name or Username" />
                    </div>
                )}
                
                <div className="input">
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            
            {action === "Sign up" ? null : <div className="forgot-password">lost password? <span>CLICK HERE!</span></div>}
            
            <div className="submit-container">
                <div 
                    className={action === "login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign up")}
                >
                    sign up
                </div>
                
                <div 
                    className={action === "Sign up" ? "submit gray" : "submit"} 
                    onClick={handleLogin} // Call handleLogin directly
                >
                    login
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;