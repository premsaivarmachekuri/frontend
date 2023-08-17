import React from 'react';
import './App.css';
import Home from './components/Home/home';
import SignIn from './components/SignIn/sign'
import SignUp from './components/SignUp/signup'
import Dashboard from './components/MainContent/Dashboard/dashboard'
import ApiKeys from './components/MainContent/API Keys/apikeys'
import Sdk from './components/MainContent/SDKs/sdk'
import Deployments from './components/MainContent/Deployments/deployments';
import Wizard from './components/MainContent/Wizard/wizard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect root to /signup */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/home/apikeys" element={<ApiKeys />} />
            <Route path="/home/sdks" element={<Sdk />} />
            <Route path="/home/deployments" element={<Deployments />} />
            <Route path="/home/wizard" element={<Wizard />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
