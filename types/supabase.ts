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
      profiles: {
        Row: {
          id: string;
          created_at: string | null;
          email: string | null;
          role: string | null;
        };
        Insert: {
          id: string;
          created_at?: string | null;
          email?: string | null;
          role?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string | null;
          email?: string | null;
          role?: string | null;
        };
        Relationships: [];
      };
      time_logs: {
        Row: {
          id: number;
          user_id: string;
          clock_in: string | null;
          clock_out: string | null;
          break_minutes: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          clock_in?: string | null;
          clock_out?: string | null;
          break_minutes?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          clock_in?: string | null;
          clock_out?: string | null;
          break_minutes?: number | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "time_logs_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
}
