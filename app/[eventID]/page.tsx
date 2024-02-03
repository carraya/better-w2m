import { getEventById } from "@/lib/api/event/queries";

export default async function Event({
  params,
}: {
  params: { eventID: string };
}) {
  const event = await getEventById(params.eventID);
  return (
    <>
      <h1>Event</h1>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </>
  );
}
