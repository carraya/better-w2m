import { InputGrid } from "@/components/input-grid";
import { Button } from "@/components/ui/button";
import { getEventById } from "@/lib/api/event/queries";

export default async function Event({
  params,
}: {
  params: { eventID: string };
}) {
  // const event = await getEventById(params.eventID);
  return (
    <main className="flex flex-col min-h-screen p-[60px]">
      <div className="pb-5 flex">
        <h1 className="text-2xl">TechX Meeting</h1>
        <div className="flex-1"></div>
        <Button className="mr-2">Share Link</Button>
        <Button className="bg-blue-500">Fill Out Availability</Button>
      </div>
      <div className="flex flex-1 gap-[60px]">
        <div id="individual" className="flex-1 bg-red-300">
          <h3 className="font-bold">Your Availability</h3>
        </div>
        <div id="group" className="flex flex-col flex-1 bg-green-300">
          <h3 className="font-bold">Group's Availability</h3>
          <InputGrid></InputGrid>
        </div>
      </div>
    </main>
  );
}
