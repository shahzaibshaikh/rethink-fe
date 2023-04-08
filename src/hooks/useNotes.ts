import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoteState } from '../interfaces/NoteInterface';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/notesSlice';

function useNotes(folder_id?: string) {
  const dispatch = useDispatch();
  const { loading, error, data }: NoteState = useSelector((state: any) => state.notes);
  const token = localStorage.getItem('token');
  let route: string = '';

  if (folder_id !== 'all') {
    route = `/folder/${folder_id}`;
  }

  useEffect(() => {
    async function getNotes() {
      try {
        dispatch(setLoading(true));

        const response = await apiClient.get(`/api/notes${route}`, {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });

        dispatch(setData(response.data.notes));
        return true;
      } catch (error: any) {
        dispatch(setError(error.response.data.error));
        return false;
      } finally {
        dispatch(setLoading(false));
      }
    }
    if (token) getNotes();
  }, [token, folder_id]);

  return { loading, error, data };
}

export default useNotes;
