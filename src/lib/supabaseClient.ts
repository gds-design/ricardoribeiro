import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const formattedUrl = supabaseUrl
  ? supabaseUrl.startsWith("http")
    ? supabaseUrl
    : `https://${supabaseUrl}`
  : "https://placeholder-ricardo.supabase.co"; // safe fallback to prevent initialization crashes

export const supabase = createClient(formattedUrl, supabaseAnonKey || "placeholder-key");
