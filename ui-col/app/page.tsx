import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
      <div className="space-y-4">
        <h2>UI component collection:</h2>
        <div className="flex flex-row space-x-4">
          <Link href={"/collection/buttons"} className={buttonVariants({ variant: "secondary" })}>Buttons</Link>
          <Link href={"/collection/navs"} className={buttonVariants({ variant: "secondary" })}>Navs</Link>
        </div>
      </div>

      <Link href={"/comparison"} className={buttonVariants({ variant: "secondary" })}>Shadcn vs NextUI - Component Comparison</Link>

      <div className="space-y-4">
        <h2>Shadcn examples:</h2>
        <div className="flex flex-row space-x-4">
          <Link href={"/shadcn/dashboard"} className={buttonVariants({ variant: "secondary" })}>Dashboard</Link>
          <Link href={"/shadcn/mail"} className={buttonVariants({ variant: "secondary" })}>Mail</Link>
          <Link href={"/shadcn/cards"} className={buttonVariants({ variant: "secondary" })}>Cards</Link>
          <Link href={"/shadcn/tasks"} className={buttonVariants({ variant: "secondary" })}>Tasks</Link>
          <Link href={"/shadcn/playground"} className={buttonVariants({ variant: "secondary" })}>Playground</Link>
          <Link href={"/shadcn/forms"} className={buttonVariants({ variant: "secondary" })}>Forms</Link>
          <Link href={"/shadcn/music"} className={buttonVariants({ variant: "secondary" })}>Music</Link>
          <Link href={"/shadcn/authentication"} className={buttonVariants({ variant: "secondary" })}>Authentication</Link>
        </div>
      </div>
      
    </main>
  );
}
