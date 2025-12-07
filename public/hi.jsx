import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { LogOut, Home, User, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

// NOTE: This code assumes a Tailwind CSS setup where the following custom colors/classes are defined.
/* Custom Tailwind Classes (Assumed Definitions):
- primary-orange: A distinct orange color (e.g., #f97316)
- bg-dark: A dark background color (e.g., #1f2937 or gray-800)
- bg-light: A light background color (e.g., #f9fafb or gray-50)
*/

// --- Authentication & Login/Signup Component ---
const LoginSignupForm = ({ onLoginSuccess }) => {
    const [action, setAction] = useState("login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const VALID_EMAIL = "test@example.com";
    const VALID_PASSWORD = "password123";

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (email.trim() === VALID_EMAIL && password.trim() === VALID_PASSWORD) {
            onLoginSuccess();
        } else {
            setErrorMessage("Invalid Email or Password. Please use 'test@example.com' and 'password123'.");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email.trim() || !password.trim()) {
            setErrorMessage("Email and Password are required for Sign Up.");
            return;
        }

        // Placeholder for Sign Up logic
        setErrorMessage("Sign Up functionality is a placeholder. Please use the Login tab with 'test@example.com' and 'password123'.");
    };

    const handleSubmit = (e) => {
        if (action === 'login') {
            handleLogin(e);
        } else {
            handleSignUp(e);
        }
    };

    return (
        <div className='w-full max-w-md bg-white rounded-xl p-8 md:p-10 shadow-2xl transition-all duration-500'>
            <h1 className='text-primary-orange text-4xl font-extrabold text-center mb-6 uppercase tracking-wider'>{action}</h1>

            {errorMessage && (
                <div className={`flex items-center p-3 mb-4 rounded-lg text-sm font-medium border ${errorMessage.includes('Invalid') ? 'bg-red-100 text-red-700 border-red-300' : 'bg-blue-100 text-blue-700 border-blue-300'}`}>
                    <AlertTriangle className='w-5 h-5 mr-2 flex-shrink-0' />
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5'>
                {action === "signup" && (
                    <div className="flex items-center bg-bg-light rounded-lg p-3 border border-gray-200 focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange/20 transition duration-300 shadow-inner">
                        {/* Name input - Not controlled for simplicity */}
                        <input type="text" placeholder="Name or Username" className="h-10 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base" />
                    </div>
                )}

                <div className="flex items-center bg-bg-light rounded-lg p-3 border border-gray-200 focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange/20 transition duration-300 shadow-inner">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base" required />
                </div>

                <div className="flex items-center bg-bg-light rounded-lg p-3 border border-gray-200 focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange/20 transition duration-300 shadow-inner">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="h-10 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base" required />
                </div>

                {action === "login" && (
                    <div className="text-gray-500 text-sm text-right pr-1 cursor-pointer hover:text-primary-orange transition duration-200">
                        Lost password? <span className="text-primary-orange font-semibold">CLICK HERE!</span>
                    </div>
                )}

                <div className="flex justify-between gap-4 mt-4">
                    {/* Sign Up Button (always visible, changes style based on action) */}
                    <button 
                        type="button" 
                        className={`flex-1 h-12 rounded-lg text-lg font-semibold cursor-pointer transition duration-300 uppercase tracking-wide ${action === 'login' ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/40 hover:bg-opacity-90' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`} 
                        onClick={() => setAction("signup")}
                    >
                        Sign Up
                    </button>

                    {/* Submit Button (always visible, changes text/style based on action) */}
                    <button 
                        type="submit" 
                        className={`flex-1 h-12 rounded-lg text-lg font-semibold cursor-pointer transition duration-300 uppercase tracking-wide ${action === 'signup' ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/40 hover:bg-opacity-90' : 'bg-primary-orange text-white shadow-lg shadow-primary-orange/40 hover:bg-opacity-90'}`}
                    >
                        {action}
                    </button>
                </div>
                {/* Note: The button styles for login/signup in the form buttons need adjustment based on desired UX.
                   Currently, the submit button is styled the same in both modes, which is likely intentional.
                   The 'Sign Up' button on the left serves to switch the form action. 
                */}
            </form>
        </div>
    );
};

// --- Dashboard Content Component ---
const DashboardContent = ({ onLogout }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-bg-light">
            <nav className="w-full md:w-56 bg-bg-dark text-white p-4 md:p-6 shadow-xl flex flex-col justify-between flex-shrink-0">
                <div>
                    <h2 className="text-3xl font-extrabold text-primary-orange mb-6 border-b border-gray-700 pb-3">Dash</h2>
                    <div className="space-y-2">
                        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium flex items-center">
                            <Home className="w-5 h-5 mr-3" /> Home
                        </a>
                        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium flex items-center">
                            <User className="w-5 h-5 mr-3" /> Profile
                        </a>
                        <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition duration-200 font-medium flex items-center">
                            <Settings className="w-5 h-5 mr-3" /> Settings
                        </a>
                    </div>
                </div>

                <button onClick={onLogout} className="mt-8 p-3 rounded-lg bg-red-600 hover:bg-red-700 transition duration-200 font-bold flex items-center justify-center shadow-lg">
                    <LogOut className="w-5 h-5 mr-2" /> Logout
                </button>
            </nav>

            <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                <header className="bg-primary-orange text-white p-6 rounded-xl text-center mb-8 shadow-xl">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome to Your Dashboard</h1>
                </header>
                
                <div className="bg-white p-6 rounded-lg border-l-4 border-primary-orange shadow-md mb-8">
                    <p className="text-xl font-semibold text-gray-800 flex items-center">
                        <CheckCircle className='w-6 h-6 mr-2 text-green-500 flex-shrink-0' /> You are logged in!
                    </p>
                    <p className="text-gray-600 mt-2">This is your secure, single-page application dashboard where you can manage your account and settings.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-primary-orange mb-2">Total Metrics</h3>
                        <p className="text-4xl font-light text-gray-900">1,200</p>
                        <p className="text-sm text-gray-500 mt-2">Data points collected this week.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-primary-orange mb-2">Pending Tasks</h3>
                        <p className="text-4xl font-light text-gray-900">5</p>
                        <p className="text-sm text-gray-500 mt-2">Don't forget to review the quarterly report.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-primary-orange mb-2">New Alerts</h3>
                        <p className="text-4xl font-light text-gray-900">2</p>
                        <p className="text-sm text-gray-500 mt-2">Check security logs immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Application Component ---
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="min-h-screen w-full font-sans">
            {isLoggedIn ? ( 
                <DashboardContent onLogout={handleLogout} />
            ) : (
                <div className="bg-primary-orange min-h-screen flex items-center justify-center p-4">
                    <LoginSignupForm onLoginSuccess={handleLoginSuccess} />
                </div>
            )}
        </div>
    );
};

// **FIX/IMPROVEMENT:** Export the main App component for potential use in a larger module system.
export default App;

// Bootstrap React Application
const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
} else {
    console.error("The root element with id 'root' was not found in the document.");
}