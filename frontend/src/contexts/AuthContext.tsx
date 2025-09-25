import React, { createContext, useContext, useState, useEffect } from "react";
import { signupUser, loginUser } from "../api/auth";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Initialize user from localStorage
  const [user, setUser] = useState<any>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const signup = async (formData: any, category: string) => {
    try {
      const res = await signupUser(formData, category);
      const userData = { ...res.data.user, category };
      setUser(userData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      return false;
    }
  };

  const login = async (formData: any, category: string) => {
    try {
      const res = await loginUser(formData, category);
      const userData = { ...res.data.user, category };
      setUser(userData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
