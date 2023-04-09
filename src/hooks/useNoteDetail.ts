import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NoteState } from '../interfaces/NoteInterface';
import apiClient from '../services/apiClient';
import { setData, setError, setLoading } from '../store/slices/noteDetailSlice';

function useNoteDetail(note_id: string | undefined) {
  const dispatch = useDispatch();
  const { loading, error, data }: NoteState = useSelector(
    (state: any) => state.noteDetail
  );
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function getNote() {
      try {
        dispatch(setLoading(true));

        const response = await apiClient.get(`/api/notes/${note_id}`, {
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
    if (token && note_id) getNote();
  }, [token, note_id]);

  return { loading, error, data };
}

export default useNoteDetail;
