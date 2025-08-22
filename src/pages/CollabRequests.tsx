import React, { useState } from 'react'
import { Users, Calendar, MessageSquare, Building2, Award, Globe } from 'lucide-react'

const CollabRequests: React.FC = () => {
  const [activeTab, setActiveTab] = useState('received')

  const receivedRequests = [
    {
      id: 1,
      fromOrg: 'ASEAN Youth Network in Korea (AYNK)',
      toOrg: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      title: 'ASEAN SEAmposium 2025',
      description: 'First student-led initiative in South Korea designed to bring together ASEAN student associations for meaningful dialogue and engagement.',
      proposedDate: '2025-01-15',
      status: 'pending',
      type: 'inter-org',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/ASEAN_Flag.svg/250px-ASEAN_Flag.svg.png',
      bureauLevel: 'Executive Board'
    },
    {
      id: 2,
      fromOrg: 'Malaysian Students Recreational Club (MSRC)',
      toOrg: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      title: 'Hiking Achasan 2025',
      description: 'Short getaway after final exam.',
      proposedDate: '2025-06-20',
      status: 'pending',
      type: 'intra-org',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/ASEAN_Flag.svg/250px-ASEAN_Flag.svg.png',
      bureauLevel: 'Sports & Recreation'
    }
  ]

  const sentRequests = [
    {
      id: 3,
      fromOrg: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      toOrg: 'Malaysian Students Volleyball Club (MSVC)',
      title: 'Request: Assisting Volleyball Competition in KASUMA 2025',
      description: 'Requests for the experts to become one of referee',
      proposedDate: '2025-03-01',
      status: 'approved',
      type: 'intra-org',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bureauLevel: 'Sports & Recreation'
    },
    {
      id: 4,
      fromOrg: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      toOrg: 'Wellington Malaysian Students Organisation (WMSO)',
      title: 'PenPal: Kia Ora, Chingu! 2025',
      description: 'Pen Pal Program, a month-long initiative aimed at fostering friendships and connection while facilitating cultural exchanges between Malaysian students in New Zealand and Korea.',
      proposedDate: '2025-02-25',
      status: 'under_review',
      type: 'inter-org',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bureauLevel: 'Communication & Special Task'
    },
		{
      id: 5,
      fromOrg: 'Academic & Career',
      toOrg: 'Multimedia & Publication',
      title: 'Request: SIKMA 2025 Poster Design',
      description: 'Requests poster for SIKMA 2025.',
      proposedDate: '2025-02-25',
      status: 'under_review',
      type: 'bureau-partnership',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bureauLevel: 'Communication & Special Task'
    }
  ]


  const handleRequest = (id: number, action: 'approve' | 'reject') => {
    console.log(`${action} request ${id}`)
  }

  const getCollaborationTypeIcon = (type: string) => {
    switch (type) {
      case 'intra-org': return <Users className="text-blue-600" size={16} />
      case 'inter-org': return <Globe className="text-green-600" size={16} />
      case 'bureau-partnership': return <Award className="text-purple-600" size={16} />
      default: return <Users className="text-gray-600" size={16} />
    }
  }

  const getCollaborationTypeLabel = (type: string) => {
    switch (type) {
      case 'intra-org': return 'Intra-Organization'
      case 'inter-org': return 'Inter-Organization'
      case 'bureau-partnership': return 'Bureau Partnership'
      default: return 'Collaboration'
    }
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Collaboration Requests</h1>
        <p className="text-gray-700 dark:text-gray-300">Manage inter-organization and bureau-level partnerships</p>
      </div>

      <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl border border-white/30 dark:border-white/20 shadow-lg">
        <div className="p-6 border-b border-white/30 dark:border-white/20">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('received')}
              className={`pb-2 font-medium transition-colors duration-200 ${
                activeTab === 'received'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Received ({receivedRequests.length})
            </button>
            <button
              onClick={() => setActiveTab('sent')}
              className={`pb-2 font-medium transition-colors duration-200 ${
                activeTab === 'sent'
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Sent ({sentRequests.length})
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'received' && (
            <div className="space-y-6">
              {receivedRequests.map((request) => (
                <div key={request.id} className="bg-white/20 dark:bg-white/10 rounded-xl p-6 border border-white/30 dark:border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={request.avatar}
                        alt={request.fromOrg}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{request.title}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          {getCollaborationTypeIcon(request.type)}
                          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                            {getCollaborationTypeLabel(request.type)}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">From: {request.fromOrg}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">To: {request.toOrg}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">Bureau Level: {request.bureauLevel}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      request.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200' :
                      request.status === 'approved' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' :
                      'bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200'
                    }`}>
                      {request.status.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 mb-4">{request.description}</p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
                      <span className="text-sm">Proposed: {request.proposedDate}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleRequest(request.id, 'approve')}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <Users size={16} />
                      <span>Accept</span>
                    </button>
                    <button
                      onClick={() => handleRequest(request.id, 'reject')}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                    >
                      <span>Decline</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-white/30 dark:bg-white/20 hover:bg-white/40 dark:hover:bg-white/30 text-gray-900 dark:text-white rounded-lg transition-colors duration-200 border border-white/30 dark:border-white/20">
                      <MessageSquare size={16} />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'sent' && (
            <div className="space-y-6">
              {sentRequests.map((request) => (
                <div key={request.id} className="bg-white/20 dark:bg-white/10 rounded-xl p-6 border border-white/30 dark:border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={request.avatar}
                        alt={request.toOrg}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{request.title}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          {getCollaborationTypeIcon(request.type)}
                          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                            {getCollaborationTypeLabel(request.type)}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">To: {request.toOrg}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">From: {request.fromOrg}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">Bureau Level: {request.bureauLevel}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      request.status === 'approved' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' :
                      request.status === 'under_review' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                      'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200'
                    }`}>
                      {request.status.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 mb-4">{request.description}</p>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <Calendar size={16} className="text-gray-600 dark:text-gray-400" />
                      <span className="text-sm">Proposed: {request.proposedDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CollabRequests
