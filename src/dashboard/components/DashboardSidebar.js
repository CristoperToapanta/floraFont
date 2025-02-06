import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import HistoryIcon from '@mui/icons-material/History';
import PaymentIcon from '@mui/icons-material/Payment';
import "../../App.css";

function DashboardSidebar({ isOpen }) {
    const [showAdmin, setShowAdmin] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul className={"sidebar-container"}>
                <li className="sidebar-btn">
                    <HomeIcon style={{ marginLeft: 10 }} />
                    <p className="sidebar-title">Home</p>
                </li>
                <li className="sidebar-btn">
                    <AccountBoxIcon style={{ marginLeft: 10 }} />
                    <p className="sidebar-title">Perfil</p>
                </li>
                <li className="sidebar-btn" onClick={() => setShowAdmin(!showAdmin)}>
                    <LocalShippingIcon style={{ marginLeft: 10 }}/>
                    <p className="sidebar-title">Entregas</p>
                </li>
                <ul className={`submenu ${showAdmin ? "submenu-open" : "submenu-closed"}`}>
                    <li className="sidebar-subtn">
                        <DisplaySettingsIcon style={{ marginLeft: 50 }}/>
                        <p className="sidebar-subtitle"> Gestión </p>
                    </li>
                    <li className="sidebar-subtn">
                        <HistoryIcon style={{ marginLeft: 50 }}/>
                        <p className="sidebar-subtitle"> Historial </p>
                    </li>
                    <li className="sidebar-subtn">
                        <PaymentIcon style={{ marginLeft: 50 }}/>
                        <p className="sidebar-subtitle"> Formas de Pago </p>
                    </li>
                </ul>
            </ul>
        </div>
    );
}

export default DashboardSidebar;
