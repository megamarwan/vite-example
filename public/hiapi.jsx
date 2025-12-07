import React, { useState } from 'react';
import './LoginSignup.css'; // Ensure your CSS file exists

const LoginSignup = () => {
    const [action, setAction] = useState("login");
    const [name, setName] = useState(''); // New state for Name/Username
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to display API errors

    // --- API Endpoints (REPLACE WITH YOUR ACTUAL ENDPOINTS) ---
    const API_REGISTER_URL = '/api/register';
    const API_LOGIN_URL = '/api/login';
    // -----------------------------------------------------------

    const handleSubmit = async () => {
        setError(''); // Clear previous errors

        if (action === "login") {
            await handleLogin();
        } else {
            await handleRegister();
        }
    };

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Please fill in both email and password.");
            return;
        }

        try {
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Assuming the API returns a token or user data upon success
                console.log("Login Successful!", data);
                // **TODO: Store Auth Token (e.g., in localStorage or context)**
                // Example: localStorage.setItem('authToken', data.token);

                // Redirect to the dashboard
                window.location.href = '/dashboard.html'; // Change to your actual dashboard route
            } else {
                // Display the error message from the API
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login API error:', err);
            setError('An error occurred during login. Please try again.');
        }
    };

    const handleRegister = async () => {
        if (!name || !email || !password) {
            setError("Please fill in all fields to register.");
            return;
        }
        
        try {
            const response = await fetch(API_REGISTER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registration Successful!", data);
                // Optionally log the user in immediately or switch to the login view
                alert('Registration successful! Please log in.');
                setAction("login"); // Switch to login view after successful registration
            } else {
                // Display the error message from the API
                setError(data.message || 'Registration failed. User may already exist.');
            }
        } catch (err) {
            console.error('Registration API error:', err);
            setError('An error occurred during registration. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='header'></div>
            <div className='text'>{action === "login" ? "Login" : "Sign up"}</div>
            <div className='underline'></div>

            {error && <div className="error-message" style={{color: 'red', textAlign: 'center'}}>{error}</div>}

            <div className='inputs'>
                {action === "login" ? null : (
                    <div className="input">
                        {/* Name/Username Input for Registration */}
                        <input 
                            type="text" 
                            placeholder="Name or Username" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}
                
                <div className="input">
                    {/* Email Input */}
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    {/* Password Input */}
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            
            {action === "login" && (
                <div className="forgot-password">
                    lost password? <span>CLICK HERE!</span>
                </div>
            )}
            
            <div className="submit-container">
                {/* Sign Up Button */}
                <div 
                    className={action === "login" ? "submit" : "submit gray"} 
                    onClick={() => setAction("login")}
                >
                    login
                </div>
                
                {/* Login Button */}
                <div 
                    className={action === "login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign up")}
                >
                    sign up
                </div>

                {/* Single Submit Button for the Current Action */}
                <div 
                    className="submit primary" 
                    onClick={handleSubmit} 
                    style={{ marginTop: '20px' }}
                >
                    {action === "login" ? "Log In" : "Register"}
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;