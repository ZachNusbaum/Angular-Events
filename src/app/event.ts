export interface Event {
  id?: number;
  title: string;
  starts_at: string | number | Date;
  starts?: any;
  ends_at?: string | number | Date;
  ends?: any;
  description: string;
  token?: string;
  created_at?: string;
  updated_at?: string;
  url?: string;
  background_color?: string;
  backgroundColor?: string;
}
