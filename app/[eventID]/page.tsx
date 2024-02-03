import { getEventById } from "@/lib/api/event/queries";

export default async function Event({
  params,
}: {
  params: { eventID: string };
}) {
  // const event = await getEventById(params.eventID);
  return (
    <main>
      <h1>Helo</h1>
    </main>
  );
}
