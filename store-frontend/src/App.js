import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Corrected import here
import Registration from './component/registration';
import Login from './component/login';
import Dashboard from './component/dashboard';

function App() {
    return (
        <Router>
            <div>
                <Routes> {/* Use 'Routes' to wrap 'Route' components */}
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
