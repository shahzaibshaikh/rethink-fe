export interface UserState {
  loading: boolean;
  error: Error | null;
  data: User | null;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
}

export interface Error {
  error: string;
}
