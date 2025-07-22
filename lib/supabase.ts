// lib/supabase/client.ts
import { createBrowserClient } from "@supabase/auth-helpers-nextjs";
import { type Database } from "@/types/supabase";

export const createClient = () => {
  return createBrowserClient<Database>();
};
