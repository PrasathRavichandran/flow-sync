import Link from "next/link";
import { MenuIcon } from "lucide-react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="w-full p-4 bg-black/50 backdrop-blur-lg border-b-neutral-900 border-b-[1px] flex justify-between items-center fixed right-0 left-0 top-0">
      <aside className="flex items-center gap-[2px]">
        <p className="text-2xl font-bold">Flowsync</p>
      </aside>

      {/*This absolute transform makes the ul elements to be on center of the navbar*/}
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="list-none flex gap-4 items-center">
          <li>
            <Link href={"#"}>Products </Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Clients</Link>
          </li>
          <li>
            <Link href={"#"}>Resources</Link>
          </li>
          <li>
            <Link href={"#"}>Documentation</Link>
          </li>
          <li>
            <Link href={"#"}>Entreprise</Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
          href={"/dashboard"}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Dashboard
        </Link>
      </aside>

      <MenuIcon className="md:hidden" />
    </header>
  );
}
