import React, { useState } from 'react'
import { Search, HelpCircle, Book, MessageCircle, Mail, Phone, ExternalLink, ChevronDown, ChevronRight, Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import GlassCard from '../components/GlassCard'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  helpful: number
  notHelpful: number
}

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const categories = [
    { id: 'all', label: 'All Topics', count: 24 },
    { id: 'getting-started', label: 'Getting Started', count: 6 },
    { id: 'clubs', label: 'Clubs & Organizations', count: 8 },
    { id: 'events', label: 'Events & Calendar', count: 5 },
    { id: 'collaboration', label: 'Collaboration', count: 3 },
    { id: 'account', label: 'Account & Profile', count: 2 }
  ]

  const faqs: FAQItem[] = [
    {
      id: '1',
      category: 'getting-started',
      question: 'How do I get started with K-lique?',
      answer: 'Welcome to K-lique! To get started: 1) Complete your profile with your interests and academic information, 2) Browse the Discover page to find clubs that match your interests, 3) Join clubs by clicking the "Join" button, 4) Check the Calendar for upcoming events, and 5) Start collaborating with other organizations through the Collaborations page.',
      helpful: 45,
      notHelpful: 2
    },
    {
      id: '2',
      category: 'clubs',
      question: 'How do I create a new club?',
      answer: 'To create a new club, click on your profile dropdown and select "Apply to Create Club". Fill out the comprehensive application form including club details, leadership information, and upload required documents like your constitution. Your application will be reviewed by administrators and you\'ll receive a notification once it\'s processed.',
      helpful: 38,
      notHelpful: 1
    },
    {
      id: '3',
      category: 'events',
      question: 'How do I add events to my calendar?',
      answer: 'You can add events to your calendar in several ways: 1) Click "Add to Calendar" on any event in the Events page, 2) Join a club and their events will automatically appear in your calendar, 3) Use the ICS export feature to sync with external calendar apps like Google Calendar or Outlook.',
      helpful: 32,
      notHelpful: 0
    },
    {
      id: '4',
      category: 'collaboration',
      question: 'How do inter-organization collaborations work?',
      answer: 'Inter-org collaborations allow different clubs to work together on projects and events. Club leaders can send collaboration requests through the Collaborations page. Once accepted, both organizations can coordinate activities, share resources, and plan joint events. All collaboration activities are tracked and visible to members of participating organizations.',
      helpful: 28,
      notHelpful: 3
    },
    {
      id: '5',
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Go to your Profile page by clicking on your avatar and selecting "My Profile". Click the "Edit Profile" button to update your personal information, bio, skills, and interests. You can also manage your privacy settings and notification preferences in the Settings page.',
      helpful: 25,
      notHelpful: 1
    },
    {
      id: '6',
      category: 'clubs',
      question: 'What are bureau positions and how do I apply?',
      answer: 'Bureau positions are leadership roles within organizations (President, Vice President, Secretary, etc.). These positions are typically elected or appointed by club members. Check individual club pages for open positions and application processes. Leadership experience is tracked on your profile and contributes to achievements.',
      helpful: 22,
      notHelpful: 2
    }
  ]

  const guides = [
    {
      id: '1',
      title: 'Complete Guide to Club Discovery',
      description: 'Learn how to find and join the perfect clubs for your interests',
      readTime: '5 min read',
      category: 'Getting Started'
    },
    {
      id: '2',
      title: 'Event Management Best Practices',
      description: 'Tips for organizing successful club events and activities',
      readTime: '8 min read',
      category: 'Events'
    },
    {
      id: '3',
      title: 'Building Successful Inter-Org Collaborations',
      description: 'How to create meaningful partnerships between organizations',
      readTime: '6 min read',
      category: 'Collaboration'
    },
    {
      id: '4',
      title: 'Leadership Development in Student Organizations',
      description: 'Growing your leadership skills through club involvement',
      readTime: '7 min read',
      category: 'Leadership'
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const handleFeedback = (faqId: string, type: 'helpful' | 'notHelpful') => {
    console.log(`FAQ ${faqId} marked as ${type}`)
    // Here you would typically send feedback to backend
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions, browse helpful guides, or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <GlassCard className="p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 text-lg"
            />
          </div>
        </GlassCard>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="p-6 text-center hover:bg-white/20 transition-all duration-200 cursor-pointer">
            <Book className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Guides</h3>
            <p className="text-gray-600 text-sm">Step-by-step tutorials and best practices</p>
          </GlassCard>

          <GlassCard className="p-6 text-center hover:bg-white/20 transition-all duration-200 cursor-pointer">
            <MessageCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm">Get instant help from our support team</p>
          </GlassCard>

          <GlassCard className="p-6 text-center hover:bg-white/20 transition-all duration-200 cursor-pointer">
            <Mail className="mx-auto h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-gray-600 text-sm">Send us a message for detailed assistance</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map(({ id, label, count }) => (
                  <button
                    key={id}
                    onClick={() => setActiveCategory(id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors duration-200 ${
                      activeCategory === id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-white/20'
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {count}
                    </span>
                  </button>
                ))}
              </nav>
            </GlassCard>

            {/* Contact Info */}
            <GlassCard className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need More Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="text-gray-500" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Support</p>
                    <p className="text-xs text-gray-600">support@klique.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-gray-500" size={18} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone Support</p>
                    <p className="text-xs text-gray-600">+8210-1234 HELP</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Popular Guides */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide) => (
                  <GlassCard key={guide.id} className="p-6 hover:bg-white/20 transition-all duration-200 cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {guide.category}
                      </span>
                      <ExternalLink className="text-gray-400" size={16} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                    <p className="text-xs text-gray-500">{guide.readTime}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
                {searchQuery && (
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({filteredFAQs.length} results)
                  </span>
                )}
              </h2>
              
              {filteredFAQs.length === 0 ? (
                <GlassCard className="p-12 text-center">
                  <HelpCircle className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                </GlassCard>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <GlassCard key={faq.id} className="overflow-hidden">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        {expandedFAQ === faq.id ? (
                          <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                        ) : (
                          <ChevronRight className="text-gray-500 flex-shrink-0" size={20} />
                        )}
                      </button>
                      
                      {expandedFAQ === faq.id && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 mb-4">{faq.answer}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">Was this helpful?</span>
                                <button
                                  onClick={() => handleFeedback(faq.id, 'helpful')}
                                  className="flex items-center space-x-1 text-green-600 hover:text-green-700 transition-colors duration-200"
                                >
                                  <ThumbsUp size={16} />
                                  <span className="text-sm">{faq.helpful}</span>
                                </button>
                                <button
                                  onClick={() => handleFeedback(faq.id, 'notHelpful')}
                                  className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors duration-200"
                                >
                                  <ThumbsDown size={16} />
                                  <span className="text-sm">{faq.notHelpful}</span>
                                </button>
                              </div>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {categories.find(cat => cat.id === faq.category)?.label}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
