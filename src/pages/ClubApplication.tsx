import React, { useState } from 'react'
import { ArrowLeft, Upload, X, Plus, Users, Calendar, Target, FileText, Mail, Phone, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'

interface FormData {
  clubName: string
  category: string
  description: string
  mission: string
  targetAudience: string
  expectedMembers: string
  meetingFrequency: string
  facultyAdvisor: string
  advisorEmail: string
  advisorPhone: string
  presidentName: string
  presidentEmail: string
  presidentPhone: string
  presidentYear: string
  vicePresidentName: string
  vicePresidentEmail: string
  budget: string
  fundingSources: string
  activities: string[]
  constitution: File | null
  logo: File | null
}

const ClubApplication: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    clubName: '',
    category: '',
    description: '',
    mission: '',
    targetAudience: '',
    expectedMembers: '',
    meetingFrequency: '',
    facultyAdvisor: '',
    advisorEmail: '',
    advisorPhone: '',
    presidentName: '',
    presidentEmail: '',
    presidentPhone: '',
    presidentYear: '',
    vicePresidentName: '',
    vicePresidentEmail: '',
    budget: '',
    fundingSources: '',
    activities: [],
    constitution: null,
    logo: null
  })

  const [newActivity, setNewActivity] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    'Academic & Professional',
    'Arts & Culture',
    'Sports & Recreation',
    'Community Service',
    'Technology & Innovation',
    'Business & Entrepreneurship',
    'Health & Wellness',
    'Environmental',
    'Religious & Spiritual',
    'Special Interest',
    'Greek Life',
    'Media & Communications'
  ]

  const meetingFrequencies = [
    'Weekly',
    'Bi-weekly',
    'Monthly',
    'Quarterly',
    'As needed',
    'Event-based'
  ]

  const yearLevels = [
    'Freshman',
    'Sophomore',
    'Junior',
    'Senior',
    'Graduate Student'
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: 'constitution' | 'logo', file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }))
  }

  const addActivity = () => {
    if (newActivity.trim() && !formData.activities.includes(newActivity.trim())) {
      setFormData(prev => ({
        ...prev,
        activities: [...prev.activities, newActivity.trim()]
      }))
      setNewActivity('')
    }
  }

  const removeActivity = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.filter(a => a !== activity)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Club application submitted:', formData)
    alert('Your club application has been submitted successfully! You will receive a confirmation email shortly.')
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply to Create a Club</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your own student organization and bring together like-minded individuals. 
              Fill out this comprehensive application to get your club officially recognized.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <FileText className="text-blue-600" />
              <span>Basic Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Club Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.clubName}
                  onChange={(e) => handleInputChange('clubName', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="Enter your club name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Club Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="Provide a detailed description of your club..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mission Statement *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.mission}
                  onChange={(e) => handleInputChange('mission', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="What is your club's mission and purpose?"
                />
              </div>
            </div>
          </GlassCard>

          {/* Club Details */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Users className="text-green-600" />
              <span>Club Details</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Audience *
                </label>
                <input
                  type="text"
                  required
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="Who is your target audience?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Number of Members *
                </label>
                <input
                  type="number"
                  required
                  min="5"
                  value={formData.expectedMembers}
                  onChange={(e) => handleInputChange('expectedMembers', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="Minimum 5 members required"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Frequency *
                </label>
                <select
                  required
                  value={formData.meetingFrequency}
                  onChange={(e) => handleInputChange('meetingFrequency', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                >
                  <option value="">Select frequency</option>
                  {meetingFrequencies.map(freq => (
                    <option key={freq} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Annual Budget
                </label>
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                  placeholder="e.g., $500 - $2000"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Planned Activities
                </label>
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newActivity}
                      onChange={(e) => setNewActivity(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                      placeholder="Add an activity or event"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addActivity())}
                    />
                    <button
                      type="button"
                      onClick={addActivity}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <Plus size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                  
                  {formData.activities.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.activities.map((activity, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          <span>{activity}</span>
                          <button
                            type="button"
                            onClick={() => removeActivity(activity)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Leadership Information */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <User className="text-purple-600" />
              <span>Leadership Information</span>
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">President Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.presidentName}
                      onChange={(e) => handleInputChange('presidentName', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Level *
                    </label>
                    <select
                      required
                      value={formData.presidentYear}
                      onChange={(e) => handleInputChange('presidentYear', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    >
                      <option value="">Select year</option>
                      {yearLevels.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.presidentEmail}
                      onChange={(e) => handleInputChange('presidentEmail', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.presidentPhone}
                      onChange={(e) => handleInputChange('presidentPhone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Faculty Advisor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Faculty Advisor Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.facultyAdvisor}
                      onChange={(e) => handleInputChange('facultyAdvisor', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Advisor Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.advisorEmail}
                      onChange={(e) => handleInputChange('advisorEmail', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Advisor Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.advisorPhone}
                      onChange={(e) => handleInputChange('advisorPhone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* File Uploads */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Upload className="text-orange-600" />
              <span>Required Documents</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Club Constitution (PDF) *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload('constitution', e.target.files?.[0] || null)}
                      className="hidden"
                      id="constitution-upload"
                    />
                    <label
                      htmlFor="constitution-upload"
                      className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Upload Constitution
                    </label>
                    <p className="text-sm text-gray-500 mt-1">PDF files only</p>
                  </div>
                  {formData.constitution && (
                    <p className="text-sm text-green-600 mt-2">✓ {formData.constitution.name}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Club Logo (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('logo', e.target.files?.[0] || null)}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Upload Logo
                    </label>
                    <p className="text-sm text-gray-500 mt-1">PNG, JPG, SVG</p>
                  </div>
                  {formData.logo && (
                    <p className="text-sm text-green-600 mt-2">✓ {formData.logo.name}</p>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <FileText size={20} />
                  <span>Submit Club Application</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClubApplication
