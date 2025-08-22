import React, { useState } from 'react'
import { Bell, Check, X, Calendar, Users, Award, MessageSquare, Settings, Filter, MoreVertical, Trash2, Archive } from 'lucide-react'
import GlassCard from '../components/GlassCard'

interface Notification {
  id: string
  type: 'event' | 'collaboration' | 'achievement' | 'message' | 'system' | 'application'
  title: string
  message: string
  timestamp: string
  read: boolean
  urgent: boolean
  actionRequired?: boolean
  relatedOrg?: string
  avatar?: string
}

const Notifications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'unread' | 'urgent'>('all')
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'application',
      title: 'Club Application Update',
      message: 'Your application for "AI Research Club" has been approved! Welcome to the organization.',
      timestamp: '2 minutes ago',
      read: false,
      urgent: true,
      actionRequired: true,
      relatedOrg: 'AI Research Club',
      avatar: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '2',
      type: 'event',
      title: 'Upcoming Event Reminder',
      message: 'HackPPMK starts in 2 hours. Don\'t forget to bring your laptop and charger!',
      timestamp: '1 hour ago',
      read: false,
      urgent: true,
      relatedOrg: 'Tech Society',
      avatar: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '3',
      type: 'collaboration',
      title: 'New Collaboration Request',
      message: 'ASEAN-Korea Centre wants to collaborate with Persatuan Pelajar Malaysia Korea (PPMK) for an online symposium.',
      timestamp: '3 hours ago',
      read: false,
      urgent: false,
      actionRequired: true,
      relatedOrg: 'Art Guild',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/ASEAN_Flag.svg/1200px-ASEAN_Flag.svg.png'
    },
    {
      id: '4',
      type: 'achievement',
      title: 'New Achievement Unlocked!',
      message: 'Congratulations! You\'ve earned the "Event Organizer" badge for successfully organizing 5 events.',
      timestamp: '1 day ago',
      read: true,
      urgent: false,
      avatar: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: '5',
      type: 'message',
      title: 'New Message from Muhammad',
      message: 'Hey! Great job on the presentation yesterday. Would love to discuss the project further.',
      timestamp: '1 day ago',
      read: true,
      urgent: false,
      relatedOrg: 'Generasi Mahasiswa Islam Korea (GMIK)',
      avatar: 'https://media.craiyon.com/2025-04-02/27NAHGOUTS6E7KsuOplx0w.webp'
    },
    {
      id: '6',
      type: 'system',
      title: 'Profile Update Required',
      message: 'Please update your profile information to continue receiving personalized club recommendations.',
      timestamp: '2 days ago',
      read: true,
      urgent: false,
      actionRequired: true
    },
    {
      id: '7',
      type: 'event',
      title: 'Event Registration Confirmed',
      message: 'You\'re registered for "Environmental Sustainability Workshop" on March 15th.',
      timestamp: '3 days ago',
      read: true,
      urgent: false,
      relatedOrg: 'Environmental Society'
    }
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return Calendar
      case 'collaboration': return Users
      case 'achievement': return Award
      case 'message': return MessageSquare
      case 'application': return Check
      default: return Bell
    }
  }

  const getIconColor = (type: string) => {
    switch (type) {
      case 'event': return 'text-blue-600'
      case 'collaboration': return 'text-green-600'
      case 'achievement': return 'text-yellow-600'
      case 'message': return 'text-purple-600'
      case 'application': return 'text-emerald-600'
      default: return 'text-gray-600'
    }
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read
    if (filter === 'urgent') return notif.urgent
    return true
  })

  const unreadCount = notifications.filter(n => !n.read).length
  const urgentCount = notifications.filter(n => n.urgent).length

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
              <p className="text-gray-600">Stay updated with your organizations and activities</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={markAllAsRead}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Check size={16} />
                <span>Mark All Read</span>
              </button>
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200">
                <Settings size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Notifications</p>
                <p className="text-3xl font-bold text-gray-900">{notifications.length}</p>
              </div>
              <Bell className="text-blue-600" size={32} />
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Unread</p>
                <p className="text-3xl font-bold text-gray-900">{unreadCount}</p>
              </div>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Urgent</p>
                <p className="text-3xl font-bold text-gray-900">{urgentCount}</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Filters */}
        <GlassCard className="p-4 mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-500" size={20} />
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All', count: notifications.length },
                { key: 'unread', label: 'Unread', count: unreadCount },
                { key: 'urgent', label: 'Urgent', count: urgentCount }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    filter === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-700 hover:bg-white/20'
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <GlassCard className="p-12 text-center">
              <Bell className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
              <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
            </GlassCard>
          ) : (
            filteredNotifications.map((notification) => {
              const Icon = getIcon(notification.type)
              return (
                <GlassCard key={notification.id} className={`p-6 hover:bg-white/20 transition-all duration-200 ${
                  !notification.read ? 'border-l-4 border-blue-500' : ''
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-full ${
                      notification.urgent ? 'bg-red-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`${getIconColor(notification.type)} ${
                        notification.urgent ? 'text-red-600' : ''
                      }`} size={20} />
                    </div>
                    
                    {notification.avatar && (
                      <img
                        src={notification.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`text-sm font-semibold ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h3>
                            {notification.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                Urgent
                              </span>
                            )}
                            {notification.actionRequired && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                Action Required
                              </span>
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{notification.timestamp}</span>
                            {notification.relatedOrg && (
                              <span className="flex items-center space-x-1">
                                <Users size={12} />
                                <span>{notification.relatedOrg}</span>
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                              title="Mark as read"
                            >
                              <Check size={16} />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                            title="Delete notification"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      {notification.actionRequired && (
                        <div className="mt-3 flex space-x-2">
                          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Take Action
                          </button>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors duration-200">
                            Later
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Notifications
