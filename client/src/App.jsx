import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './context/userProvider'
import { JobContext } from './context/JobProvider'
import { StaffContext } from './context/StaffProvider'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Signup-Login.jsx/Auth'
import CreateUser from './components/Signup-Login.jsx/CreateUser'
import WelcomeHeader from './components/Signup-Login.jsx/WelcomeHeader'
import Navbar from './components/Navbar'
import Profile from './components/profile/Profile'
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute'
import StaffRoute from './components/protectedRoutes/StaffRoute'
import NotFound from './components/NotFound'
import StaffProfile from './components/staff/StaffProfile'
import StaffSearch from './components/addStaff/StaffSearch'
import JobView from './components/allJobsView/JobView'
import CompletedView from './components/profile/CompletedView'
import './App.css'

function App() {
  
  const {
    token,
    user: {
      isSuper,
      isManager,
      isStaff,
    }
  } = useContext(UserContext)



  
  return (
    <>
    {
      token ? 
        <Navbar />
      :
      <WelcomeHeader/>
    }
      <Routes>
        <Route path='/' element={<Auth/>} />
        { !token && <Route path='/createuser' element={<CreateUser/>} />}
        <Route path='/profile' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <Profile/>
        </ProtectedRoute>}/>
        <Route path='/staff/profile' element={<StaffRoute token={token} isStaff={isStaff} redirectTo={<JobView/>}>
          <StaffProfile/>
        </StaffRoute>}/>
        <Route path='/jobsmain' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <JobView />
        </ProtectedRoute>}/>
        <Route path='/completed' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <CompletedView />
        </ProtectedRoute>}/>
        <Route path='/management/addstaff' element={<StaffRoute token={token} isManager={isManager} isStaff={isStaff} redirectTo={<Profile/>}>
          <StaffSearch/>
        </StaffRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
