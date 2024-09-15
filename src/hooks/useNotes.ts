import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoteState } from '../interfaces/NoteInterface';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/notesSlice';

function useNotes() {
  const dispatch = useDispatch();
  const { loading, error, data }: NoteState = useSelector((state: any) => state.notes);

  async function getNotes(token: string, folder_id?: string) {
    let route: string = '';

    if (folder_id !== 'all') {
      route = `/folder/${folder_id}`;
    }

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

  async function searchNotes(token: string, searchQuery: string) {
    try {
      dispatch(setLoading(true));

      const response = await apiClient.get(`/api/notes/search?searchQuery=${searchQuery}`, {
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

  return { loading, error, data, getNotes,searchNotes };
}

export default useNotes;
