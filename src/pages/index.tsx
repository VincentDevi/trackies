import Head from "next/head";
import { Button } from "@/ui-lib/components/buttons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trackies</title>
        <meta name="trackies" content="job tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Trackies
          </h1>
          <p className="text-2xl">Welcome to Trackies</p>
        </div>
        <Link href={"/app"}>
          <Button className="uppercase">Trackies-app </Button>
        </Link>
      </main>
    </>
  );
}
