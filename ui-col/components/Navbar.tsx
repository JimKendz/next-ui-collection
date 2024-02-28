import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
    return (
        <div>
            <header>
                <nav>
                    <ul className="flex items-center justify-between text-2xl font-bold px-12 py-4 border-b border-primary">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <ModeToggle />
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}