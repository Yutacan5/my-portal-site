import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabaseの設定を入力
const supabaseUrl: string = 'https://kklarueheycaqrfdkahs.supabase.co';
const supabaseKey: string =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrbGFydWVoZXljYXFyZmRrYWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MjQ4MDIsImV4cCI6MjA0OTQwMDgwMn0.Wo36ABr_E4Wc0FOOmoyb0HJz45pZKfyC3GlAjupbPoY';

// Supabaseクライアントを作成
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

