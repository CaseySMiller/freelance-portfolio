"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

export default function Home() {
  const [waitDone, setWaitDone] = useState("waiting");
  const fakeWait = new Promise((resolve) => setTimeout(resolve, 8000));

  fakeWait.then(() => {
    setWaitDone("done");
  });

  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: "bg-red-500 hover:bg-red-600",
      },
    },
  };

  // useEffect(() => {
  //   fakeWait.then(() => {
  //     console.log("done");
  //   });
  // }, []);

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <h1>Home</h1>
      <p>{waitDone}</p>
      <Link href="/about">about link</Link>
      <Link href="/movies">
        <Button outline gradientMonochrome="purple">
          Click Me
        </Button>
      </Link>
    </Flowbite>
  );
}
