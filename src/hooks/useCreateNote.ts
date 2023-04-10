import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../interfaces/UserInterfaces';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/noteDetailSlice';

export interface NoteData {
  title: string;
  content: string;
  id?: string;
  folder?: string;
}

function useCreateNote() {
  const dispatch = useDispatch();
  const { loading, error, data }: UserState = useSelector(
    (state: any) => state.noteDetail
  );

  async function createNote(token: string, noteData: NoteData) {
    try {
      dispatch(setLoading(true));
      const response = await apiClient.post(
        '/api/notes',
        {
          title: noteData?.title,
          content: noteData?.content
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );

      dispatch(setData(response.data.note));
      return true;
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function saveNote(token: string, noteData: NoteData) {
    try {
      dispatch(setLoading(true));
      const response = await apiClient.put(
        `/api/notes/${noteData.id}`,
        {
          title: noteData?.title,
          content: noteData?.content
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );

      dispatch(setData(response.data.note));
      return true;
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function deleteNote(token: string, id: string) {
    try {
      dispatch(setLoading(true));
      const response = await apiClient.delete(`/api/notes/${id}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });

      dispatch(setData(response.data.note));
      return true;
    } catch (error: any) {
      dispatch(setError(error.response.data.error));
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  }

  return { createNote, loading, error, data, saveNote, deleteNote };
}

export default useCreateNote;
