import { Button } from "@/components/ui/button";


export default function Navs() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-8">
      <h2 className="text-2xl">Buttons</h2>
      <div className="flex flex-row items-center w-full space-x-8">
        <h2 className="text-2xl">Shadcn:</h2>
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-row items-center w-full space-x-8">
        <h2 className="text-2xl">NextUI:</h2>
        
      </div>
    </div>
  );
}
