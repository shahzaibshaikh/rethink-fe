import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../interfaces/UserInterfaces';
import apiClient from '../services/apiClient';
import { setUser, setError, setLoading } from '../store/slices/usersSlice';

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

function useRegister() {
  const dispatch = useDispatch();
  const { loading, error, data }: UserState = useSelector((state: any) => state.user);

  async function register(registerData: RegisterData) {
    try {
      dispatch(setLoading(true));

      const response = await apiClient.post(
        '/api/users/register',
        {
          first_name: registerData.first_name,
          last_name: registerData.last_name,
          email: registerData.email,
          password: registerData.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

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

  return { register, loading, error, data };
}

export default useRegister;
