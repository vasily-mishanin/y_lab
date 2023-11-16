import { ReactNode, createContext, useState } from 'react';
import { User } from './hooks/useUser';

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => Promise<void>;
}

const initialValue = {
  user: null,
  setUser: async () => {},
};

const AuthContext = createContext<AuthContext>(initialValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setAppUser = async (user: User | null) => {
    const response = await fetch('/login');
    const data = await response.json();
    console.log({ data });
    setUser(user);
  };

  const value = {
    user,
    setUser: setAppUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
