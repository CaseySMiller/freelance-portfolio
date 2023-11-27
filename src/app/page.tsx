import Link from 'next/link'
import { Button, Flowbite } from 'flowbite-react';


export default function Home() {
  return (
    // <Flowbite>
      <>
      <h1>Home</h1>
      <Link href="/testroute">testroute link</Link>
      <Button>
        Click Me
      </Button>
      </>
    // {/* </Flowbite> */}
  )
}
