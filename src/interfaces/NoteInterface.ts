export interface NoteState {
  error: Error | null;
  loading: boolean;
  data: NoteInfo[] | null;
}

export interface NoteInfo {
  _id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Error {
  error: string;
}
