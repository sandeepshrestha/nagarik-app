import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

interface User {
  phoneNumber: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  sendOTP: (phoneNumber: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [tempPhone, setTempPhone] = useState<string | null>(null);
  // const navigate = useNavigate(); // Cannot use useNavigate here as it needs to be inside Router

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem("nagarik_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const sendOTP = async (phoneNumber: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTempPhone(phoneNumber);
    console.log(`OTP sent to ${phoneNumber}: 123456`);
  };

  const verifyOTP = async (otp: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (otp === "123456" && tempPhone) {
      const newUser = { phoneNumber: tempPhone, name: "Sandeep Shrestha" };
      setUser(newUser);
      localStorage.setItem("nagarik_user", JSON.stringify(newUser));
      setTempPhone(null);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nagarik_user");
    // Navigation should be handled by the component calling logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        sendOTP,
        verifyOTP,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
