export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      entry: {
        Row: {
          created_at: string | null
          entry_day: string | null
          id: number
          updated_at: string | null
          url_back_photo_hd: string | null
          url_back_photo_thumbnail: string | null
          url_front_photo_hd: string | null
          url_front_photo_thumbnail: string | null
          user_id: number
        }
        Insert: {
          created_at?: string | null
          entry_day?: string | null
          id?: number
          updated_at?: string | null
          url_back_photo_hd?: string | null
          url_back_photo_thumbnail?: string | null
          url_front_photo_hd?: string | null
          url_front_photo_thumbnail?: string | null
          user_id?: number
        }
        Update: {
          created_at?: string | null
          entry_day?: string | null
          id?: number
          updated_at?: string | null
          url_back_photo_hd?: string | null
          url_back_photo_thumbnail?: string | null
          url_front_photo_hd?: string | null
          url_front_photo_thumbnail?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "entry_user_id_users_id_fk"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: number
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
