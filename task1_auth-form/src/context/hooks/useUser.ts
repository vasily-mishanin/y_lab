import { useContext } from 'react';
import { AuthContext } from '../authContext';
import { dummyHasher } from '../helpers';

export interface User {
  id?: string;
  email: string;
  password?: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user: User) => {
    if (user.password) {
      const _user = { email: user.email, password: dummyHasher(user.password) };
      setUser(_user);
    } else {
      setUser(user);
    }
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser };
};
