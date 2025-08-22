import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Users, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  Award, 
  Crown, 
  MessageSquare, 
  Clock,
  Target,
  Briefcase,
  Plus,
  Vote,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { useUser } from '../contexts/UserContext'

const OrganizationDetail: React.FC = () => {
  const { id } = useParams()
  const { user } = useUser()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [showCreatePoll, setShowCreatePoll] = useState(false)
  const [newPoll, setNewPoll] = useState({
    title: '',
    description: '',
    options: ['', ''],
    endDate: '',
    allowMultiple: false
  })

  // Mock data - in real app, fetch based on ID and user role
  const organization = {
    id: 1,
    name: 'Persatuan Pelajar Malaysia Korea (PPMK)',
    description: 'Official Malaysian student association in South Korea, dedicated to student welfare, support, and community building.',
    logo: 'https://i.imgur.com/0zbuE2n.png',
    coverImage: 'https://i.imgur.com/EqdT81U.jpeg',
    members: 629,
    founded: '1984',
    category: 'Student Community',
    location: 'Malaysian Embassy',
    email: 'myppmk@gmail.com',
    phone: '+82-2-2077 8600',
    website: 'https://ppmkonline.com',
    socialMedia: {
      instagram: '@ppmkofficial',
      twitter: '@twt_ppmk',
      linkedin: 'Persatuan Pelajar Malaysia Korea (PPMK)'
    },
    tags: ['Malaysian', 'Student', 'Republic of Korea', 'Welfare'],
    achievements: [
      'Most Active International Student Association in Korea - National Institute of International Education (NIIED) 2024'
    ],
    stats: {
      eventsHosted: 21,
      projectsCompleted: 0,
      collaborations: 2,
      memberRetention: 89
    },
    // Organization's main group chat ID
    groupChatId: 5 // This would be the "Tech Society Executive Board" group from Messages
  }

  // Check if current user is a bureau member (mock logic)
  const userMembership = {
    isMember: true,
    role: 'President', // President, Vice President, Secretary, etc.
    level: 'Executive Board', // Executive Board, Department Head, Core Team, Member
    isBureauMember: ['Executive Board', 'Department Head', 'Core Team'].includes('Executive Board'),
    canManagePolls: ['President', 'Vice President', 'Secretary'].includes('President')
  }

  const bureauMembers = [
    { 
      id: 1, 
      name: 'Aisy', 
      position: 'President', 
      level: 'Executive Board',
      avatar: 'https://i.pinimg.com/736x/4f/f0/b9/4ff0b92232aec3a9d02a82e7784427e1.jpg',
      joinedDate: '2022-09-01',
      achievements: ['Leadership Excellence Award', 'Innovation Champion']
    },
    { 
      id: 2, 
      name: 'Nami', 
      position: 'Vice President', 
      level: 'Executive Board',
      avatar: 'https://media.craiyon.com/2025-04-02/27NAHGOUTS6E7KsuOplx0w.webp',
      joinedDate: '2022-09-01',
      achievements: ['Event Management Pro', 'Community Builder']
    },
    { 
      id: 3, 
      name: 'Ummi', 
      position: 'Treasurer', 
      level: 'Executive Board',
      avatar: 'https://masterpiecer-images.s3.yandex.net/61cec708a56111ee9b6bbe62f04505c7:upscaled',
      joinedDate: '2023-01-15',
      achievements: ['Financial Excellence', 'Mentor of the Year']
    },
    { 
      id: 4, 
      name: 'Faiz', 
      position: 'Technical Lead', 
      level: 'Department Team',
      avatar: 'https://masterpiecer-images.s3.yandex.net/f3831a5a838711eea70fbadf81d486ab:upscaled',
      joinedDate: '2023-02-01',
      achievements: ['Technical Excellence', 'Pakar IT']
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Grand Meeting 2025',
      date: '2025-02-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Auditorium, DMU',
      attendees: 300,
      type: 'Election'
    },
    {
      id: 2,
      title: 'Malam Anugerah Dirgahayu (MAD)',
      date: '2025-01-25',
      time: '2:00 PM - 4:00 PM',
      location: 'Four Season',
      attendees: 150,
      type: 'Dinner'
    },
    {
      id: 3,
      title: 'Simposium Kerjaya Mahasiswa (SIKMA)',
      date: '2025-02-08',
      time: '6:00 PM - 9:00 PM',
      location: 'Gathertown (ONLINE)',
      attendees: 80,
      type: 'Networking'
    }
  ]

  const recentProjects = [
  
  ]

  const [polls, setPolls] = useState([
    {
      id: 1,
      title: 'MAD Theme',
      description: 'Help us decide what theme for our year-end grand dinner!',
      options: [
        { id: 1, text: 'Back to School!', votes: 45 },
        { id: 2, text: 'BRAT - CharliXCX', votes: 32 },
        { id: 3, text: 'Twilight', votes: 28 },
        { id: 4, text: '1990s', votes: 38 }
      ],
      totalVotes: 143,
      endDate: '2025-01-30',
      status: 'active',
      allowMultiple: false,
      createdBy: 'Farah',
      userVoted: [2], // IDs of options user voted for
      createdAt: '2025-01-10'
    },
    {
      id: 2,
      title: 'Hackathon Theme Selection',
      description: 'Vote for the theme of HackPPMK. Multiple selections allowed!',
      options: [
        { id: 1, text: 'Sustainability & Environment', votes: 67 },
        { id: 2, text: 'Healthcare Innovation', votes: 54 },
        { id: 3, text: 'Education Technology', votes: 41 },
        { id: 4, text: 'Social Impact', votes: 59 }
      ],
      totalVotes: 221,
      endDate: '2025-01-25',
      status: 'active',
      allowMultiple: true,
      createdBy: 'Sarah',
      userVoted: [1, 4],
      createdAt: '2025-01-08'
    },
    {
      id: 3,
      title: 'Chillin?',
      description: 'Badminton sesh, anyone?',
      options: [
        { id: 1, text: 'Monday 6:00 PM', votes: 23 },
        { id: 2, text: 'Wednesday 7:00 PM', votes: 45 },
        { id: 3, text: 'Friday 5:00 PM', votes: 12 },
        { id: 4, text: 'Saturday 2:00 PM', votes: 8 }
      ],
      totalVotes: 88,
      endDate: '2025-01-20',
      status: 'ended',
      allowMultiple: false,
      createdBy: 'Emily in Paris',
      userVoted: [2],
      createdAt: '2025-01-05'
    }
  ])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'members', label: 'Bureau', icon: Users },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'polls', label: 'Polls', icon: Vote }
  ]

  const handleVote = (pollId: number, optionId: number) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId && poll.status === 'active') {
        const updatedOptions = poll.options.map(option => {
          if (option.id === optionId) {
            // Check if user already voted for this option
            const alreadyVoted = poll.userVoted.includes(optionId)
            return {
              ...option,
              votes: alreadyVoted ? option.votes - 1 : option.votes + 1
            }
          }
          // If single choice poll, remove votes from other options
          if (!poll.allowMultiple && poll.userVoted.includes(option.id)) {
            return {
              ...option,
              votes: option.votes - 1
            }
          }
          return option
        })

        let newUserVoted
        if (poll.allowMultiple) {
          // Toggle vote for multiple choice
          newUserVoted = poll.userVoted.includes(optionId)
            ? poll.userVoted.filter(id => id !== optionId)
            : [...poll.userVoted, optionId]
        } else {
          // Single choice - replace previous vote
          newUserVoted = poll.userVoted.includes(optionId) ? [] : [optionId]
        }

        return {
          ...poll,
          options: updatedOptions,
          userVoted: newUserVoted,
          totalVotes: updatedOptions.reduce((sum, option) => sum + option.votes, 0)
        }
      }
      return poll
    }))
  }

  const handleCreatePoll = () => {
    if (newPoll.title && newPoll.options.filter(opt => opt.trim()).length >= 2) {
      const poll = {
        id: polls.length + 1,
        title: newPoll.title,
        description: newPoll.description,
        options: newPoll.options.filter(opt => opt.trim()).map((text, index) => ({
          id: index + 1,
          text: text.trim(),
          votes: 0
        })),
        totalVotes: 0,
        endDate: newPoll.endDate,
        status: 'active' as const,
        allowMultiple: newPoll.allowMultiple,
        createdBy: user?.name || 'Current User',
        userVoted: [],
        createdAt: new Date().toISOString().split('T')[0]
      }
      
      setPolls([poll, ...polls])
      setNewPoll({
        title: '',
        description: '',
        options: ['', ''],
        endDate: '',
        allowMultiple: false
      })
      setShowCreatePoll(false)
    }
  }

  const addPollOption = () => {
    setNewPoll({
      ...newPoll,
      options: [...newPoll.options, '']
    })
  }

  const updatePollOption = (index: number, value: string) => {
    const updatedOptions = [...newPoll.options]
    updatedOptions[index] = value
    setNewPoll({
      ...newPoll,
      options: updatedOptions
    })
  }

  const removePollOption = (index: number) => {
    if (newPoll.options.length > 2) {
      setNewPoll({
        ...newPoll,
        options: newPoll.options.filter((_, i) => i !== index)
      })
    }
  }

  // Navigate to organization's group chat
  const handleMessageOrganization = () => {
    // Navigate to messages page with groups tab active and specific group selected
    navigate('/messages', { 
      state: { 
        activeTab: 'groups', 
        selectedConversation: organization.groupChatId,
        organizationName: organization.name
      } 
    })
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Link>
      </div>

      {/* Cover Image & Basic Info */}
      <GlassCard className="mb-8 overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${organization.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-end justify-between">
              <div className="flex items-end space-x-4">
                <img
                  src={organization.logo}
                  alt={organization.name}
                  className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg"
                />
                <div className="text-white mb-2">
                  <h1 className="text-3xl font-bold">{organization.name}</h1>
                  <p className="text-white/90">{organization.category} • Founded {organization.founded}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleMessageOrganization}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Message Group
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{organization.members}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{organization.stats.eventsHosted}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{organization.stats.projectsCompleted}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{organization.stats.memberRetention}%</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">Retention</div>
            </div>
          </div>

          <p className="text-gray-800 dark:text-gray-200 mb-4">{organization.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {organization.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              {organization.location}
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              {organization.email}
            </div>
            <div className="flex items-center">
              <Globe size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
              <a href={organization.website} className="text-blue-600 dark:text-blue-400 hover:underline">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-1 border border-white/30 dark:border-white/20 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/30 dark:hover:bg-white/20'
                }`}
              >
                <Icon size={16} className="mr-2" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h3>
            <div className="space-y-3">
              {organization.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="text-yellow-500 dark:text-yellow-400" size={20} />
                  <span className="text-gray-800 dark:text-gray-200">{achievement}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Email</div>
                  <div className="text-gray-700 dark:text-gray-300">{organization.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-600 dark:text-green-400" size={20} />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                  <div className="text-gray-700 dark:text-gray-300">{organization.phone}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-600 dark:text-red-400" size={20} />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">Location</div>
                  <div className="text-gray-700 dark:text-gray-300">{organization.location}</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <GlassCard key={event.id} className="p-6 hover:bg-white/30 dark:hover:bg-white/20 transition-all cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.type === 'Competition' ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200' :
                      event.type === 'Workshop' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                      'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{event.attendees}</div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">Attendees</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {activeTab === 'members' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bureauMembers.map((member) => (
            <GlassCard key={member.id} className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                    {member.level === 'Executive Board' && <Crown className="text-yellow-500 dark:text-yellow-400" size={16} />}
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{member.position}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{member.level}</p>
                  <div className="flex flex-wrap gap-1">
                    {member.achievements.map((achievement, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-xs font-medium rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {activeTab === 'projects' && (
        <div className="space-y-6">
          {recentProjects.map((project) => (
            <GlassCard key={project.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' 
                    : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Team Members</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{project.team.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {activeTab === 'polls' && (
        <div className="space-y-6">
          {/* Create Poll Button - Only for bureau members who can manage polls */}
          {userMembership.canManagePolls && (
            <div className="flex justify-end">
              <button
                onClick={() => setShowCreatePoll(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
              >
                <Plus size={16} className="mr-2" />
                Create Poll
              </button>
            </div>
          )}

          {/* Create Poll Modal */}
          {showCreatePoll && (
            <GlassCard className="p-6 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Create New Poll</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Poll Title</label>
                  <input
                    type="text"
                    value={newPoll.title}
                    onChange={(e) => setNewPoll({ ...newPoll, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white"
                    placeholder="Enter poll title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Description (Optional)</label>
                  <textarea
                    value={newPoll.description}
                    onChange={(e) => setNewPoll({ ...newPoll, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white"
                    rows={3}
                    placeholder="Provide additional context..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">Options</label>
                  {newPoll.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updatePollOption(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white"
                        placeholder={`Option ${index + 1}...`}
                      />
                      {newPoll.options.length > 2 && (
                        <button
                          onClick={() => removePollOption(index)}
                          className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                        >
                          <XCircle size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addPollOption}
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    <Plus size={16} className="mr-1" />
                    Add Option
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">End Date</label>
                    <input
                      type="date"
                      value={newPoll.endDate}
                      onChange={(e) => setNewPoll({ ...newPoll, endDate: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="allowMultiple"
                      checked={newPoll.allowMultiple}
                      onChange={(e) => setNewPoll({ ...newPoll, allowMultiple: e.target.checked })}
                      className="mr-2"
                    />
                    <label htmlFor="allowMultiple" className="text-sm text-gray-800 dark:text-gray-200">
                      Allow multiple selections
                    </label>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={handleCreatePoll}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Create Poll
                  </button>
                  <button
                    onClick={() => setShowCreatePoll(false)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </GlassCard>
          )}

          {/* Polls List */}
          {polls.map((poll) => (
            <GlassCard key={poll.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{poll.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      poll.status === 'active' 
                        ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' 
                        : 'bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200'
                    }`}>
                      {poll.status === 'active' ? 'Active' : 'Ended'}
                    </span>
                    {poll.allowMultiple && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                        Multiple Choice
                      </span>
                    )}
                  </div>
                  {poll.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{poll.description}</p>
                  )}
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Created by {poll.createdBy} • {poll.totalVotes} votes • Ends {poll.endDate}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {poll.options.map((option) => {
                  const percentage = poll.totalVotes > 0 ? (option.votes / poll.totalVotes) * 100 : 0
                  const isVoted = poll.userVoted.includes(option.id)
                  
                  return (
                    <div key={option.id} className="relative">
                      <button
                        onClick={() => handleVote(poll.id, option.id)}
                        disabled={poll.status === 'ended'}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                          poll.status === 'ended'
                            ? 'cursor-not-allowed opacity-75'
                            : 'hover:bg-white/30 dark:hover:bg-white/20 cursor-pointer'
                        } ${
                          isVoted
                            ? 'border-blue-500 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/30'
                            : 'border-white/30 dark:border-white/20 bg-white/20 dark:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            {isVoted && <CheckCircle className="text-blue-600 dark:text-blue-400" size={16} />}
                            <span className="font-medium text-gray-900 dark:text-white">{option.text}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {option.votes} votes ({percentage.toFixed(1)}%)
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              isVoted ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'
                            }`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>

              {poll.status === 'active' && (
                <div className="mt-4 p-3 bg-blue-50/50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center text-blue-800 dark:text-blue-200 text-sm">
                    <AlertCircle size={16} className="mr-2" />
                    {poll.allowMultiple 
                      ? 'You can select multiple options. Click to toggle your votes.'
                      : 'You can change your vote anytime before the poll ends.'
                    }
                  </div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrganizationDetail
