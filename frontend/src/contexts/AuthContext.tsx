import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  type: 'user' | 'partner' | 'government' | 'admin';
  companyId?: string;
  companyName?: string;
  govId?: string;
  departmentName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: any, type: string) => boolean;
  logout: () => void;
  signup: (data: any, type: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const demoCredentials = {
  user: { email: 'user@demo.com', password: 'user123', name: 'Demo User' },
  partner: { email: 'partner@demo.com', password: 'partner123', companyId: 'partner001', companyName: 'EcoTech Solutions' },
  government: { govId: 'gov001', password: 'gov123', departmentName: 'Environmental Protection Agency' }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (credentials: any, type: string): boolean => {
    const demo = demoCredentials[type as keyof typeof demoCredentials];
    
    if (type === 'user' && credentials.email === demo.email && credentials.password === demo.password) {
      setUser({
        id: '1',
        email: demo.email,
        name: demo.name,
        type: 'user'
      });
      return true;
    } else if (type === 'partner' && 
               ((credentials.email === demo.email && credentials.password === demo.password) ||
                (credentials.companyId === demo.companyId && credentials.password === demo.password))) {
      setUser({
        id: '2',
        email: demo.email,
        name: demo.companyName,
        type: 'partner',
        companyId: demo.companyId,
        companyName: demo.companyName
      });
      return true;
    } else if (type === 'government' && credentials.govId === demo.govId && credentials.password === demo.password) {
      setUser({
        id: '3',
        email: 'gov@demo.com',
        name: demo.departmentName,
        type: 'government',
        govId: demo.govId,
        departmentName: demo.departmentName
      });
      return true;
    }
    
    return false;
  };

  const signup = (data: any, type: string): boolean => {
    // Simulate successful signup for demo
    if (type === 'user') {
      setUser({
        id: 'new-user',
        email: data.email,
        name: data.name,
        type: 'user'
      });
    } else if (type === 'partner') {
      setUser({
        id: 'new-partner',
        email: data.email,
        name: data.companyName,
        type: 'partner',
        companyId: data.companyId,
        companyName: data.companyName
      });
    } else if (type === 'government') {
      setUser({
        id: 'new-gov',
        email: data.email,
        name: data.departmentName,
        type: 'government',
        govId: data.govId,
        departmentName: data.departmentName
      });
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}