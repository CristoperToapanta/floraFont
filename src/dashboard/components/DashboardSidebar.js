import React, { useState } from 'react'
import '../../App.css'

function DashboardSidebar({ isOpen }) {

    const [showAdmin, setShowAdmin] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
                <li>🏠 Home</li>
                <li onClick={() => setShowAdmin(!showAdmin)}>⚙ Admin ▼</li>
                {showAdmin && (
                    <ul className="submenu">
                        <li>👤 Users</li>
                        <li>🔧 Settings</li>
                        <li>📊 Reports</li>
                    </ul>
                )}
                <li>📦 Inventory</li>
            </ul>
        </div>
    );
}

export default DashboardSidebar