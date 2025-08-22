import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: 'student' | 'admin'
  avatar?: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  isAdmin: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Manggis',
    email: 'manggis@unikl.edu',
    role: 'student',
    avatar: 'https://imgcdn.stablediffusionweb.com/2024/11/2/3fdef617-1285-4fa7-ac7c-435cac335cd4.jpg'
  })

  const isAdmin = user?.role === 'admin'

  return (
    <UserContext.Provider value={{ user, setUser, isAdmin }}>
      {children}
    </UserContext.Provider>
  )
}
