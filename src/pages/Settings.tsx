import React, { useState } from 'react'
import { Bell, Shield, User, Palette, Globe, Smartphone, Mail, Lock, Eye, EyeOff, Save, Trash2, Sun, Moon, Monitor } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import { useTheme } from '../contexts/ThemeContext'

const Settings: React.FC = () => {
  const { theme, actualTheme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('profile')
  const [showPassword, setShowPassword] = useState(false)
  const [settings, setSettings] = useState({
    // Profile Settings
    displayName: 'Manggis',
    email: 'manggis@unikl.edu',
    phone: '+8210-0000 0000',
    bio: 'Passionate computer science student with interests in AI, web development, and community building.',
    profileVisibility: 'public',
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    eventReminders: true,
    collaborationRequests: true,
    achievementUpdates: true,
    weeklyDigest: false,
    
    // Privacy Settings
    profileSearchable: true,
    showEmail: false,
    showPhone: false,
    allowDirectMessages: true,
    
    // Appearance Settings
    language: 'en',
    timezone: 'Malaysia/KUala_Lumpur',
    
    // Security Settings
    twoFactorEnabled: false,
    loginAlerts: true,
    sessionTimeout: '30'
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: Lock }
  ]

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Clean and bright interface' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Easy on the eyes in low light' },
    { value: 'auto', label: 'Auto', icon: Monitor, description: 'Matches your system preference' }
  ]

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    console.log('Saving settings:', settings)
    // Here you would typically save to backend
    alert('Settings saved successfully!')
  }

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Display Name</label>
          <input
            type="text"
            value={settings.displayName}
            onChange={(e) => handleSettingChange('displayName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleSettingChange('email', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            value={settings.phone}
            onChange={(e) => handleSettingChange('phone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Visibility</label>
          <select
            value={settings.profileVisibility}
            onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          >
            <option value="public">Public</option>
            <option value="university">University Only</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
        <textarea
          rows={4}
          value={settings.bio}
          onChange={(e) => handleSettingChange('bio', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
        />
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Notifications</h3>
        {[
          { key: 'emailNotifications', label: 'Enable email notifications', description: 'Receive notifications via email' },
          { key: 'eventReminders', label: 'Event reminders', description: 'Get reminded about upcoming events' },
          { key: 'collaborationRequests', label: 'Collaboration requests', description: 'Notifications for new collaboration opportunities' },
          { key: 'achievementUpdates', label: 'Achievement updates', description: 'Get notified when you earn new achievements' },
          { key: 'weeklyDigest', label: 'Weekly digest', description: 'Receive a weekly summary of activities' }
        ].map(({ key, label, description }) => (
          <div key={key} className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">{label}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings[key as keyof typeof settings] as boolean}
                onChange={(e) => handleSettingChange(key, e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Push Notifications</h3>
        <div className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Browser notifications</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receive push notifications in your browser</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.pushNotifications}
              onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      {[
        { key: 'profileSearchable', label: 'Make profile searchable', description: 'Allow others to find your profile in search results' },
        { key: 'showEmail', label: 'Show email on profile', description: 'Display your email address on your public profile' },
        { key: 'showPhone', label: 'Show phone on profile', description: 'Display your phone number on your public profile' },
        { key: 'allowDirectMessages', label: 'Allow direct messages', description: 'Let other users send you direct messages' }
      ].map(({ key, label, description }) => (
        <div key={key} className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">{label}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings[key as keyof typeof settings] as boolean}
              onChange={(e) => handleSettingChange(key, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      ))}
    </div>
  )

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      {/* Theme Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Theme</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themeOptions.map((option) => {
            const Icon = option.icon
            const isSelected = theme === option.value
            return (
              <button
                key={option.value}
                onClick={() => setTheme(option.value as any)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20'
                    : 'border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`p-3 rounded-full ${
                    isSelected 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className={`font-medium ${
                      isSelected 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {option.label}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {option.description}
                    </p>
                  </div>
                  {isSelected && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
        <div className="mt-4 p-3 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Current theme:</strong> {actualTheme === 'dark' ? 'Dark' : 'Light'} mode
            {theme === 'auto' && ' (automatically detected)'}
          </p>
        </div>
      </div>

      {/* Other Appearance Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          >
            <option value="en">English</option>
            <option value="kr">한국어</option>
            <option value="my">Malay</option>
            <option value="cn">Mandarin (Simplified)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
          <select
            value={settings.timezone}
            onChange={(e) => handleSettingChange('timezone', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          >
            <option value="America/New_York">Malaysia Time (MYT)</option>
            <option value="America/Chicago">Korea Standard Time (KST)</option>
            <option value="America/Denver">Japan Standard Time (JST)</option>
            <option value="America/Los_Angeles">Waktu Indonesia Barat (WIB)</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Password & Authentication</h3>
        <div className="p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorEnabled}
                onChange={(e) => handleSettingChange('twoFactorEnabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
            Change Password
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security Preferences</h3>
        <div className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Login alerts</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when someone logs into your account</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.loginAlerts}
              onChange={(e) => handleSettingChange('loginAlerts', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 dark:border-white/10">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Session timeout</label>
          <select
            value={settings.sessionTimeout}
            onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-colors duration-200"
          >
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="240">4 hours</option>
            <option value="never">Never</option>
          </select>
        </div>
      </div>

      <div className="p-4 bg-red-50/50 dark:bg-red-900/20 rounded-xl border border-red-200/50 dark:border-red-800/50">
        <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-2">Danger Zone</h3>
        <p className="text-sm text-red-700 dark:text-red-300 mb-4">These actions cannot be undone.</p>
        <button className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
          <Trash2 size={16} />
          <span>Delete Account</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account preferences and privacy settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <GlassCard className="p-4">
              <nav className="space-y-2">
                {tabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                      activeTab === id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </nav>
            </GlassCard>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tabs.find(tab => tab.id === activeTab)?.label} Settings
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {activeTab === 'profile' && 'Update your personal information and profile details'}
                  {activeTab === 'notifications' && 'Configure how you receive notifications'}
                  {activeTab === 'privacy' && 'Control your privacy and data sharing preferences'}
                  {activeTab === 'appearance' && 'Customize the look and feel of your experience'}
                  {activeTab === 'security' && 'Manage your account security and authentication'}
                </p>
              </div>

              {activeTab === 'profile' && renderProfileSettings()}
              {activeTab === 'notifications' && renderNotificationSettings()}
              {activeTab === 'privacy' && renderPrivacySettings()}
              {activeTab === 'appearance' && renderAppearanceSettings()}
              {activeTab === 'security' && renderSecuritySettings()}

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end space-x-4">
                  <button className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Save size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
