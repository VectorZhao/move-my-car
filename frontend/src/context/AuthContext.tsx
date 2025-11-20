import { createContext, useContext, useEffect, useState } from 'react';
import { AuthResponse, UserProfile, Role } from '../types';
import { attachToken } from '../api/client';

interface AuthState {
  token: string | null;
  user: UserProfile | null;
  login: (payload: AuthResponse) => void;
  logout: () => void;
  isAuthenticated: boolean;
  hasRole: (role: Role) => boolean;
  initialized: boolean;
}

const sessionVersion = import.meta.env.VITE_SESSION_VERSION ?? 'v2';
const sessionKey = `mmc_session_${sessionVersion}`;

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // 清理旧版 session，避免部署后仍持有历史登录态
    Object.keys(localStorage)
      .filter((key) => key.startsWith('mmc_session_') && key !== sessionKey)
      .forEach((key) => localStorage.removeItem(key));

    const saved = localStorage.getItem(sessionKey);
    if (saved) {
      const parsed = JSON.parse(saved) as AuthResponse;
      setToken(parsed.token);
      setUser(parsed.user);
      attachToken(parsed.token);
    }
    setInitialized(true);
  }, []);

  const login = (payload: AuthResponse) => {
    setToken(payload.token);
    setUser(payload.user);
    localStorage.setItem(sessionKey, JSON.stringify(payload));
    attachToken(payload.token);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(sessionKey);
    attachToken(null);
  };

  const hasRole = (role: Role) => user?.role === role;

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: Boolean(token),
        hasRole,
        initialized
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
