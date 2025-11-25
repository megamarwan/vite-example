import React from 'react';
import './Dashboard.css'; // We will create this CSS file next

// A simple dashboard template component
const Dashboard = () => {
    // Placeholder function for handling logout
    const handleLogout = () => {
        // In a real app, this is where you would clear user session/token,
        // and then redirect to the login page.
        console.log("User logged out.");
        // Example: navigate('/') if you were using useNavigate here
    };

    return (
        <div className="dashboard-layout">
            {/* Header / Navbar */}
            <header className="dashboard-header">
                <h2>📊 User Dashboard</h2>
                <div className="user-info">
                    <p>Welcome, User!</p>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </header>

            {/* Sidebar for Navigation */}
            <aside className="dashboard-sidebar">
                <nav>
                    <ul>
                        <li><a href="/dashboard">🏠 Overview</a></li>
                        <li><a href="/dashboard/profile">👤 Profile Settings</a></li>
                        <li><a href="/dashboard/orders">📦 Orders/Activity</a></li>
                        <li><a href="/dashboard/support">❓ Support</a></li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-content">
                <h1>Overview</h1>
                <p>This is the main content area of your account dashboard.</p>
                
                {/* Dashboard Widgets/Cards */}
                <div className="widget-container">
                    <div className="widget">
                        <h3>Total Sales</h3>
                        <p className="widget-data">$1,500.00</p>
                    </div>
                    <div className="widget">
                        <h3>Pending Tasks</h3>
                        <p className="widget-data">5</p>
                    </div>
                    <div className="widget">
                        <h3>Last Login</h3>
                        <p className="widget-data">10 mins ago</p>
                    </div>
                </div>

                <h3>Recent Activity</h3>
                <ul>
                    <li>Activity 1: Updated profile picture.</li>
                    <li>Activity 2: Placed new order #879.</li>
                    <li>Activity 3: Changed subscription plan.</li>
                </ul>
            </main>
        </div>
    );
};

export default Dashboard;