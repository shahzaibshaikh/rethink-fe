import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../interfaces/UserInterfaces';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/noteDetailSlice';

export interface NoteData {
  title: string;
  content: string;
  id?: string;
  folder_id?: string;
}

function useCreateNote() {
  const dispatch = useDispatch();
  const { loading, error, data }: UserState = useSelector(
    (state: any) => state.noteDetail
  );

  async function createNote(token: string, noteData: NoteData) {
    const payload: NoteData = {
      title: noteData?.title,
      content: noteData?.content
    };

    payload.folder_id = noteData?.folder_id ? noteData.folder_id : '';

    try {
      dispatch(setLoading(true));
      const response = await apiClient.post('/api/notes', payload, {
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

  async function saveNote(token: string, noteData: NoteData) {
    const payload: NoteData = {
      title: noteData?.title,
      content: noteData?.content
    };

    if (noteData?.folder_id) payload.folder_id = noteData.folder_id;

    try {
      dispatch(setLoading(true));
      const response = await apiClient.put(`/api/notes/${noteData.id}`, payload, {
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

  async function favoriteNote(token: string, id: string) {
    try {
      dispatch(setLoading(true));
      const response = await apiClient.put(
        `/api/notes/${id}`,
        {
          is_favorite: true
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

  async function removeFavoriteNote(token: string, id: string) {
    try {
      dispatch(setLoading(true));
      const response = await apiClient.put(
        `/api/notes/${id}`,
        {
          is_favorite: false
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

  return {
    createNote,
    loading,
    error,
    data,
    saveNote,
    deleteNote,
    favoriteNote,
    removeFavoriteNote
  };
}

export default useCreateNote;
