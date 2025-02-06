import React, { useState } from 'react'
import '../../App.css'
import DashboardHeader from '../components/DashboardHeader';
import DashboardSidebar from '../components/DashboardSidebar';

function DashboardScreen() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // return isLoggedIn ? (

    return (

        <div className="app">
            <DashboardHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="main-container">
                <DashboardSidebar isOpen={isSidebarOpen} />
                {/* <Dashboard /> */}
            </div>
        </div>

    )

    // ) : (
    //     <LoginScreen onLogin={() => setIsLoggedIn(true)} />
    // );
}

export default DashboardScreen