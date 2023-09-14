import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from "./context/UserProvider.jsx";
import { JobProvider } from './context/JobProvider.jsx'
import { StaffProvider } from './context/StaffProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <JobProvider>
      <StaffProvider>
        <UserProvider>
            <App />
        </UserProvider>
      </StaffProvider>
    </JobProvider>
  </Router>
)
