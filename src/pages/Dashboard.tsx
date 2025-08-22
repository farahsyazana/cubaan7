import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, TrendingUp, Bell, Award, Crown, UserCheck, MessageSquare } from 'lucide-react'

const Dashboard: React.FC = () => {
  const upcomingEvents = [
    { id: 1, title: 'HackPPMK 2025', date: '2025-10-25', org: 'Tech Society' },
    { id: 2, title: 'Malam Anugerah Dirgahayu (MAD)', date: '2025-11-18', org: 'Persatuan Pelajar Malaysia Korea (PPMK)' },
    { id: 3, title: 'Night Run', date: '2025-11-20', org: 'Malaysian Students Recreational Club (MSRC)' }
  ]

  const myOrganizations = [
    { 
      id: 1, 
      name: 'Persatuan Pelajar Malaysia Korea (PPMK)', 
      members: 629, 
      role: 'Secretary',
      bureauPosition: 'Executive Board',
      isLeadership: true
    },
    { 
      id: 2, 
      name: 'Malaysian Students Recreational Club (MSRC)', 
      members: 39, 
      role: 'Social Media Manager',
      bureauPosition: 'Media & Publication',
      isLeadership: true
    },
    { 
      id: 3, 
      name: 'Tech Society', 
      members: 89, 
      role: 'Member',
      bureauPosition: 'Volunteer',
      isLeadership: false
    }
  ]

  const ppmkNotifications = [
    { id: 1, type: 'position', message: 'Team MAD recruitment is now open', urgent: true },
    { id: 2, type: 'meeting', message: 'ChatAndBuild workshop tomorrow at 3 PM', urgent: false },
    { id: 3, type: 'collaboration', message: 'Collaboration request from Tech Society', urgent: false }
  ]

  const interOrgCollaborations = [
    {
      id: 1,
      title: 'Hari Raya Celebration',
      organizations: ['Persatuan Pelajar Malaysia Korea (PPMK)', 'Malaysian Embassy in Seoul', 'Generasi Mahasiswa Islam Korea (GMIK)'],
      status: 'active',
      nextMeeting: '2025-01-16'
    },
    {
      id: 2,
      title: 'ASEAN SEAmposium 2025',
      organizations: ['Persatuan Pelajar Malaysia Korea (PPMK)', 'ASEAN-Korea Centre (AKC)'],
      status: 'planning',
      nextMeeting: '2025-01-19'
    }
  ]

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back to K-lique!</h1>
        <p className="text-gray-700 dark:text-gray-300">Here's what's happening with your organizations today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">My Organizations</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <Users className="text-blue-600 dark:text-blue-400" size={32} />
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Bureau Positions</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">2</p>
            </div>
            <Award className="text-purple-600 dark:text-purple-400" size={32} />
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Upcoming Events</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">5</p>
            </div>
            <Calendar className="text-green-600 dark:text-green-400" size={32} />
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">Active Collaborations</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
            </div>
            <MessageSquare className="text-orange-600 dark:text-orange-400" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Organizations</h2>
          <div className="space-y-4">
            {myOrganizations.map((org) => (
              <Link
                key={org.id}
                to={`/organization/${org.id}`}
                className="flex items-center justify-between p-4 bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  {org.isLeadership && <Crown className="text-yellow-500 dark:text-yellow-400" size={20} />}
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{org.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{org.members} members</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    org.isLeadership 
                      ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' 
                      : 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
                  }`}>
                    {org.role}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{org.bureauPosition}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">PPMK Notifications</h2>
          <div className="space-y-4">
            {ppmkNotifications.map((notification) => (
              <div key={notification.id} className={`p-4 rounded-xl border ${
                notification.urgent 
                  ? 'bg-red-50/70 dark:bg-red-900/30 border-red-200/70 dark:border-red-800/50' 
                  : 'bg-white/20 dark:bg-white/10 border-white/30 dark:border-white/20'
              }`}>
                <div className="flex items-start space-x-3">
                  {notification.type === 'position' && <UserCheck className="text-blue-600 dark:text-blue-400 mt-1" size={16} />}
                  {notification.type === 'meeting' && <Calendar className="text-green-600 dark:text-green-400 mt-1" size={16} />}
                  {notification.type === 'collaboration' && <MessageSquare className="text-purple-600 dark:text-purple-400 mt-1" size={16} />}
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white text-sm">{notification.message}</p>
                    {notification.urgent && (
                      <span className="inline-block mt-1 px-2 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-xs font-medium rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{event.org}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Inter-Org Collaborations</h2>
          <div className="space-y-4">
            {interOrgCollaborations.map((collab) => (
              <div key={collab.id} className="p-4 bg-white/20 dark:bg-white/10 rounded-xl border border-white/30 dark:border-white/20">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{collab.title}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    collab.status === 'active' 
                      ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' 
                      : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200'
                  }`}>
                    {collab.status}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  {collab.organizations.join(' • ')}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">Next meeting: {collab.nextMeeting}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
