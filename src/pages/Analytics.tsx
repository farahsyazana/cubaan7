import React from 'react'
import { TrendingUp, Users, Calendar, Activity, BarChart3, PieChart } from 'lucide-react'

const Analytics: React.FC = () => {
  const metrics = [
    { label: 'Total Members', value: '1,247', change: '+12%', trend: 'up' },
    { label: 'Active Clubs', value: '24', change: '+2', trend: 'up' },
    { label: 'Events This Month', value: '18', change: '+25%', trend: 'up' },
    { label: 'Engagement Rate', value: '78%', change: '+5%', trend: 'up' }
  ]

  const clubGrowth = [
    { club: 'Tech Club', members: 245, growth: 15 },
    { club: 'Photography Club', members: 189, growth: 12 },
    { club: 'Environmental Club', members: 156, growth: 8 },
    { club: 'Art Society', members: 134, growth: 6 },
    { club: 'Dance Crew', members: 98, growth: 10 }
  ]

  const eventCategories = [
    { category: 'Technology', count: 8, percentage: 44 },
    { category: 'Arts', count: 4, percentage: 22 },
    { category: 'Sports', count: 3, percentage: 17 },
    { category: 'Academic', count: 2, percentage: 11 },
    { category: 'Social', count: 1, percentage: 6 }
  ]

  return (
    <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600">Track platform performance and engagement metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
              <TrendingUp className="text-green-600" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</p>
            <p className="text-green-600 text-sm font-medium">{metric.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Club Membership Growth</h2>
          </div>
          <div className="space-y-4">
            {clubGrowth.map((club) => (
              <div key={club.club} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-900 font-medium">{club.club}</span>
                    <span className="text-gray-600 text-sm">{club.members} members</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(club.members / 250) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <span className="text-green-600 text-sm font-medium">+{club.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-6">
            <PieChart className="text-purple-600" size={24} />
            <h2 className="text-xl font-bold text-gray-900">Event Categories</h2>
          </div>
          <div className="space-y-4">
            {eventCategories.map((category) => (
              <div key={category.category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      category.category === 'Technology' ? 'bg-blue-500' :
                      category.category === 'Arts' ? 'bg-purple-500' :
                      category.category === 'Sports' ? 'bg-green-500' :
                      category.category === 'Academic' ? 'bg-orange-500' :
                      'bg-pink-500'
                    }`}
                  />
                  <span className="text-gray-900 font-medium">{category.category}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 text-sm">{category.count} events</span>
                  <span className="text-gray-900 font-medium">{category.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="text-green-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">Member Activity</h3>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">89%</p>
            <p className="text-gray-600 text-sm">Active in last 30 days</p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="text-orange-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">Event Attendance</h3>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">76%</p>
            <p className="text-gray-600 text-sm">Average attendance rate</p>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="text-red-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">Platform Health</h3>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">95%</p>
            <p className="text-gray-600 text-sm">System uptime</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
