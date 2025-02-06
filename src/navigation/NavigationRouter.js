import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginScreen from '../login/screens/LoginScreen';
import DashboardScreen from  '../dashboard/screens/DashboardScreen';

export default function NavigationRouter() {

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<LoginScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
    </Routes>
  );
}
