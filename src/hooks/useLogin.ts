import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../interfaces/UserInterfaces';
import apiClient from '../services/apiClient';
import { setUser, setError, setLoading } from '../store/slices/usersSlice';

interface LoginData {
  email: string;
  password: string;
}

interface UseLogin {
  login: (loginData: LoginData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

function useLogin(): UseLogin {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setLocalError] = useState<string | null>(null);

  async function login(loginData: LoginData) {
    try {
      dispatch(setLoading(true));
      setIsLoading(true);
      const response = await apiClient.post('/api/users/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        email: loginData.email,
        password: loginData.password
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error: any) {
      dispatch(setError(error.message));
      setLocalError(error.message);
    } finally {
      dispatch(setLoading(false));
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}

export default useLogin;
