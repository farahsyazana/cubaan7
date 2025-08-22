import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { 
  MessageSquare, 
  Search, 
  Plus, 
  Send, 
  Users, 
  Crown, 
  Shield, 
  Clock, 
  Check, 
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  Building2,
  Star,
  Archive,
  Trash2,
  Pin,
  Paperclip,
  Smile,
  Image,
  File,
  UserPlus,
  Settings,
  Hash
} from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { useUser } from '../contexts/UserContext'

const Messages: React.FC = () => {
  const { user } = useUser()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('private')
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1)
  const [messageText, setMessageText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showNewMessage, setShowNewMessage] = useState(false)
  const [showNewGroup, setShowNewGroup] = useState(false)
  const [showCollabModal, setShowCollabModal] = useState(false)

  // Handle navigation from organization detail page
  useEffect(() => {
    if (location.state) {
      const { activeTab: navTab, selectedConversation: navConv, organizationName } = location.state
      if (navTab) setActiveTab(navTab)
      if (navConv) setSelectedConversation(navConv)
      
      // Clear the state to prevent issues on refresh
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  // Mock user membership data
  const userMembership = {
    isBureauMember: true,
    role: 'Secretary',
    level: 'Executive Board',
    organization: 'Persatuan Pelajar Malaysia Korea (PPMK)'
  }

  // Mock private conversations
  const privateConversations = [
    {
      id: 1,
      name: 'Laily',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLyePqlA0lwEif-5-EbsgAinWPy54FYb8sw&s',
      lastMessage: 'Hey! Are you coming to the workshop tomorrow?',
      timestamp: '2 min ago',
      unread: 2,
      online: true,
      role: 'Auditor',
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      type: 'private'
    },
    {
      id: 2,
      name: 'Khayra',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZcbTd9ebgzwo_EaCebiA_K0cJ6wV5gElqQ&s',
      lastMessage: 'The project documentation is ready for review',
      timestamp: '1 hour ago',
      unread: 0,
      online: false,
      role: 'Technical Lead',
      organization: 'Tech Society',
      type: 'private'
    },
    {
      id: 3,
      name: 'Amin',
      avatar: 'https://imgcdn.stablediffusionweb.com/2024/3/10/9410f3fc-e2a2-498d-a90d-277ab788ee73.jpg',
      lastMessage: 'Thanks for the meeting notes!',
      timestamp: '3 hours ago',
      unread: 0,
      online: true,
      role: 'Treasurer',
      organization: 'Malaysian Students Recreational Club (MSRC)',
      type: 'private'
    },
    {
      id: 4,
      name: 'Muhammad',
      avatar: 'https://media.craiyon.com/2025-04-02/QGQlQmPfTKe5YOePaz8B9g.webp',
      lastMessage: 'Can we schedule a call about the budget?',
      timestamp: '1 day ago',
      unread: 1,
      online: false,
      role: 'Member',
      organization: 'Generasi Mahasiswa Islam Korea (GMIK)',
      type: 'private'
    }
  ]

  // Mock group conversations
  const groupConversations = [
    {
      id: 5,
      name: 'PPMK - Executive Board',
      avatar: 'https://preview.redd.it/shrek-is-love-v0-f90omrgbzcub1.jpg?width=1024&format=pjpg&auto=webp&s=17ace5f35602172e98c0ab867ef78fbe81ad1068',
      lastMessage: 'Ummi: The budget proposal looks good to me',
      lastSender: 'Ummi',
      timestamp: '15 min ago',
      unread: 3,
      type: 'group',
      participants: [
        { id: 1, name: 'Ummi', role: 'Treasurer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
        { id: 2, name: 'Nami', role: 'Vice President', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
        { id: 3, name: 'Aisy', role: 'President', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        { id: 4, name: 'Manggis', role: 'Secretary', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
      ],
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      createdBy: 'Ummi'
    },
    {
      id: 6,
      name: 'Hackathon Planning Committee',
      avatar: 'https://i.redd.it/shrek-is-love-v0-yzk90okbzcub1.jpg?width=1024&format=pjpg&auto=webp&s=5aa732bfffe09008a48ceff66fd49c7b9cb02e04',
      lastMessage: 'Rai: I\'ll handle the paperwork',
      lastSender: 'Rai',
      timestamp: '1 hour ago',
      unread: 0,
      type: 'group',
      participants: [
        { id: 1, name: 'Faiz', role: 'President', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
        { id: 2, name: 'Rai', role: 'Vice President', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
        { id: 3, name: 'Yuki', role: 'Technical Lead', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        { id: 5, name: 'Lisa Park', role: 'Marketing Lead', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
        { id: 6, name: 'James Wilson', role: 'Logistics Coordinator', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' }
      ],
      organization: 'Tech Society',
      createdBy: 'Faiz'
    },
    {
      id: 7,
      name: 'MSRC - MEOW',
      avatar: 'https://i.redd.it/shrek-is-love-v0-gtfjsulbzcub1.jpg?width=1024&format=pjpg&auto=webp&s=69b41e55063a63b3705a21fc7bdea340d27d79c9',
      lastMessage: 'Hamsa: The foods are ready',
      lastSender: 'Hamsa',
      timestamp: '3 hours ago',
      unread: 1,
      type: 'group',
      participants: [
        { id: 3, name: 'Hamsa', role: 'Technical Lead', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
        { id: 7, name: 'Dr. Sofhi', role: 'Faculty Advisor', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face' },
        { id: 8, name: 'Rujhan', role: 'Senior Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }      ],
      organization: 'Malaysian Students Recreational Club (MSRC)',
      createdBy: 'Hamsa'
    }
  ]

  // Mock organization conversations (bureau only)
  const organizationConversations = [
    {
      id: 10,
      name: 'Representative: ASEAN-Korea Centre - ASEAN SEAmposium',
      avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/ASEAN_Flag.svg/1200px-ASEAN_Flag.svg.png',
      lastMessage: 'We\'d love to collaborate on the ASEAN SEAmposium project',
      timestamp: '30 min ago',
      unread: 3,
      type: 'collaboration',
      participants: ['Muhammad - President', 'Jackie - VP'],
      organization: 'ASEAN-Korea Centre (AKC)'
    },
    {
      id: 11,
      name: 'Representative: MSVC - KASUMA',
      avatar: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop&crop=center',
      lastMessage: 'The proposal looks great!',
      timestamp: '2 hours ago',
      unread: 0,
      type: 'collaboration',
      participants: ['Lisa Park - President', 'Tom Anderson - Secretary'],
      organization: 'Malaysian Students Volleyball Club (MSVC)'
    },
    {
      id: 12,
      name: 'Representative: WMSO - Penpal Proposal',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKKrIGw4NquGczTGNVW9H69W3U8y9as_e4A&s',
      lastMessage: 'Let\'s discuss the flow',
      timestamp: '1 day ago',
      unread: 1,
      type: 'collaboration',
      participants: ['Ali - President', 'Abu - VP'],
      organization: 'Wellington Malaysian Student Organisation (WMSO)'
    }
  ]

  // Mock messages for selected conversation
  const messages = [
    {
      id: 1,
      senderId: 2,
      senderName: 'Laily',
      senderAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLyePqlA0lwEif-5-EbsgAinWPy54FYb8sw&s',
      content: 'Hey everyone! How are the preparations for the hackathon going?',
      timestamp: '10:30 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 2,
      senderId: 1,
      senderName: 'Manggis',
      senderAvatar: user?.avatar,
      content: 'Going great! We have 150+ registrations already. The venue is confirmed too.',
      timestamp: '10:32 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 3,
      senderId: 3,
      senderName: 'Fatin',
      senderAvatar: 'https://media.craiyon.com/2025-04-02/27NAHGOUTS6E7KsuOplx0w.webp',
      content: 'The technical setup is almost complete. Just need to test the judging platform.',
      timestamp: '10:33 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 4,
      senderId: 2,
      senderName: 'Laily',
      senderAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLyePqlA0lwEif-5-EbsgAinWPy54FYb8sw&s',
      content: 'That\'s amazing! Should we start working on the welcome presentation?',
      timestamp: '10:35 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 5,
      senderId: 4,
      senderName: 'Emily',
      senderAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'I can help with the presentation design. I have some great templates ready.',
      timestamp: '10:36 AM',
      type: 'text',
      status: 'read'
    },
    {
      id: 6,
      senderId: 1,
      senderName: 'Manggis',
      senderAvatar: user?.avatar,
      content: 'Perfect! Let\'s schedule a quick meeting tomorrow to finalize everything.',
      timestamp: '10:37 AM',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 7,
      senderId: 2,
      senderName: 'Laily',
      senderAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLyePqlA0lwEif-5-EbsgAinWPy54FYb8sw&s',
      content: 'Sounds good! I\'ll send out the calendar invite.',
      timestamp: '2 min ago',
      type: 'text',
      status: 'sent'
    }
  ]

  const tabs = [
    { id: 'private', label: 'Private Messages', icon: MessageSquare },
    { id: 'groups', label: 'Group Chats', icon: Users },
    ...(userMembership.isBureauMember ? [
      { id: 'organizations', label: 'Organization Collaborations', icon: Building2 }
    ] : [])
  ]

  const getCurrentConversations = () => {
    switch (activeTab) {
      case 'private':
        return privateConversations
      case 'groups':
        return groupConversations
      case 'organizations':
        return organizationConversations
      default:
        return []
    }
  }

  const currentConversations = getCurrentConversations()
  const filteredConversations = currentConversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const selectedConv = currentConversations.find(conv => conv.id === selectedConversation)
  const isGroupChat = selectedConv?.type === 'group'

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In real app, send message to backend
      console.log('Sending message:', messageText)
      setMessageText('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const startCollaboration = () => {
    setShowCollabModal(true)
  }

  const createNewGroup = () => {
    setShowNewGroup(true)
  }

  const getConversationIcon = (conversation: any) => {
    if (conversation.type === 'group') {
      return <Users size={12} className="text-white" />
    }
    if (conversation.type === 'collaboration') {
      return <Building2 size={10} className="text-white" />
    }
    return null
  }

  const getConversationBadgeColor = (conversation: any) => {
    if (conversation.type === 'group') {
      return 'bg-green-600'
    }
    if (conversation.type === 'collaboration') {
      return 'bg-purple-600'
    }
    return ''
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Connect with members, create group chats, and collaborate with other organizations</p>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-white/10 backdrop-blur-xl rounded-2xl p-1 border border-white/20 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-280px)]">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <GlassCard className="h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {activeTab === 'private' ? 'Conversations' : 
                   activeTab === 'groups' ? 'Group Chats' : 'Collaborations'}
                </h2>
                <div className="flex space-x-2">
                  {activeTab === 'groups' && (
                    <button
                      onClick={createNewGroup}
                      className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                      title="Create Group Chat"
                    >
                      <Users size={16} />
                    </button>
                  )}
                  {activeTab === 'organizations' && userMembership.isBureauMember && (
                    <button
                      onClick={startCollaboration}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                      title="Start New Collaboration"
                    >
                      <Building2 size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setShowNewMessage(true)}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                    title="New Message"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-white/10 cursor-pointer transition-all hover:bg-white/20 ${
                    selectedConversation === conversation.id ? 'bg-white/30' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {activeTab === 'private' && 'online' in conversation && conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                      {(conversation.type === 'group' || conversation.type === 'collaboration') && (
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getConversationBadgeColor(conversation)} rounded-full flex items-center justify-center`}>
                          {getConversationIcon(conversation)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                          {activeTab === 'private' && 'role' in conversation && conversation.role === 'President' && (
                            <Crown className="text-yellow-500" size={12} />
                          )}
                          {conversation.type === 'group' && (
                            <span className="text-xs text-gray-500">
                              ({conversation.participants?.length} members)
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">{conversation.lastMessage}</p>
                      {activeTab === 'organizations' && 'participants' in conversation && (
                        <p className="text-xs text-gray-500 truncate">
                          {conversation.participants.join(', ')}
                        </p>
                      )}
                      {conversation.type === 'group' && 'lastSender' in conversation && (
                        <p className="text-xs text-blue-600">Last: {conversation.lastSender}</p>
                      )}
                      {(activeTab === 'private' || activeTab === 'groups') && 'organization' in conversation && (
                        <p className="text-xs text-blue-600">{conversation.organization}</p>
                      )}
                    </div>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                        {conversation.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2">
          {selectedConv ? (
            <GlassCard className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={selectedConv.avatar}
                        alt={selectedConv.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {activeTab === 'private' && 'online' in selectedConv && selectedConv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                      {(selectedConv.type === 'group' || selectedConv.type === 'collaboration') && (
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getConversationBadgeColor(selectedConv)} rounded-full flex items-center justify-center`}>
                          {getConversationIcon(selectedConv)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{selectedConv.name}</h3>
                      {activeTab === 'private' && 'online' in selectedConv && (
                        <p className="text-sm text-gray-600">
                          {selectedConv.online ? 'Online' : 'Last seen 2 hours ago'}
                        </p>
                      )}
                      {selectedConv.type === 'group' && 'participants' in selectedConv && (
                        <p className="text-sm text-gray-600">
                          {selectedConv.participants.length} members
                        </p>
                      )}
                      {activeTab === 'organizations' && 'organization' in selectedConv && (
                        <p className="text-sm text-blue-600">{selectedConv.organization}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {selectedConv.type === 'group' && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Group Chat
                      </span>
                    )}
                    {activeTab === 'organizations' && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Bureau Only
                      </span>
                    )}
                    <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                      <Phone size={16} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                      <Video size={16} />
                    </button>
                    {selectedConv.type === 'group' && (
                      <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                        <UserPlus size={16} />
                      </button>
                    )}
                    <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Group Participants Preview */}
                {selectedConv.type === 'group' && 'participants' in selectedConv && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Participants:</span>
                      <div className="flex -space-x-2 overflow-hidden">
                        {selectedConv.participants.slice(0, 5).map((participant: any) => (
                          <img
                            key={participant.id}
                            src={participant.avatar}
                            alt={participant.name}
                            className="w-6 h-6 rounded-full border-2 border-white"
                            title={`${participant.name} - ${participant.role}`}
                          />
                        ))}
                        {selectedConv.participants.length > 5 && (
                          <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-gray-600">+{selectedConv.participants.length - 5}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => {
                  const isOwn = message.senderId === 1 // Current user ID
                  return (
                    <div key={message.id} className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {!isOwn && (
                          <img
                            src={message.senderAvatar}
                            alt={message.senderName}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        )}
                        <div className={`px-4 py-2 rounded-2xl ${
                          isOwn 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/50 text-gray-900'
                        }`}>
                          {/* Show sender name in group chats for non-own messages */}
                          {!isOwn && isGroupChat && (
                            <p className="text-xs font-medium text-blue-600 mb-1">{message.senderName}</p>
                          )}
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center justify-end mt-1 space-x-1 ${
                            isOwn ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            <span className="text-xs">{message.timestamp}</span>
                            {isOwn && (
                              <div className="flex">
                                {message.status === 'sent' && <Check size={12} />}
                                {message.status === 'delivered' && <CheckCheck size={12} />}
                                {message.status === 'read' && <CheckCheck size={12} className="text-blue-300" />}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex items-end space-x-2">
                  <div className="flex space-x-1">
                    <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                      <Paperclip size={16} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                      <Image size={16} />
                    </button>
                  </div>
                  <div className="flex-1 relative">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={isGroupChat ? `Message ${selectedConv.name}...` : "Type a message..."}
                      className="w-full px-4 py-2 bg-white/50 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows={1}
                    />
                  </div>
                  <button className="p-2 text-gray-600 hover:bg-white/20 rounded-lg transition-all">
                    <Smile size={16} />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="h-full flex items-center justify-center">
              <div className="text-center">
                <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
              </div>
            </GlassCard>
          )}
        </div>
      </div>

      {/* Create New Group Modal */}
      {showNewGroup && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <GlassCard className="w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Create Group Chat</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Group Name</label>
                <input
                  type="text"
                  placeholder="Enter group name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Members</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {privateConversations.map((contact) => (
                    <label key={contact.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <img src={contact.avatar} alt={contact.name} className="w-8 h-8 rounded-full" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowNewGroup(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowNewGroup(false)
                    // In real app, create group chat
                  }}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all"
                >
                  Create Group
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* New Collaboration Modal */}
      {showCollabModal && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <GlassCard className="w-full max-w-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Start New Collaboration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Organization</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Choose an organization...</option>
                  <option value="art-guild">Malaysian Student Volleyball Club (MSVC)</option>
                  <option value="env-society">Rakan Siswa Yadim (RSY)</option>
                  <option value="business-club">Malaysian Korea Badminton Association (MKBA)</option>
                  <option value="music-society">Malaysian Students Football Club (MSFC)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Collaboration Topic</label>
                <input
                  type="text"
                  placeholder="e.g., Joint Workshop Series"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Initial Message</label>
                <textarea
                  placeholder="Introduce your collaboration idea..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCollabModal(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowCollabModal(false)
                    // In real app, create collaboration request
                  }}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Start Collaboration
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  )
}

export default Messages
