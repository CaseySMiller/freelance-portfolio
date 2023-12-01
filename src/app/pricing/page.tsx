import Link from "next/link";
import { Button } from "flowbite-react";

export default function Pricing() {
  return (
    <>
      <h1>Pricing</h1>
      <Link href="/movies">
        <Button outline gradientMonochrome="purple">
          Movies
        </Button>
      </Link>
    </>
  );
}
