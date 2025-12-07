// hi.jsx
import React from 'react';
import ReactDOM from 'react-dom';


// 1. ACCESS GLOBALS: Access global variables exposed by the <script> tags in hi.html
const { useState } = React; // Accesses the global React object


export const LoginSignup =  () => {

    // --- State Variables ---
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState(''); // State for Name/Username
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Hardcoded valid credentials for demonstration
    const VALID_EMAIL = "test@example.com";
    const VALID_PASSWORD = "password123";

    // --- Handlers (Unchanged) ---
    const handleSubmit = () => {
        setErrorMessage('');
        isLogin ? handleLogin() : handleSignUp();
    };

    const handleLogin = () => {
        if (email.trim() === VALID_EMAIL && password.trim() === VALID_PASSWORD) {
            console.log("SUCCESS: Credentials match. Redirecting.");
            alert("Login Successful! Redirecting (Check console for message).");
        } else {
            setErrorMessage("Invalid Email or Password. Use 'test@example.com' and 'password123'.");
        }
    };

    const handleSignUp = () => {
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            setErrorMessage("Name, Email, and Password are required for Sign Up.");
            return;
        }
        setErrorMessage("Sign Up Attempted! (Logic placeholder: Use Login mode to test credentials.)");
        setEmail('');
        setPassword('');
        setName('');
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setErrorMessage('');
        setEmail('');
        setPassword('');
        setName('');
    };

    // --- Input Field Component (Unchanged) ---
    const InputField = ({ type, placeholder, value, onChange }) => (
        <div className="flex items-center bg-bg-light rounded-lg p-3 border border-gray-200 focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange/20 transition duration-300 shadow-inner">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="h-10 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base"
            />
        </div>
    );

    // --- Component Render ---
    return (
        <section className='w-full max-w-md bg-white rounded-xl p-8 md:p-10 shadow-2xl transition-all duration-500'>
            <h1 className='text-primary-orange text-4xl font-extrabold text-center mb-6 uppercase tracking-wider'>
                {isLogin ? 'Login' : 'Sign Up'}
            </h1>

            {/* Error Message Display (Simplified Icon Logic) */}
            {errorMessage && (
                <div className={`p-3 mb-4 rounded-lg text-sm font-medium ${
                    errorMessage.includes('Successful') ? 
                    'bg-green-100 text-green-700 border border-green-300' : 
                    'bg-red-100 text-red-700 border border-red-300'
                }`}>
                    {/* 🔑 FIX: Removed lucide-react component usage */}
                    <span className="inline font-bold mr-2">{errorMessage.includes('Successful') ? '✓' : '⚠️'}</span>
                    {errorMessage}
                </div>
            )}

            <div className='flex flex-col gap-5 mt-5'>
                {/* Name Input: Only shown during Sign Up mode */}
                {!isLogin && (
                    <InputField
                        type="text"
                        placeholder="Name or Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                )}
                
                {/* Email Input */}
                <InputField
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Input */}
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {/* Forgot Password Link (Login mode only) */}
            {isLogin && (
                <div className="text-gray-500 text-sm text-right mt-4 pr-1 cursor-pointer hover:text-primary-orange transition duration-200">
                    Lost password? <span className="text-primary-orange font-semibold">Click Here!</span>
                </div>
            )}
            
            {/* Submit Button */}
            <div className="flex justify-center mt-8">
                <button
                    className="w-full h-12 text-white bg-primary-orange rounded-lg text-lg font-semibold cursor-pointer shadow-lg shadow-primary-orange/40 transition duration-300 hover:bg-opacity-90 hover:scale-[1.01] active:scale-[0.99] uppercase tracking-wide"
                    onClick={handleSubmit} 
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </div>

            {/* Mode Toggle Link */}
            <div 
                className="text-gray-500 text-center text-sm mt-5 cursor-pointer hover:text-primary-orange transition duration-200" 
                onClick={toggleMode}
            >
                {isLogin ? 
                    'New user? Switch to Sign Up' : 
                    'Already have an account? Switch to Login'
                }
            </div>
        </section>
    );
};


// 3. MOUNTING LOGIC: Re-include the mounting logic to run the component.
const container = document.getElementById('root');
// 🔑 FIX: Access ReactDOM globally
const root = ReactDOM.createRoot(container); 
root.render(<LoginSignup />);