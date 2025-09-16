import { SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

export const supabase = new SupabaseClient(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_ANON_KEY
);