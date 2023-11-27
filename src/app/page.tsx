import Link from 'next/link'
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/testroute">testroute link</Link>
      <Button>
        Click Me
      </Button>
    </>
  )
}
