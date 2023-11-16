import { ReactNode, createContext, useState } from 'react';
import { User } from './hooks/useUser';
import { LoginResponse } from '../mocks/handlers';
import { useLocalStorage } from './hooks/useLocalStorage';

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
  const { setItem, removeItem } = useLocalStorage();

  const authenticateUser = async (user: User | null) => {
    if (user === null) {
      setUser(null);
      removeItem('user');
      return;
    }

    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    const authenticatedUser = (await response.json()) as LoginResponse;
    console.log({ authenticatedUser });
    setUser(authenticatedUser);
    setItem('user', JSON.stringify(authenticatedUser));
  };

  const value = {
    user,
    setUser: authenticateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
