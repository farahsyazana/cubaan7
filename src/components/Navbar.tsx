import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, Search, Calendar, Settings, Users, BarChart3, ChevronDown, User, LogOut, Bell, Shield, HelpCircle, Plus, Menu, X, MessageSquare } from 'lucide-react'
import { useUser } from '../contexts/UserContext'

const Navbar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, isAdmin } = useUser()
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const mainNavItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/discover', icon: Search, label: 'Discover' },
    { path: '/calendar', icon: Calendar, label: 'Calendar' },
    { path: '/messages', icon: MessageSquare, label: 'Messages' },
    { path: '/collaborations', icon: Users, label: 'Collaborations' },
    ...(isAdmin ? [
      { path: '/admin', icon: Settings, label: 'Admin' },
      { path: '/analytics', icon: BarChart3, label: 'Analytics' }
    ] : [])
  ]

  const userDropdownItems = [
    { icon: User, label: 'My Profile', action: () => navigate('/profile') },
    ...(!isAdmin ? [
      { icon: Plus, label: 'Apply to Create Club', action: () => navigate('/apply-club'), isHighlight: true }
    ] : []),
    { icon: Bell, label: 'Notifications', action: () => navigate('/notifications') },
    { icon: Settings, label: 'Settings', action: () => navigate('/settings') },
    ...(isAdmin ? [
      { icon: Shield, label: 'Admin Panel', action: () => navigate('/admin') }
    ] : []),
    { icon: HelpCircle, label: 'Help & Support', action: () => navigate('/help') },
    { icon: LogOut, label: 'Sign Out', action: () => console.log('Sign out user'), isDanger: true }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false)
  }, [location.pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                K-lique
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {mainNavItems.map(({ path, icon: Icon, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      location.pathname === path
                        ? 'bg-white/20 text-gray-900 shadow-lg'
                        : 'text-gray-700 hover:bg-white/10 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                {showMobileMenu ? (
                  <X size={20} className="text-gray-700" />
                ) : (
                  <Menu size={20} className="text-gray-700" />
                )}
              </button>

              {/* User Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-900 font-medium hidden sm:block">{user?.name}</span>
                  <ChevronDown size={16} className={`text-gray-600 transition-transform duration-200 ${
                    showUserDropdown ? 'rotate-180' : ''
                  }`} />
                </button>

                {showUserDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-64 backdrop-blur-xl bg-white/90 rounded-xl border border-white/20 shadow-xl py-2 z-50">
                    <div className="px-4 py-3 border-b border-white/20">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user?.avatar}
                          alt={user?.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-600">{user?.email}</p>
                          <span className={`inline-block mt-1 px-2 py-1 text-xs font-medium rounded-full ${
                            user?.role === 'admin' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {user?.role === 'admin' ? 'Administrator' : 'Student'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="py-2">
                      {userDropdownItems.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            item.action()
                            setShowUserDropdown(false)
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                            item.isDanger
                              ? 'text-red-700 hover:bg-red-50/50'
                              : item.isHighlight
                              ? 'text-blue-700 hover:bg-blue-50/50 font-medium'
                              : 'text-gray-700 hover:bg-white/50'
                          }`}
                        >
                          <item.icon size={16} />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)} />
          <div 
            ref={mobileMenuRef}
            className="fixed top-16 left-0 right-0 backdrop-blur-xl bg-white/95 border-b border-white/20 shadow-xl"
          >
            <div className="px-4 py-6 space-y-2">
              {mainNavItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
              
              {/* Mobile-only quick actions */}
              <div className="pt-4 mt-4 border-t border-white/20">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 px-4">Quick Actions</p>
                <Link
                  to="/notifications"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white/50 transition-all duration-200"
                >
                  <Bell size={20} />
                  <span className="font-medium">Notifications</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white/50 transition-all duration-200"
                >
                  <Settings size={20} />
                  <span className="font-medium">Settings</span>
                </Link>
                {!isAdmin && (
                  <Link
                    to="/apply-club"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-700 hover:bg-blue-50/50 transition-all duration-200 font-medium"
                  >
                    <Plus size={20} />
                    <span>Apply to Create Club</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
