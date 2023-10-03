import { Persona } from "@/ui-lib";
import Link from "next/link";

export function DefaultNav() {
  return (
    <nav className="flex h-full flex-col gap-4 border-r-2 border-gray-200 pt-4">
      <div className="h-20 w-full">
        <div className="flex w-full cursor-pointer items-center justify-start border-b-2 border-gray-200 pb-2 pl-4">
          <Persona
            fallback={"logo"}
            url={undefined}
            text={"name"}
            subText="pseudo"
          />
        </div>
      </div>
      <Link href={"/app"}>
        <div className="flex items-center justify-center gap-2">
          <p>Your Entreprises</p>
        </div>
      </Link>
      <Link href={"/app/message"}>
        <div className="flex items-center justify-center gap-2">
          <p>Your Messages</p>
        </div>
      </Link>
    </nav>
  );
}
