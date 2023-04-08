import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FolderState } from '../interfaces/FolderInterfaces';
import apiClient from '../services/apiClient';
import { setAllFolders, setError, setLoading } from '../store/slices/foldersSlice';

export interface LoginData {
  email: string;
  password: string;
}

function useFolders() {
  const dispatch = useDispatch();
  const { loading, error, data }: FolderState = useSelector(
    (state: any) => state.folders
  );
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function getFolders() {
      try {
        dispatch(setLoading(true));

        const response = await apiClient.get('/api/folders', {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });

        dispatch(setAllFolders(response.data.folders));
        return true;
      } catch (error: any) {
        dispatch(setError(error.response.data.error));
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    }
    if (token) getFolders();
  }, [token]);

  return { loading, error, data };
}

export default useFolders;
