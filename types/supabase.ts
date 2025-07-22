export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      clock_entries: {
        Row: {
          id: number;
          staff_id: number;
          clock_in: string;
          clock_out: string | null;
          break_minutes: number;
          created_at: string;
        };
        Insert: {
          staff_id: number;
          clock_in: string;
          clock_out?: string | null;
          break_minutes?: number;
        };
        Update: {
          clock_out?: string | null;
          break_minutes?: number;
        };
      };
      staff: {
        Row: {
          id: number;
          name: string;
          pin: string;
          is_admin: boolean;
          hourly_rate: number;
          created_at: string;
        };
        Insert: {
          name: string;
          pin: string;
          is_admin?: boolean;
          hourly_rate: number;
        };
        Update: {
          name?: string;
          pin?: string;
          is_admin?: boolean;
          hourly_rate?: number;
        };
      };
      takings: {
        Row: {
          id: number;
          amount: number;
          date: string;
          created_at: string;
        };
        Insert: {
          amount: number;
          date: string;
        };
        Update: {
          amount?: number;
          date?: string;
        };
      };
    };
  };
}
