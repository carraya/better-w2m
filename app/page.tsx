import { NewEventForm } from "@/components/meet-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="rounded-md shadow-sm">
        <CardHeader>
          <CardTitle>New Event Form</CardTitle>
          <CardDescription>
            Enter the information for your new event.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewEventForm />
        </CardContent>
      </Card>
    </main>
  );
}
