
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, LoginFormData, RegisterFormData } from "@/types";
import { users } from "@/data/mock";
import { useToast } from "@/hooks/use-toast";

interface AuthContextType {
  user: User | null;
  login: (data: LoginFormData) => Promise<boolean>;
  register: (data: RegisterFormData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem("freelanceflow_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (data: LoginFormData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundUser = users.find(u => u.email === data.email);
        
        if (foundUser && data.password === "password") { // simplified auth for demo
          setUser(foundUser);
          localStorage.setItem("freelanceflow_user", JSON.stringify(foundUser));
          toast({
            title: "Login successful",
            description: `Welcome back, ${foundUser.name}!`,
          });
          resolve(true);
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password",
            variant: "destructive",
          });
          resolve(false);
        }
        
        setIsLoading(false);
      }, 1000);
    });
  };

  const register = async (data: RegisterFormData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingUser = users.find(u => u.email === data.email);
        
        if (existingUser) {
          toast({
            title: "Registration failed",
            description: "Email already in use",
            variant: "destructive",
          });
          resolve(false);
        } else if (data.password !== data.confirmPassword) {
          toast({
            title: "Registration failed",
            description: "Passwords do not match",
            variant: "destructive",
          });
          resolve(false);
        } else {
          // Create new user
          const newUser: User = {
            id: `u${users.length + 1}`,
            name: data.name,
            email: data.email,
            role: "both",
            createdAt: new Date().toISOString(),
          };
          
          // In a real app, this would be done on the server
          // users.push(newUser);
          
          setUser(newUser);
          localStorage.setItem("freelanceflow_user", JSON.stringify(newUser));
          
          toast({
            title: "Registration successful",
            description: `Welcome, ${newUser.name}!`,
          });
          resolve(true);
        }
        
        setIsLoading(false);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("freelanceflow_user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
