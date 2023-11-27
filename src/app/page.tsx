import Link from 'next/link'
import { Button, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';


export default function Home() {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: 'bg-red-500 hover:bg-red-600',
      },
    },
  };


  return (
    <Flowbite theme={{ theme: customTheme }}>
      <h1>Home</h1>
      <Link href="/testroute">testroute link</Link>
      <Button outline gradientMonochrome="purple">
        Click Me
      </Button>
    </Flowbite>
  )
}
