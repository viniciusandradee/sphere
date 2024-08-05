import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-togle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sphere</h1>
      <ModeToggle />
      <Button>Login</Button>
    </main>
  );
}
