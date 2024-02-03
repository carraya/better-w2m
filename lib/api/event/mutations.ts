import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

type NewEventParams = {
  name: string;
  start_date: Date;
  end_date: Date;
};

const cookieStore = cookies();
const supabase = createClient(cookieStore);

export const createEvent = async (event: NewEventParams) => {
  // TODO: parse by insertEventSchema
  try {
    const { data, error } = await supabase.from("event").insert(event).select();
    if (error) {
      throw error;
    }

    return { event: data[0].id };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.log("OH NOOOO");
    console.error(message);
    throw { error: message };
  }
};
