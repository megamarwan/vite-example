import React, { useState } from 'react'; // Imports the React library (Object) and the useState Hook (Function) for managing component state.
import './LoginSignup.css'; // Imports the component's specific CSS file (File/Module).

// Function: Defines the main functional component named LoginSignup.
const LoginSignup = () => {
    
    // Variable: Defines 'action' state (String, 'login' or 'Sign up') and 'setAction' function to update it.
    const [action, setAction] = useState("login"); 
    
    // Variable: Defines 'email' state (String) and 'setEmail' function to update it, used for input tracking.
    const [email, setEmail] = useState(''); 
    
    // Variable: Defines 'password' state (String) and 'setPassword' function to update it, used for input tracking.
    const [password, setPassword] = useState(''); 

    // Variable: Defines a constant String holding the hardcoded valid email for validation.
    const VALID_EMAIL = "test@example.com"; 
    
    // Variable: Defines a constant String holding the hardcoded valid password for validation.
    const VALID_PASSWORD = "password123"; 

    // Function: Defines the handleLogin function, executed when the user attempts to log in.
    const handleLogin = () => { 
        
        // Console logging for debugging: Displays a message indicating login attempt.
        console.log("Attempting Login:"); 
        
        // Console logging for debugging: Displays the current value of the email state.
        console.log(`Email entered: '${email}'`); 
        
        // Console logging for debugging: Displays the current value of the password state.
        console.log(`Password entered: '${password}'`); 
        
        // Conditional Statement: Checks if the trimmed email and password match the defined constants.
        if (email.trim() === VALID_EMAIL && password.trim() === VALID_PASSWORD) { 
            
            // Console logging for debugging: Confirms successful credential match.
            console.log("SUCCESS: Credentials match. Redirecting via window.location.href."); 
            
            // Browser API Call: Performs a full page redirect to a static HTML file, bypassing React Router.
            window.location.href = '/dashboard.html'; 
            
        } else { // Execution path if credentials do not match.
            
            // Console logging for debugging: Reports login failure.
            console.log("FAILURE: Credentials do not match."); 
            
            // Browser API Call: Displays a pop-up alert to the user indicating invalid credentials.
            alert("Invalid Email or Password. Try 'test@example.com' and 'password123'."); 
        } // Closes the if/else block.
    }; // Closes the handleLogin function.

    // Keyword: Starts the return block, which contains the component's JSX structure.
    return ( 
        // JSX Element: The main container div for the component, styled by the 'container' class.
        <div className='container'>  
            // JSX Element: A simple div for styling purposes (e.g., top header border).
            <div className='header'></div> 
            // JSX Element: Displays the current value of the 'action' state ("login" or "Sign up").
            <div className='text'>{action}</div> 
            // JSX Element: A simple div often used to render a decorative underline.
            <div className='underline'></div> 

            // JSX Element: Container for all input fields.
            <div className='inputs'> 
                // Conditional Rendering: Renders the Name/Username input ONLY if 'action' is "Sign up".
                {action === "login"? <div></div>: <div className="input"> 
                    <img src="" alt="" /> // JSX Element: Placeholder for an image (e.g., an icon).
                    <input type="text" placeholder="Name or Username"/> // JSX Element: The Name input field.
                </div>} // Closes conditional rendering block.
                
                // JSX Element: Container for the Email input.
                <div className="input"> 
                    <img src="" alt="" /> // Placeholder for an icon.
                    // JSX Element: The Email input field.
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email} // Prop: Binds input value to the 'email' state.
                        onChange={(e) => setEmail(e.target.value)} // Prop: Event handler that updates the 'email' state on every change.
                    />
                </div>
                // JSX Element: Container for the Password input.
                <div className="input"> 
                    <img src="" alt="" /> // Placeholder for an icon.
                    // JSX Element: The Password input field.
                    <input 
                        type="password" 
                        placeholder="Password"
                        value={password} // Prop: Binds input value to the 'password' state.
                        onChange={(e) => setPassword(e.target.value)} // Prop: Event handler that updates the 'password' state on every change.
                    />
                </div>
            </div> // Closes the inputs container.
            
            // Conditional Rendering: Renders the "Forgot Password" link ONLY if 'action' is "login".
            {action === "Sign up" ? <div></div> :<div className="forgot-password">lost password? <span>CLICK HERE!</span></div>} 
            
            // JSX Element: Container for both submit buttons.
            <div className="submit-container"> 
                
                // JSX Element: The Sign Up button.
                <div 
                    className={action === "login" ? "submit gray": "submit"} // Prop: Dynamically sets class ('gray' if action is 'login') for styling.
                    onClick={() => { // Prop: Event handler executed on click.
                        if (action === "Sign up") { // Conditional Statement: If currently in 'Sign up' mode, log submission.
                             console.log("Sign Up submitted."); // Console logging.
                            // Sign Up submission logic here // Placeholder comment.
                        }
                        setAction("Sign up"); // Function Call: Updates the component state to "Sign up".
                    }} // Closes onClick handler.
                >
                    sign up // Button text.
                </div>
                
                // JSX Element: The Login button.
                <div 
                    className={action === "Sign up" ? "submit gray": "submit"} // Prop: Dynamically sets class ('gray' if action is 'Sign up') for styling.
                    onClick={() => { // Prop: Event handler executed on click.
                        // Conditional Statement: If currently in 'login' mode, execute the login check function.
                        if (action === "login") { 
                            handleLogin(); // Function Call: Executes the credential checking and redirection logic.
                        }
                        setAction("login"); // Function Call: Updates the component state to "login".
                    }} // Closes onClick handler.
                >
                    login // Button text.
                </div>
            </div> // Closes the submit-container.
        </div> // Closes the main container.
    ); // Closes the return statement.
} // Closes the LoginSignup component.

export default LoginSignup; // Keyword: Exports the LoginSignup function/component as the default export.