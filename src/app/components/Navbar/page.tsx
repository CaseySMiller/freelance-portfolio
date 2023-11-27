'use client';

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { Navbar, Dropdown, Avatar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import logo from '../../../../public/assets/images/logo/Full_Logo_Light_Small.png'

const user = {
  firstName: 'Bonnie',
  lastName: 'Green',
  email: 'bonnie@green.com',
  initials: 'BG',
};

export default function CustomNav() {
  const pathname = usePathname()

  return (
    <Flowbite>
      <Navbar fluid rounded className='!bg-brand-purple'>
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
        <Navbar.Collapse>
        <Navbar.Link href="/" active={pathname === "/" ? true : false} >
          Home
        </Navbar.Link>
        <Navbar.Link href="/testroute" active={pathname === "/testroute" ? true : false}>About</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/services" ? true : false}>Services</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/pricing" ? true : false}>Pricing</Navbar.Link>
        <Navbar.Link href="/" active={pathname === "/contact" ? true : false}>Contact</Navbar.Link>
      </Navbar.Collapse>
        <div className="flex md:order-2">
        {/* <DarkThemeToggle /> */}
        <Dropdown
          arrowIcon={true}
          inline
          label={<Avatar placeholderInitials={user.initials} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{`${user.firstName} ${user.lastName}`}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Invoices</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>

      </Navbar>
    </Flowbite>
  )
}

