// "use client";

// import { useState } from "react";
import Link from "next/link";
import { Button, } from "flowbite-react";

export default function Home() {
  // const [waitDone, setWaitDone] = useState("waiting");
  const fakeWait = new Promise((resolve) => setTimeout(resolve, 8000));

  // fakeWait.then(() => {
  //   setWaitDone("done");
  // });

  // useEffect(() => {
  //   fakeWait.then(() => {
  //     console.log("done");
  //   });
  // }, []);

  return (
    <>
      <h1>Home</h1>
      {/* <p>{waitDone}</p> */}
      <Link href="/about">about link</Link>
      <Link href="/movies">
        <Button outline gradientMonochrome="purple">
          Movies
        </Button>
      </Link>
    </>
  );
}
