export interface Event {
  id?: number;
  title: string;
  starts_at: string;
  ends_at?: string;
  description: string;
  token?: string;
  created_at?: string;
  updated_at?: string;
  url: string;
}
