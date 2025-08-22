import React, { useState } from 'react'
import { Users, Calendar, TrendingUp, CheckCircle, XCircle, Clock, Award, Crown, Building2 } from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending')

  const pendingApplications = [
    {
      id: 1,
      studentName: 'Sarah Chen',
      organizationName: 'Photography Guild',
      appliedDate: '2024-01-10',
      reason: 'Passionate about capturing moments and learning new techniques',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      applicationType: 'membership',
      bureauPosition: null
    },
    {
      id: 2,
      studentName: 'Marcus Johnson',
      organizationName: 'Robotics Society',
      appliedDate: '2024-01-12',
      reason: 'Engineering student with experience in Arduino and Python programming',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      applicationType: 'bureau',
      bureauPosition: 'Technical Lead'
    },
    {
      id: 3,
      studentName: 'Emma Rodriguez',
      organizationName: 'Environmental Society',
      appliedDate: '2024-01-13',
      reason: 'Want to make a positive impact on campus sustainability',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      applicationType: 'bureau',
      bureauPosition: 'Campaign Director'
    },
    {
      id: 4,
      studentName: 'Alex Kim',
      organizationName: 'Business Club',
      appliedDate: '2024-01-14',
      reason: 'Interested in entrepreneurship and business development',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      applicationType: 'membership',
      bureauPosition: null
    }
  ]

  const stats = [
    { label: 'Total Organizations', value: '24', icon: Building2, color: 'blue' },
    { label: 'Active Members', value: '1,247', icon: Users, color: 'green' },
    { label: 'Bureau Positions', value: '156', icon: Award, color: 'purple' },
    { label: 'Pending Applications', value: '12', icon: Clock, color: 'orange' }
  ]

  const bureauStats = [
    { position: 'Presidents', count: 24, organizations: 'All Organizations' },
    { position: 'Vice Presidents', count: 18, organizations: 'Major Organizations' },
    { position: 'Secretaries', count: 22, organizations: 'Most Organizations' },
    { position: 'Treasurers', count: 20, organizations: 'Financial Organizations' },
    { position: 'Event Coordinators', count: 35, organizations: 'Active Organizations' },
    { position: 'Creative Directors', count: 12, organizations: 'Arts Organizations' }
  ]

  const handleApplication = (id: number, action: 'approve' | 'reject') => {
    console.log(`${action} application ${id}`)
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage organization applications, bureau positions, and platform oversight</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className={`text-${stat.color}-600`} size={32} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-lg">
          <div className="p-6 border-b border-white/20">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab('pending')}
                className={`pb-2 font-medium transition-colors duration-200 ${
                  activeTab === 'pending'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pending Applications ({pendingApplications.length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`pb-2 font-medium transition-colors duration-200 ${
                  activeTab === 'approved'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Recent Approvals
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'pending' && (
              <div className="space-y-4">
                {pendingApplications.map((application) => (
                  <div key={application.id} className="bg-white/10 rounded-xl p-6 border border-white/20">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <img
                          src={application.avatar}
                          alt={application.studentName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{application.studentName}</h3>
                            {application.applicationType === 'bureau' && (
                              <Crown className="text-purple-600" size={16} />
                            )}
                          </div>
                          <p className="text-blue-600 font-medium">{application.organizationName}</p>
                          {application.bureauPosition && (
                            <p className="text-purple-600 text-sm font-medium">
                              Bureau Position: {application.bureauPosition}
                            </p>
                          )}
                          <p className="text-gray-600 text-sm mt-1">Applied on {application.appliedDate}</p>
                          <p className="text-gray-700 mt-2">{application.reason}</p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          application.applicationType === 'bureau' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {application.applicationType === 'bureau' ? 'Bureau Application' : 'Membership'}
                        </span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApplication(application.id, 'approve')}
                            className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-lg transition-colors duration-200"
                          >
                            <CheckCircle size={12} />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleApplication(application.id, 'reject')}
                            className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg transition-colors duration-200"
                          >
                            <XCircle size={12} />
                            <span>Reject</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'approved' && (
              <div className="text-center py-12">
                <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No recent approvals</h3>
                <p className="text-gray-500">Approved applications will appear here.</p>
              </div>
            )}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="text-purple-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Bureau Overview</h2>
          </div>
          <div className="space-y-4">
            {bureauStats.map((bureau) => (
              <div key={bureau.position} className="p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{bureau.position}</h3>
                  <span className="text-2xl font-bold text-purple-600">{bureau.count}</span>
                </div>
                <p className="text-gray-600 text-sm">{bureau.organizations}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
