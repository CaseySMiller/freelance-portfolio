'use client';

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { Navbar, Dropdown, Avatar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import logo from '../../../../public/assets/images/logo/Full_Logo_Light_Small.png'

import './style.css'

export default function CustomNav() {
  const pathname = usePathname()

  return (
    <Flowbite>
      <Navbar fluid rounded className='custom-navbar'>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <Image 
            src={logo} 
            alt="codeKase Logo" 
            width={100}
            height={100}
            priority
            className="mr-3 h-9"
          />
        </Navbar.Brand>
        <div className="flex md:order-1">
        {/* <DarkThemeToggle /> */}
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={pathname === "/" ? true : false} >
          Home
        </Navbar.Link>
        <Navbar.Link href="/testroute" active={pathname === "/testroute" ? true : false}>About</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/services" ? true : false}>Services</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/pricing" ? true : false}>Pricing</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/contact" ? true : false}>Contact</Navbar.Link>
      </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  )
}

