import React, { useState } from 'react';
import './LoginSignup.css'; // Ensure your CSS file exists

const LoginSignup = () => {
    const [action, setAction] = useState("login");
    const [name, setName] = useState(''); // State for Name/Username
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [error, setError] = useState(''); // State to display API errors

    // API Endpoints
    const API_REGISTER_URL = 'https://ems-api.mataaa.com/gateway/CatalogManagement/api/v1/AddPanale';
    const API_LOGIN_URL = 'https://ems-api.mataaa.com/gateway/CatalogManagement/api/v1/AddPanale'; // Placeholder for login

    const handleSubmit = async () => {
        setError(''); // Clear previous errors

        if (action === "login") {
            await handleLogin();
        } else {
            await handleRegister();
        }
    };

    const handleLogin = async () => {
        // Normally, you'd have actual API login logic here
        // For demonstration, we're using the same endpoint as placeholder

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
                body: JSON.stringify({ images: name, linkupKey: `${email};${password}` }), // Adjust according to actual API requirements
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Login Successful!", data);
                window.location.href = '/dashboard.html'; // Change the route as necessary
            } else {
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
                body: JSON.stringify({ images: name, linkupKey: `${email};${password}` }), // Adjust according to actual API requirements
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registration Successful!", data);
                alert('Registration successful! Please log in.');
                setAction("login"); // Switch to login view after successful registration
            } else {
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

            {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

            <div className='inputs'>
                {action === "login" ? null : (
                    <div className="input">
                        <input 
                            type="text" 
                            placeholder="Name or Username" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
            
            {action === "login" && (
                <div className="forgot-password">
                    lost password? <span>CLICK HERE!</span>
                </div>
            )}
            
            <div className="submit-container">
                <div 
                    className={action === "login" ? "submit" : "submit gray"} 
                    onClick={() => setAction("login")}
                >
                    login
                </div>
                
                <div 
                    className={action === "login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign up")}
                >
                    sign up
                </div>

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
};

export default LoginSignup;