// lib/supabase/server.ts
import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type Database } from "@/types/supabase";

export const createClient = () => {
  const cookieStore = cookies();
  return createServerClient<Database>({ cookies: () => cookieStore });
};
