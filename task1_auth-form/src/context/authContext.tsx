import { ReactNode, createContext, useState } from 'react';
import { User } from './hooks/useUser';
import { LoginResponse } from '../mocks/handlers';
import { useLocalStorage } from './hooks/useLocalStorage';

interface AuthContext {
  user: User | null;
  error: string | null;
  loading: boolean;
  setUser: (user: User | null) => Promise<void>;
}

const initialValue = {
  user: null,
  error: null,
  loading: false,
  setUser: async () => {},
};

const AuthContext = createContext<AuthContext>(initialValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { setItem, removeItem } = useLocalStorage();

  const authenticateUser = async (user: User | null) => {
    if (user === null) {
      setUser(null);
      removeItem('user');
      return;
    }

    setLoading(true);
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      setLoading(false);
      setError(response.statusText);
      return;
    }

    const authenticatedUser = (await response.json()) as LoginResponse;
    setLoading(false);
    setUser(authenticatedUser);
    setItem('user', JSON.stringify(authenticatedUser));
  };

  const value = {
    user,
    error,
    loading,
    setUser: authenticateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
