"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createEvent } from "@/lib/api/event/mutations";

const handleErrors = (e: unknown) => {
  const errMsg = "Error, please try again.";
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === "object" && "error" in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
};

type NewEventParams = {
  name: string;
  start_date: Date;
  end_date: Date;
};

export const createEventAction = async (input: NewEventParams) => {
  try {
    // TODO: parse by insertEventSchema
    const { event } = await createEvent(input);
    return event;
  } catch (err) {
    return handleErrors(err);
  }
};
