import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginScreen from '../login/screens/LoginScreen';

export default function NavigationRouter() {

  return (
    <Routes>
      <Route path="/" element={<LoginScreen />}>
        {/* <Route path="/embarque" element={<EmbarqueScreen />} /> */}
      </Route>
    </Routes>
  );
}
