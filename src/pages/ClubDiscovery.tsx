import React, { useState } from 'react'
import { Heart, X, Users, MapPin, Tag, Award, Crown, UserPlus } from 'lucide-react'

const ClubDiscovery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null)

   const organizations = [
    {
      id: 1,
      name: 'Malaysian Students Recreational Crew (MSRC)',
      description: 'When Nature Meets Adventure. Together.',
      members: 67,
      category: 'Sports',
      location: 'Yonsei University Main Athletic Field',
      image: 'https://i.imgur.com/60pXcaJ.jpeg',
      tags: ['Run', 'Hike', 'Hamsaraja'],
      bureauPositions: [
        { title: 'Creative Director', available: true, requirements: 'Portfolio required' },
        { title: 'Event Coordinator', available: false, requirements: 'Event planning experience' },
        { title: 'Social Media Manager', available: true, requirements: 'Social media experience' }
      ]
    },
    {
      id: 2,
      name: 'Generasi Mahasiswa Islam Korea (GMIK)',
      description: 'Bersama Membina Mahasiswa Islam Profesional di Korea',
      members: 54,
      category: 'Religious',
      location: 'Itaewon Mosque',
      image: 'https://i.imgur.com/CVuXD33.jpeg',
      tags: ['Muslim', 'Quran Gathering', 'Gerai 3 Alam'],
      bureauPositions: [
        { title: 'Technical Lead', available: false, requirements: 'Advanced programming skills' },
        { title: 'Project Manager', available: true, requirements: 'Leadership experience' },
        { title: 'Treasurer', available: true, requirements: 'Finance background preferred' }
      ]
    },
    {
      id: 3,
      name: 'Malaysia Korea Badminton Association (MKBA)',
      description: '*smash',
      members: 104,
      category: 'Sports',
      location: 'Badminton Court Guro',
      image: 'https://i.imgur.com/wfwBwyM.jpeg',
      tags: ['Badminton', 'Gempak', 'Active'],
      bureauPositions: [
        { title: 'Social Media Mangaer', available: true, requirements: 'Social media experience' },
        { title: 'Outreach Coordinator', available: true, requirements: 'Communication skills' },
        { title: 'Secretary', available: false, requirements: 'Organizational skills' }
      ]
    },
    {
      id: 4,
      name: 'Malaysian Students Dance Crew (MSDC)',
      description: 'Est.2016',
      members: 58,
      category: 'Performance',
      location: 'Dance Studio',
      image: 'https://i.imgur.com/Z6xZgKq.jpeg',
      tags: ['Dance', 'Performance', 'Fitness'],
      bureauPositions: [
        { title: 'Choreographer', available: true, requirements: 'Dance experience required' },
        { title: 'Performance Director', available: false, requirements: 'Stage management experience' },
        { title: 'Costume Designer', available: true, requirements: 'Design skills preferred' }
      ]
    }
  ]

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return // Prevent multiple swipes during animation
    
    setIsAnimating(true)
    setSwipeDirection(direction)
    
    if (direction === 'right') {
      console.log('Interested in:', organizations[currentIndex].name)
    }
    
    // Wait for animation to complete before changing card
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % organizations.length)
      setSwipeDirection(null)
      setIsAnimating(false)
    }, 300) // Match animation duration
  }

  const applyForBureauPosition = (orgId: number, positionTitle: string) => {
    console.log(`Applied for ${positionTitle} at organization ${orgId}`)
  }

  const currentOrg = organizations[currentIndex]
  const nextOrg = organizations[(currentIndex + 1) % organizations.length]
  const availablePositions = currentOrg.bureauPositions.filter(pos => pos.available)

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Discover Organizations</h1>
        <p className="text-gray-700 dark:text-gray-300">Swipe right to join, explore bureau positions</p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          {/* Card Stack Container */}
          <div className="relative h-auto">
            {/* Next Card (Background) */}
            <div className="absolute inset-0 transform scale-95 opacity-50">
              <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl overflow-hidden">
                <div className="relative h-80">
                  <img
                    src={nextOrg.image}
                    alt={nextOrg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl font-bold mb-1">{nextOrg.name}</h2>
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{nextOrg.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{nextOrg.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      {nextOrg.category}
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed line-clamp-3">
                    {nextOrg.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Current Card (Foreground) */}
            <div 
              className={`relative transition-all duration-300 ease-out ${
                swipeDirection === 'left' 
                  ? 'transform -translate-x-full rotate-12 opacity-0' 
                  : swipeDirection === 'right'
                  ? 'transform translate-x-full rotate-12 opacity-0'
                  : 'transform translate-x-0 rotate-0 opacity-100'
              }`}
            >
              <div className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl border border-white/30 dark:border-white/20 shadow-2xl overflow-hidden">
                <div className="relative h-80">
                  <img
                    src={currentOrg.image}
                    alt={currentOrg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Swipe Indicators */}
                  {swipeDirection && (
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      swipeDirection === 'right' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      <div className={`p-4 rounded-full ${
                        swipeDirection === 'right' ? 'bg-green-500' : 'bg-red-500'
                      } transform scale-150 animate-pulse`}>
                        {swipeDirection === 'right' ? (
                          <Heart size={32} className="text-white" />
                        ) : (
                          <X size={32} className="text-white" />
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl font-bold mb-1">{currentOrg.name}</h2>
                    <div className="flex items-center space-x-4 text-sm opacity-90">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{currentOrg.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{currentOrg.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                      {currentOrg.category}
                    </span>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
                    {currentOrg.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentOrg.tags.map((tag) => (
                      <div key={tag} className="flex items-center space-x-1 px-2 py-1 bg-white/30 dark:bg-white/20 rounded-full text-sm text-gray-800 dark:text-gray-200">
                        <Tag size={12} />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  {availablePositions.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="text-purple-600 dark:text-purple-400" size={18} />
                        <h3 className="font-semibold text-gray-900 dark:text-white">Available Bureau Positions</h3>
                      </div>
                      <div className="space-y-2">
                        {availablePositions.slice(0, 2).map((position) => (
                          <div key={position.title} className="flex items-center justify-between p-3 bg-white/30 dark:bg-white/20 rounded-lg border border-white/30 dark:border-white/20">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white text-sm">{position.title}</p>
                              <p className="text-gray-700 dark:text-gray-300 text-xs">{position.requirements}</p>
                            </div>
                            <button
                              onClick={() => applyForBureauPosition(currentOrg.id, position.title)}
                              className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-full transition-colors duration-200"
                            >
                              <UserPlus size={12} />
                              <span>Apply</span>
                            </button>
                          </div>
                        ))}
                        {availablePositions.length > 2 && (
                          <p className="text-gray-600 dark:text-gray-400 text-xs text-center">
                            +{availablePositions.length - 2} more positions available
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() => handleSwipe('left')}
                      disabled={isAnimating}
                      className={`flex items-center justify-center w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                        isAnimating ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <X size={24} />
                    </button>
                    <button
                      onClick={() => handleSwipe('right')}
                      disabled={isAnimating}
                      className={`flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                        isAnimating ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Heart size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              {currentIndex + 1} of {organizations.length} organizations
            </p>
            
            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-3">
              {organizations.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 dark:bg-blue-400 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubDiscovery
