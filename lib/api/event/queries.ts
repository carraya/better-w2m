import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export const getEventById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.from("event").select().eq("id", id);
  if (error) {
    throw error;
  }

  return data[0];
};
