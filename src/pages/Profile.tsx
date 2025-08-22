import React, { useState } from 'react'
import { Camera, Edit3, Mail, Phone, MapPin, Calendar, Award, Users, Star, BookOpen, Trophy, Target, Save, X } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { useUser } from '../contexts/UserContext'

const Profile: React.FC = () => {
  const { user } = useUser()
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+8210-0000 0000',
    location: '14 St., Perhentian Island',
    bio: 'Passionate computer science student with interests in AI, web development, and community building. Love connecting with like-minded individuals and creating meaningful projects.',
    major: 'Computer Science',
    year: 'Senior',
    gpa: '3.8'
  })

  const achievements = [
    { id: 1, title: 'Club Founder', description: 'Founded Tech Society', icon: Trophy, color: 'text-yellow-600' },
    { id: 2, title: 'Event Organizer', description: 'Organized 5+ successful events', icon: Calendar, color: 'text-blue-600' },
    { id: 3, title: 'Community Builder', description: 'Helped grow 3 organizations', icon: Users, color: 'text-green-600' },
    { id: 4, title: 'Leadership Excellence', description: 'Served as President for 2 terms', icon: Award, color: 'text-purple-600' }
  ]

  const skills = [
    'Python', 'Java', 'Arduino', 'Robotics systems', 'Microsoft Excel', 'Digital finance tools', 'Public speaking', 'Workshop facilitation', 'Event tech coordination', 'Google Workspace', 'Notion'
  ]

  const interests = [
    'Technology', 'Travel', 'Environmental Sustainability',
    'Music', 'Volunteer Work', 'Travel'
  ]

  const clubHistory = [
    {
      id: 1,
      name: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      role: 'Secretary',
      period: '2024 - Present',
      achievements: ['Increased membership by 150%', 'Organized annual hackathon', 'Launched mentorship program']
    },
    {
      id: 2,
      name: 'Yonsei Foreign Student Union (FSU)',
      role: 'Communication Leader',
      period: '2024 - Present',
      achievements: ['Led creative workshops', 'Organized campus photo exhibition', 'Built social media presence']
    },
    {
      id: 3,
      name: 'Malaysian Students Recreational Club (MSRC)',
      role: 'Media Team',
      period: '2025 - Present',
      achievements: ['Participated in campus cleanup', 'Promoted sustainability initiatives']
    }
  ]

  const handleSave = () => {
    console.log('Saving profile data:', editData)
    setIsEditing(false)
    // Here you would typically save to backend
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and showcase your achievements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <GlassCard className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white/50"
                />
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  <Camera size={16} />
                </button>
              </div>
              
              {!isEditing ? (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{editData.name}</h2>
                  <p className="text-gray-600 mb-2">{editData.major} • {editData.year}</p>
                  <p className="text-sm text-gray-500 mb-4">GPA: {editData.gpa}</p>
                  <p className="text-gray-700 text-sm mb-4">{editData.bio}</p>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Edit3 size={16} />
                    <span>Edit Profile</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    value={editData.major}
                    onChange={(e) => setEditData(prev => ({ ...prev, major: e.target.value }))}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Major"
                  />
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Bio"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Save size={16} />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <X size={16} />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
            </GlassCard>

            {/* Contact Info */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-500" size={18} />
                  <span className="text-gray-700">{editData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-500" size={18} />
                  <span className="text-gray-700">{editData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-gray-500" size={18} />
                  <span className="text-gray-700">{editData.location}</span>
                </div>
              </div>
            </GlassCard>

            {/* Skills */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Activity & Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Achievements */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-3 p-4 bg-white/10 rounded-xl border border-white/20">
                    <achievement.icon className={`${achievement.color} mt-1`} size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Club History */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Organization History</h3>
              <div className="space-y-6">
                {clubHistory.map((club) => (
                  <div key={club.id} className="border-l-4 border-blue-500 pl-6 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{club.name}</h4>
                      <span className="text-sm text-gray-500">{club.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{club.role}</p>
                    <ul className="space-y-1">
                      {club.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-600 text-sm flex items-center space-x-2">
                          <Star className="text-yellow-500" size={12} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Interests */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-purple-100 text-purple-800 text-sm rounded-lg"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Statistics */}
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">My Statistics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Events Attended</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-gray-600">Events Organized</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-sm text-gray-600">Leadership Roles</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
