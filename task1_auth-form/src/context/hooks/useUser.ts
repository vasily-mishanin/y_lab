import { useContext } from 'react';
import { AuthContext } from '../authContext';
import { useLocalStorage } from './useLocalStorage';

export interface User {
  id?: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = async (user: User) => {
    console.log('addUser ', user);
    await setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem('user', '');
  };

  return { user, addUser, removeUser };
};
