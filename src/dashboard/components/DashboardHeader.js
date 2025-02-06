import React, { useState } from 'react'
import '../../App.css'

function DashboardHeader({ toggleSidebar }) {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="header">
            <button className="menu-btn" onClick={toggleSidebar}>☰</button>
            <div className="user-menu">
                <span onClick={() => setShowDropdown(!showDropdown)}>Ale Flowers ⚫</span>
                {showDropdown && (
                    <div className="dropdown">
                        <p>Profile</p>
                        <p>Settings</p>
                        <p>Log Out</p>
                    </div>
                )}
            </div>
        </header>
    );
}

export default DashboardHeader