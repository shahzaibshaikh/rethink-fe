export interface FolderState {
  loading: boolean;
  error: Error | null;
  data: FolderData | null;
}

export interface FolderData {
  folders: FolderInfo[];
  selectedFolder: string;
}

export interface FolderInfo {
  _id: string;
  name: string;
  user: string;
  is_deleted: false;
  created_at: string;
  updated_at: string;
}

export interface Error {
  error: string;
}
