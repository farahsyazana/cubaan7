import React, { useState } from 'react'
import { Calendar, Filter, Download, MapPin, Clock, Users, Award, Building2 } from 'lucide-react'

const EventCalendar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const events = [
    {
      id: 1,
      title: 'HackPPMK 2025',
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      date: '2025-01-15',
      time: '09:00 AM',
      location: 'Computer Lab',
      attendees: 45,
      category: 'technology',
      description: '24-hour coding challenge with prizes',
      eventType: 'organization',
      bureauLevel: 'Members'
    },
    {
      id: 2,
      title: 'Art Guild Exhibition Opening',
      organization: 'Culture & Arts',
      date: '2025-01-18',
      time: '06:00 PM',
      location: 'Gallery Hall',
      attendees: 120,
      category: 'arts',
      description: 'Showcase of student artwork',
      eventType: 'club',
      bureauLevel: 'Open'
    },
    {
      id: 3,
      title: 'Karnival Sukan Mahasiswa (KASUMA) Autumn 2025',
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      date: '2025-01-20',
      time: '08:00 AM',
      location: 'Yonsei Athletic Field',
      attendees: 200,
      category: 'sports',
      description: 'Sports Day',
      eventType: 'organization',
      bureauLevel: 'Open'
    },
    {
      id: 4,
      title: 'Bureau Leadership Training',
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      date: '2025-01-22',
      time: '02:00 PM',
      location: 'Conference Room A',
      attendees: 35,
      category: 'leadership',
      description: 'Leadership development for bureau members',
      eventType: 'organization',
      bureauLevel: 'All Bureau Members'
    },
    {
      id: 5,
      title: 'Dance Collective Performance',
      organization: 'Malaysian Students Dance Crew (MSDC)',
      date: '2025-01-25',
      time: '07:30 PM',
      location: 'Main Auditorium',
      attendees: 180,
      category: 'performance',
      description: 'Annual dance showcase',
      eventType: 'club',
      bureauLevel: 'Members'
    },
    {
      id: 6,
      title: 'Simposium Kerjaya Mahasiswa (SIKMA)',
      organization: 'Persatuan Pelajar Malaysia Korea (PPMK)',
      date: '2024-01-28',
      time: '10:00 AM',
      location: 'Student Center',
      attendees: 300,
      category: 'academic',
      description: 'Joint career fair with industry partners',
      eventType: 'organization',
      bureauLevel: 'Executive Boards'
    },
		{
      id: 7,
      title: 'ChatAndBuild Workshop',
      organization: 'Tech Society',
      date: '2025-01-02',
      time: '08:00 AM',
      location: 'Zoom (Online)',
      attendees: 200,
      category: 'technology',
      description: 'make-your-own website workshop',
      eventType: 'club',
      bureauLevel: 'Open'
    },
		{
      id: 8,
      title: 'Night Run',
      organization: 'Malaysian Students Recreational Club (MSRC)',
      date: '2025-01-10',
      time: '08:00 AM',
      location: 'Athletic Field, DMU',
      attendees: 200,
      category: 'sports',
      description: '#hamsaraja',
      eventType: 'club',
      bureauLevel: 'Members'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'organization', label: 'PPMK Events' },
    { id: 'club', label: 'Club Events' },
    { id: 'technology', label: 'Technology' },
    { id: 'arts', label: 'Arts' },
    { id: 'sports', label: 'Sports' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'performance', label: 'Performance' },
    { id: 'academic', label: 'Academic' }
  ]

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => 
        event.category === selectedFilter || 
        event.eventType === selectedFilter
      )

  const exportToICS = () => {
    const icsContent = filteredEvents.map(event => 
      `BEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${event.date.replace(/-/g, '')}T${event.time.replace(/[:\s]/g, '').slice(0, 4)}00\nLOCATION:${event.location}\nDESCRIPTION:${event.description}\nEND:VEVENT`
    ).join('\n')
    
    const fullICS = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//K-lique//Events//EN\n${icsContent}\nEND:VCALENDAR`
    
    const blob = new Blob([fullICS], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'k-lique-events.ics'
    a.click()
  }

  const getEventTypeIcon = (eventType: string) => {
    switch (eventType) {
      case 'organization': return <Building2 className="text-blue-600 dark:text-blue-400" size={16} />
      case 'club': return <Users className="text-green-600 dark:text-green-400" size={16} />
      default: return <Calendar className="text-gray-600 dark:text-gray-400" size={16} />
    }
  }

  const getEventTypeLabel = (eventType: string) => {
    switch (eventType) {
      case 'organization': return 'PPMK Event'
      case 'club': return 'Club Event'
      default: return 'Event'
    }
  }

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Event Calendar</h1>
          <p className="text-gray-700 dark:text-gray-300">Stay updated with all organization activities and bureau events</p>
        </div>
        <button
          onClick={exportToICS}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          <Download size={18} />
          <span>Export ICS</span>
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <Filter size={20} className="text-gray-700 dark:text-gray-300" />
          <span className="text-gray-800 dark:text-gray-200 font-medium">Filter events:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/30 dark:bg-white/20 text-gray-800 dark:text-gray-200 hover:bg-white/40 dark:hover:bg-white/30 border border-white/30 dark:border-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-2xl p-6 border border-white/30 dark:border-white/20 shadow-lg hover:shadow-xl transition-all duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{event.organization}</p>
                <div className="flex items-center space-x-2 mt-1">
                  {getEventTypeIcon(event.eventType)}
                  <span className="text-xs text-gray-700 dark:text-gray-300">{getEventTypeLabel(event.eventType)}</span>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                event.category === 'technology' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                event.category === 'arts' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' :
                event.category === 'activism' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' :
                event.category === 'performance' ? 'bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200' :
                'bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200'
              }`}>
                {event.category}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{event.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <Calendar size={16} />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <Clock size={16} />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <MapPin size={16} />
                <span className="text-sm">{event.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <Users size={16} />
                <span className="text-sm">{event.attendees} attending</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <Award size={16} />
                <span className="text-sm">{event.bureauLevel}</span>
              </div>
            </div>

            <button className="w-full bg-white/30 dark:bg-white/20 hover:bg-white/40 dark:hover:bg-white/30 text-gray-900 dark:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 border border-white/30 dark:border-white/20">
              Join Event
            </button>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar size={48} className="mx-auto text-gray-500 dark:text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No events found</h3>
          <p className="text-gray-600 dark:text-gray-400">Try adjusting your filters to see more events.</p>
        </div>
      )}
    </div>
  )
}

export default EventCalendar
