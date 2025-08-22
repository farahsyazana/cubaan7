import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ClubDiscovery from './pages/ClubDiscovery'
import EventCalendar from './pages/EventCalendar'
import Messages from './pages/Messages'
import AdminDashboard from './pages/AdminDashboard'
import CollabRequests from './pages/CollabRequests'
import Analytics from './pages/Analytics'
import ClubApplication from './pages/ClubApplication'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'
import Help from './pages/Help'
import OrganizationDetail from './pages/OrganizationDetail'
import { UserProvider } from './contexts/UserContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 font-inter transition-colors duration-300">
            <div className="fixed inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 pointer-events-none transition-colors duration-300" />
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/discover" element={<ClubDiscovery />} />
                <Route path="/calendar" element={<EventCalendar />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/collaborations" element={<CollabRequests />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/apply-club" element={<ClubApplication />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
                <Route path="/organization/:id" element={<OrganizationDetail />} />
              </Routes>
            </main>
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
