import Button1 from "@/components/buttons/Button1";
import Button10 from "@/components/buttons/Button10";
import Button2 from "@/components/buttons/Button2";
import Button3 from "@/components/buttons/Button3";
import Button4 from "@/components/buttons/Button4";
import Button5 from "@/components/buttons/Button5";
import Button6 from "@/components/buttons/Button6";
import Button7 from "@/components/buttons/Button7";
import Button8 from "@/components/buttons/Button8";
import Button9 from "@/components/buttons/Button9";
import { Button } from "@/components/ui/button";


export default function Buttons() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-24 space-y-8">
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
      <div className="flex flex-row items-center w-full space-x-8">
        <h2 className="text-2xl">DevDojo:</h2>
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}
