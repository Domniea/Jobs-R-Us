import React, { useState, useContext } from 'react'
import { UserContext } from './context/userProvider'
import { Routes, Route } from 'react-router-dom'
import Auth from './components/Auth'
import Navbar from './components/Navbar'
import Profile from './components/profile/Profile'
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute'
import StaffRoute from './components/protectedRoutes/StaffRoute'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import NotFound from './components/NotFound'
import StaffSearch from './components/addStaff/StaffSearch'
import JobView from './components/allJobsView/JobView'
import CompletedView from './components/CompletedView'
import './App.css'

function App() {
  const {
    token,
    user: {
      isSuper,
      isManager,
      isStaff
    }
  } = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Auth/>}/>
        { !token && <Route path='/createuser' element={<CreateUser/>} />}
        <Route path='/profile' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <Profile/>
        </ProtectedRoute>}/>
        <Route path='/jobsmain' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <JobView />
        </ProtectedRoute>}/>
        <Route path='/completed' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
          <CompletedView />
        </ProtectedRoute>}/>
        <Route path='/addstaff' element={<StaffRoute token={token} isStaff={isStaff} redirectTo={<Profile/>}>
          <StaffSearch/>
        </StaffRoute>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
