import { useDispatch, useSelector } from 'react-redux';
import { FolderState } from '../interfaces/FolderInterfaces';
import apiClient from '../services/apiClient';
import { setAllFolders, setError, setLoading } from '../store/slices/foldersSlice';

function useFolders() {
  const dispatch = useDispatch();
  const { loading, error, data }: FolderState = useSelector(
    (state: any) => state.folders
  );

  async function getFolders(token: string) {
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

  async function createFolder(token: string, name: string) {
    try {
      const response = await apiClient.post(
        '/api/folders',
        {
          name: name
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      return true;
    } catch (error: any) {
      return false;
    }
  }

  async function deleteFolder(token: string, folder_id: string) {
    try {
      const response = await apiClient.delete(`/api/folders/${folder_id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });
      return true;
    } catch (error: any) {
      return false;
    }
  }

  return { loading, error, data, getFolders, createFolder, deleteFolder };
}

export default useFolders;
