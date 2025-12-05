// Annotated copy of public/hiapi.jsx — each line has a short explanation.
// This file is a read-only, commented version for documentation and review.

// Import React and the `useState` hook from the React library.
import React, { useState } from 'react'; // Provides React and state management for the component

// Import the CSS file used to style the login/signup component.
import './LoginSignup.css'; // Brings in the component-specific styles

// Define a functional component named `LoginSignup` using an arrow function.
const LoginSignup = () => {
    // Local state `action`, defaulting to "login", controls which form is shown.
    const [action, setAction] = useState("login"); // 'login' or 'signup' view

    // Local state `name` holds the name/username for registration.
    const [name, setName] = useState(''); // Name/username input value

    // Local state `email` holds the user's email input.
    const [email, setEmail] = useState(''); // Email input value

    // Local state `password` holds the user's password input.
    const [password, setPassword] = useState(''); // Password input value

    // Local state `error` holds any error message to display to the user.
    const [error, setError] = useState(''); // Error message from validation or API

    // --- API Endpoints (REPLACE WITH YOUR ACTUAL ENDPOINTS) ---
    // Constant for the registration endpoint URL.
    const API_REGISTER_URL = '/api/register'; // Endpoint to register a new user

    // Constant for the login endpoint URL.
    const API_LOGIN_URL = '/api/login'; // Endpoint to login an existing user
    // -----------------------------------------------------------

    // `handleSubmit` delegates to login or register based on the current action.
    const handleSubmit = async () => {
        // Clear any previous error before attempting submit.
        setError(''); // Reset error message

        // If the action is 'login', call the login handler.
        if (action === "login") {
            await handleLogin(); // Attempt to login
        } else {
            // Otherwise attempt to register a new user.
            await handleRegister(); // Attempt to register
        }
    };

    // `handleLogin` performs validation and calls the login API.
    const handleLogin = async () => {
        // Basic client-side validation to ensure fields are present.
        if (!email || !password) {
            setError("Please fill in both email and password."); // Show validation error
            return; // Stop execution if validation fails
        }

        try {
            // Call the login API with email and password as JSON.
            const response = await fetch(API_LOGIN_URL, {
                method: 'POST', // Use POST to submit credentials
                headers: {
                    'Content-Type': 'application/json', // Tell server we're sending JSON
                },
                body: JSON.stringify({ email, password }), // Request payload
            });

            // Parse the JSON response body from the server.
            const data = await response.json(); // API response body as JSON

            // If the HTTP response status is OK (2xx) treat it as success.
            if (response.ok) {
                // On success, log data (could include token or user info).
                console.log("Login Successful!", data); // Debug log

                // **TODO: Store Auth Token (e.g., in localStorage or context)**
                // Example: localStorage.setItem('authToken', data.token);

                // Redirect the browser to the dashboard page after successful login.
                window.location.href = '/dashboard.html'; // Navigate to dashboard
            } else {
                // If the response wasn't OK, display the server-provided message.
                setError(data.message || 'Login failed. Please check your credentials.'); // Show API error
            }
        } catch (err) {
            // If the fetch throws (network or parsing error), catch and display.
            console.error('Login API error:', err); // Log the detailed error
            setError('An error occurred during login. Please try again.'); // Generic error for the UI
        }
    };

    // `handleRegister` performs validation and calls the register API.
    const handleRegister = async () => {
        // Require all three fields for registration: name, email, password.
        if (!name || !email || !password) {
            setError("Please fill in all fields to register."); // Validation error
            return; // Stop execution on validation error
        }
        
        try {
            // Call the registration API with the provided data.
            const response = await fetch(API_REGISTER_URL, {
                method: 'POST', // POST to create a new user
                headers: {
                    'Content-Type': 'application/json', // JSON payload
                },
                body: JSON.stringify({ name, email, password }), // Registration data
            });

            // Parse the response JSON body.
            const data = await response.json(); // API response

            // If registration succeeded (HTTP 2xx), handle success.
            if (response.ok) {
                console.log("Registration Successful!", data); // Debug log

                // Optionally inform the user and switch to login view.
                alert('Registration successful! Please log in.'); // Simple user feedback
                setAction("login"); // Switch UI to login mode after signup
            } else {
                // If the API returned an error, surface the message.
                setError(data.message || 'Registration failed. User may already exist.'); // Show API error
            }
        } catch (err) {
            // Handle network or unexpected errors.
            console.error('Registration API error:', err); // Debug log
            setError('An error occurred during registration. Please try again.'); // Generic UI error
        }
    };

    // The component's rendered JSX starts here.
    return (
        // Root container div for the login/signup widget.
        <div className='container'> {/* top-level wrapper */}
            {/* Decorative/header area (empty div used for spacing or background) */}
            <div className='header'></div> {/* header spacer */}

            {/* Title text that switches between Login and Sign up based on `action` */}
            <div className='text'>{action === "login" ? "Login" : "Sign up"}</div> {/* title */}

            {/* Underline decorative element used in the UI */}
            <div className='underline'></div> {/* underline */}

            {/* Conditionally render an error message box when `error` is non-empty */}
            {error && <div className="error-message" style={{color: 'red', textAlign: 'center'}}>{error}</div>} {/* error display */}

            {/* Container for input fields */}
            <div className='inputs'> {/* inputs wrapper */}
                {/* If the current action is not 'login', render the name input for registration */}
                {action === "login" ? null : (
                    <div className="input"> {/* name input wrapper */}
                        {/* Name/Username Input for Registration */}
                        <input 
                            type="text" 
                            placeholder="Name or Username" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} // Update `name` state on change
                        />
                    </div>
                )}
                
                {/* Email input (rendered for both login and signup) */}
                <div className="input"> {/* email input wrapper */}
                    {/* Email Input */}
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update `email` state
                    />
                </div>
                {/* Password input (rendered for both login and signup) */}
                <div className="input"> {/* password input wrapper */}
                    {/* Password Input */}
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update `password` state
                    />
                </div>
            </div>
            
            {/* When on the login view, show a 'forgot password' hint */}
            {action === "login" && (
                <div className="forgot-password"> {/* forgot password link area */}
                    lost password? <span>CLICK HERE!</span>
                </div>
            )}
            
            {/* Container for submit and toggle buttons */}
            <div className="submit-container"> {/* submit and toggle buttons wrapper */}
                {/* Button to switch to the Login view — visually active when `action` is 'login' */}
                <div 
                    className={action === "login" ? "submit" : "submit gray"} 
                    onClick={() => setAction("login")} // Switch to login view when clicked
                >
                    login
                </div>
                
                {/* Button to switch to the Sign up view — visually active when `action` is not 'login' */}
                <div 
                    className={action === "login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign up")} // Switch to sign up view when clicked
                >
                    sign up
                </div>

                {/* Single submit button that runs the current action (login/register) */}
                <div 
                    className="submit primary" 
                    onClick={handleSubmit} 
                    style={{ marginTop: '20px' }}
                >
                    {action === "login" ? "Log In" : "Register"} {/* Label depends on action */}
                </div>
            </div>
        </div>
    );
}

// Export the component as the default export from this module.
export default LoginSignup; // Makes the component available to imports
