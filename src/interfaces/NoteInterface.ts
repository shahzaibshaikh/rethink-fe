export interface NoteState {
  error: Error | null;
  loading: boolean;
  data: NoteInfo[] | null;
}

export interface NoteStateOne {
  error: Error | null;
  loading: boolean;
  data: NoteInfo | null;
}

export interface NoteInfo {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  is_favorite: boolean;
  folder?: {
    folder_id: string;
    name: string;
  };
}

export interface NotePayload {
  title: string;
  content: string;
  folder_id?: string;
}

export interface Error {
  error: string;
}
