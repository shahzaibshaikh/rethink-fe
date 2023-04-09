import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../interfaces/UserInterfaces';
import apiClient from '../services/apiClient';
import { setUser, setError, setLoading } from '../store/slices/usersSlice';

export interface LoginData {
  email: string;
  password: string;
}

function useLogin() {
  const dispatch = useDispatch();
  const { loading, error, data }: UserState = useSelector((state: any) => state.user);

  async function login(loginData: LoginData) {
    try {
      dispatch(setLoading(true));

      const response = await apiClient.post('/api/users/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        email: loginData.email,
        password: loginData.password
      });

      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      const expirationTime = new Date().getTime() + 43200 * 1000;
      localStorage.setItem('tokenExpiration', expirationTime.toString());
      return true;
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  }

  return { login, loading, error, data };
}

export default useLogin;
